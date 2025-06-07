
"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import MenuCategorySection from '@/components/menu/MenuCategorySection';
import CategoryNavigationBar from '@/components/menu/CategoryNavigationBar';
import { CATEGORY_ICONS, PLACEHOLDER_IMAGE_URL } from '@/lib/constants';
import type { MenuCategory, Dish } from '@/types';
import { Input } from '@/components/ui/input';
import { Search, Loader2 } from 'lucide-react';
import { correctMenuQuery } from '@/ai/flows/correct-menu-query';
import { supabase } from '@/lib/supabaseClient'; // Import Supabase client

const SCROLL_OFFSET_PRECISION = 1; // px, adjustment for scroll/observer alignment.

export default function MenuPage() {
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiCorrectedQuery, setAiCorrectedQuery] = useState<string>('');
  const [isAICorrecting, setIsAICorrecting] = useState(false);

  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageHeaderRef = useRef<HTMLElement | null>(null);
  const categoryNavWrapperRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    const fetchMenuData = async () => {
      setIsLoadingMenu(true);
      try {
        const { data: categoriesData, error: categoriesError } = await supabase
          .from('menu_categories')
          .select('id, name_en, name_hi, icon_name')
          .order('sort_order', { ascending: true });

        if (categoriesError) throw categoriesError;
        if (!categoriesData) throw new Error('No categories found');

        const fetchedMenuData: MenuCategory[] = await Promise.all(
          categoriesData.map(async (cat) => {
            const { data: dishesData, error: dishesError } = await supabase
              .from('dishes')
              .select('id, name_en, name_hi, price, description, image_url, is_vegetarian, data_ai_hint')
              .eq('category_id', cat.id)
              .order('sort_order', { ascending: true });

            if (dishesError) throw dishesError;

            return {
              id: cat.id,
              nameEn: cat.name_en,
              nameHi: cat.name_hi || cat.name_en,
              icon: CATEGORY_ICONS[cat.icon_name || 'Default'] || CATEGORY_ICONS['Default'],
              dishes: (dishesData || []).map(d => ({
                ...d,
                category: cat.id, // Ensure category property is set on dish
                imageUrl: d.image_url || PLACEHOLDER_IMAGE_URL,
                // dataAiHint is assumed to come from DB or can be generated
              }) as Dish),
            };
          })
        );
        setMenuData(fetchedMenuData);
        if (fetchedMenuData.length > 0) {
          setActiveCategoryId(fetchedMenuData[0].id);
        }
      } catch (error) {
        console.error("Error fetching menu data from Supabase:", error);
        setMenuData([]); // Set to empty or show error state
      } finally {
        setIsLoadingMenu(false);
      }
    };

    fetchMenuData();
  }, []);


  const menuContextString = useMemo(() => {
    if (isLoadingMenu || menuData.length === 0) return '';
    const texts = new Set<string>();
    menuData.forEach(category => {
      texts.add(category.nameEn);
      texts.add(category.nameHi);
      category.dishes.forEach(dish => {
        texts.add(dish.nameEn);
        texts.add(dish.nameHi);
        if (dish.description) {
          texts.add(dish.description);
        }
      });
    });
    return Array.from(texts).join(', ');
  }, [menuData, isLoadingMenu]);

  useEffect(() => {
    menuData.forEach(category => {
      categoryRefs.current[category.id] = document.getElementById(category.id);
    });
  }, [menuData]);


  useEffect(() => {
    const debouncedSearch = async () => {
      if (!searchQuery.trim() || !menuContextString) { // Don't run if menuContext is not ready
        setAiCorrectedQuery('');
        setIsAICorrecting(false);
        return;
      }
      setIsAICorrecting(true);
      try {
        const result = await correctMenuQuery({ query: searchQuery, menuContext: menuContextString });
        setAiCorrectedQuery(result.correctedQuery || searchQuery);
      } catch (error) {
        console.error("AI query correction error:", error);
        setAiCorrectedQuery(searchQuery);
      } finally {
        setIsAICorrecting(false);
      }
    };

    const timeoutId = setTimeout(debouncedSearch, 500);
    return () => clearTimeout(timeoutId);
  }, [searchQuery, menuContextString]);

  const finalSearchQuery = useMemo(() => {
    if (!searchQuery.trim()) return '';
    return aiCorrectedQuery || searchQuery;
  }, [searchQuery, aiCorrectedQuery]);


  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();
    if (isLoadingMenu || menuData.length === 0) return; // Don't setup observer if no data

    const siteHeader = document.querySelector('header[data-site-header="true"]'); // Target specific header
    const currentCategoryNavWrapper = categoryNavWrapperRef.current;

    let rootMarginTop = 0;
    if (siteHeader) rootMarginTop += siteHeader.offsetHeight;
    if (currentCategoryNavWrapper) rootMarginTop += currentCategoryNavWrapper.offsetHeight;

    const observerOptions = {
      root: null,
      rootMargin: `-${rootMarginTop + SCROLL_OFFSET_PRECISION}px 0px 0px 0px`,
      threshold: 0.01, // A small part of the element is visible
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by top position to get the one "most in view" at the top
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        setActiveCategoryId(visibleEntries[0].target.id);
      }
    }, observerOptions);

    const currentObserver = observerRef.current;
    Object.values(categoryRefs.current).forEach(ref => {
      if (ref) currentObserver.observe(ref);
    });

    return () => {
      if (currentObserver) currentObserver.disconnect();
    };
  }, [menuData, isLoadingMenu, finalSearchQuery]); // Added finalSearchQuery to re-observe if filter changes elements

  const handleCategorySelect = useCallback((categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const siteHeader = document.querySelector('header[data-site-header="true"]');
      const currentCategoryNavWrapper = categoryNavWrapperRef.current;
      let offset = 0;
      if (siteHeader) offset += siteHeader.offsetHeight;
      if (currentCategoryNavWrapper) offset += currentCategoryNavWrapper.offsetHeight;

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset - SCROLL_OFFSET_PRECISION;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const hasAnyResults = useMemo(() => {
    if (!finalSearchQuery.trim()) return true;
    if (isLoadingMenu) return true; // Assume results while loading
    const normalizedQuery = finalSearchQuery.toLowerCase().trim();
    return menuData.some(category =>
      category.dishes.some(dish =>
        dish.nameEn.toLowerCase().includes(normalizedQuery) ||
        dish.nameHi.toLowerCase().includes(normalizedQuery) ||
        (dish.description && dish.description.toLowerCase().includes(normalizedQuery))
      )
    );
  }, [finalSearchQuery, menuData, isLoadingMenu]);

  return (
    <div className="space-y-8">
      <header className="text-center" ref={pageHeaderRef}>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore our delicious offerings</p>
      </header>

      <div
        ref={categoryNavWrapperRef}
        className="sticky top-16 z-40 bg-card shadow-md p-4 space-y-4 rounded-b-lg"
        // Placeholder height: buttons (6rem) + padding (1.5rem) + scrollbar (0.625rem) + border (2px)
        // = 8.125rem + 2px. The sticky element itself will define its height.
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search menu items (e.g., Dosa, Paneer)..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search menu items"
          />
          {(isAICorrecting || isLoadingMenu) && ( // Show loader if AI is correcting OR menu is loading
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin" />
          )}
        </div>
        {searchQuery.trim() && !isAICorrecting && !isLoadingMenu && aiCorrectedQuery && searchQuery.toLowerCase() !== aiCorrectedQuery.toLowerCase() && (
          <p className="text-xs text-muted-foreground text-center">
            Showing results for "<strong>{aiCorrectedQuery}</strong>" (corrected from "{searchQuery}")
          </p>
        )}
        {!isLoadingMenu && menuData.length > 0 && (
          <CategoryNavigationBar
            categories={menuData}
            selectedCategoryId={activeCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        )}
        {isLoadingMenu && (
           <div className="text-center py-4 text-muted-foreground">Loading menu categories...</div>
        )}
      </div>

      <div className="space-y-12">
        {isLoadingMenu ? (
          <div className="text-center py-12">
            <Loader2 className="mx-auto h-24 w-24 text-primary animate-spin mb-4" />
            <p className="text-xl text-muted-foreground">Loading delicious menu items...</p>
          </div>
        ) : finalSearchQuery.trim() && !hasAnyResults && !isAICorrecting ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">No menu items match your search for: "{searchQuery}"
              {aiCorrectedQuery && searchQuery.toLowerCase() !== aiCorrectedQuery.toLowerCase() && ` (tried "${aiCorrectedQuery}")`}
            </p>
          </div>
        ) : menuData.length === 0 && !isLoadingMenu ? (
           <div className="text-center py-12">
            <Search className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">No menu items available at the moment. Please check back later!</p>
          </div>
        ) : (
          menuData.map((category) => (
            <MenuCategorySection
              key={category.id}
              category={category}
              searchQueryToFilter={finalSearchQuery}
            />
          ))
        )}
      </div>
    </div>
  );
}
