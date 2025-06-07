
"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import MenuCategorySection from '@/components/menu/MenuCategorySection';
import CategoryNavigationBar from '@/components/menu/CategoryNavigationBar';
import { MOCK_MENU_DATA, PLACEHOLDER_IMAGE_URL } from '@/lib/constants'; 
import type { MenuCategory, Dish } from '@/types';
import { Input } from '@/components/ui/input';
import { Search, Loader2 } from 'lucide-react';
import { correctMenuQuery } from '@/ai/flows/correct-menu-query';

const SCROLL_OFFSET_PRECISION = 1; // px, adjustment for scroll/observer alignment.

export default function MenuPage() {
  const [menuData, setMenuData] = useState<MenuCategory[]>([]);
  const [isLoadingMenu, setIsLoadingMenu] = useState(true);
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiCorrectedQuery, setAiCorrectedQuery] = useState<string>('');
  const [isAICorrecting, setIsAICorrecting] = useState(false);

  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const pageHeaderRef = useRef<HTMLElement | null>(null);
  const categoryNavWrapperRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    setIsLoadingMenu(true);
    // Simulate API call to load mock data
    setTimeout(() => {
      const dataWithPlaceholders = MOCK_MENU_DATA.map(category => ({
        ...category,
        dishes: category.dishes.map(dish => ({
          ...dish,
          imageUrl: dish.imageUrl || PLACEHOLDER_IMAGE_URL,
          category: category.id, 
        }))
      }));
      setMenuData(dataWithPlaceholders);
      if (dataWithPlaceholders.length > 0) {
        setActiveCategoryId(dataWithPlaceholders[0].id);
      }
      setIsLoadingMenu(false);
    }, 500); 
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
    if (menuData.length > 0) {
        menuData.forEach(category => {
            categoryRefs.current[category.id] = document.getElementById(category.id);
        });
    }
  }, [menuData]);


  useEffect(() => {
    const debouncedSearch = async () => {
      if (!searchQuery.trim() || !menuContextString) {
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
    if (isLoadingMenu || menuData.length === 0) return;

    const siteHeader = document.querySelector('header[data-site-header="true"]');
    const currentCategoryNavWrapper = categoryNavWrapperRef.current;

    let rootMarginTop = 0;
    if (siteHeader) rootMarginTop += siteHeader.offsetHeight;
    if (currentCategoryNavWrapper) rootMarginTop += currentCategoryNavWrapper.offsetHeight;

    const observerOptions = {
      root: null,
      rootMargin: `-${rootMarginTop + SCROLL_OFFSET_PRECISION}px 0px 0px 0px`,
      threshold: 0.01,
    };

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (activeCategoryId !== visibleEntries[0].target.id) {
            setActiveCategoryId(visibleEntries[0].target.id);
        }
      }
    }, observerOptions);

    Object.values(categoryRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [menuData, isLoadingMenu, finalSearchQuery, activeCategoryId]); 


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
  }, [isLoadingMenu, finalSearchQuery, isAICorrecting, setActiveCategoryId]); 

  const hasAnyResults = useMemo(() => {
    if (!finalSearchQuery.trim()) return true;
    if (isLoadingMenu) return true;
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
          {(isAICorrecting || isLoadingMenu) && ( 
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
