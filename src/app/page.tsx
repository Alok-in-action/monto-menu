
"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import MenuCategorySection from '@/components/menu/MenuCategorySection';
import CategoryNavigationBar from '@/components/menu/CategoryNavigationBar';
import { MOCK_MENU_DATA } from '@/lib/constants';
import type { MenuCategory } from '@/types';
import { Input } from '@/components/ui/input';
import { Search, Loader2 } from 'lucide-react';
import { correctMenuQuery } from '@/ai/flows/correct-menu-query';

const SCROLL_OFFSET_PRECISION = 1; // px, adjustment for scroll/observer alignment.

export default function MenuPage() {
  const menuData: MenuCategory[] = MOCK_MENU_DATA;
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [aiCorrectedQuery, setAiCorrectedQuery] = useState<string>('');
  const [isAICorrecting, setIsAICorrecting] = useState(false);

  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageHeaderRef = useRef<HTMLElement | null>(null);
  const stickyHeaderRef = useRef<HTMLDivElement | null>(null);

  const menuContextString = useMemo(() => {
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
  }, [menuData]);

  useEffect(() => {
    menuData.forEach(category => {
      categoryRefs.current[category.id] = document.getElementById(category.id);
    });
  }, [menuData]);

  useEffect(() => {
    if (menuData.length > 0 && !activeCategoryId) {
      setActiveCategoryId(menuData[0].id);
    }
  }, [menuData, activeCategoryId]);

  useEffect(() => {
    const debouncedSearch = async () => {
      if (!searchQuery.trim()) {
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
        setAiCorrectedQuery(searchQuery); // Fallback to original query on error
      } finally {
        setIsAICorrecting(false);
      }
    };

    const timeoutId = setTimeout(debouncedSearch, 500); // 500ms debounce
    return () => clearTimeout(timeoutId);
  }, [searchQuery, menuContextString]);

  const finalSearchQuery = useMemo(() => {
    if (!searchQuery.trim()) return '';
    return aiCorrectedQuery || searchQuery;
  }, [searchQuery, aiCorrectedQuery]);


  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const siteHeader = document.querySelector('header');
    const currentStickyHeader = stickyHeaderRef.current;

    let rootMarginTop = 0;
    if (siteHeader) rootMarginTop += siteHeader.offsetHeight;
    if (currentStickyHeader) rootMarginTop += currentStickyHeader.offsetHeight;

    const observerOptions = {
      root: null,
      rootMargin: `-${rootMarginTop + SCROLL_OFFSET_PRECISION}px 0px 0px 0px`,
      threshold: 0.01,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
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
  }, [menuData, stickyHeaderRef, finalSearchQuery]);

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      const siteHeader = document.querySelector('header');
      const currentStickyHeader = stickyHeaderRef.current;
      let offset = 0;
      if (siteHeader) offset += siteHeader.offsetHeight;
      if (currentStickyHeader) offset += currentStickyHeader.offsetHeight;

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset - SCROLL_OFFSET_PRECISION;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const hasAnyResults = useMemo(() => {
    if (!finalSearchQuery.trim()) return true;
    const normalizedQuery = finalSearchQuery.toLowerCase().trim();
    return menuData.some(category =>
      category.dishes.some(dish =>
        dish.nameEn.toLowerCase().includes(normalizedQuery) ||
        dish.nameHi.toLowerCase().includes(normalizedQuery) ||
        (dish.description && dish.description.toLowerCase().includes(normalizedQuery))
      )
    );
  }, [finalSearchQuery, menuData]);

  return (
    <div className="space-y-8">
      <header className="text-center" ref={pageHeaderRef}>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore our delicious offerings</p>
      </header>

      <div
        ref={stickyHeaderRef}
        className="sticky top-16 z-40 bg-card shadow-md p-4 space-y-4 rounded-b-lg"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search menu items (e.g., Dosa, Paneer, Noodles)..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search menu items"
          />
          {isAICorrecting && (
            <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground animate-spin" />
          )}
        </div>
        {searchQuery.trim() && !isAICorrecting && aiCorrectedQuery && searchQuery.toLowerCase() !== aiCorrectedQuery.toLowerCase() && (
          <p className="text-xs text-muted-foreground text-center">
            Showing results for "<strong>{aiCorrectedQuery}</strong>" (corrected from "{searchQuery}")
          </p>
        )}
        {menuData.length > 0 && (
          <CategoryNavigationBar
            categories={menuData}
            selectedCategoryId={activeCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        )}
      </div>

      <div className="space-y-12">
        {finalSearchQuery.trim() && !hasAnyResults && !isAICorrecting ? (
          <div className="text-center py-12">
            <Search className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <p className="text-xl text-muted-foreground">No menu items match your search for: "{searchQuery}"
              {aiCorrectedQuery && searchQuery.toLowerCase() !== aiCorrectedQuery.toLowerCase() && ` (tried "${aiCorrectedQuery}")`}
            </p>
          </div>
        ) : (
          menuData.map((category) => (
            <MenuCategorySection
              key={category.id}
              category={category}
              searchQueryToFilter={finalSearchQuery} // Use the corrected query for filtering
            />
          ))
        )}
      </div>
    </div>
  );
}
