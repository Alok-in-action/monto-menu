
"use client";

import { useState, useEffect, useRef } from 'react';
import MenuCategorySection from '@/components/menu/MenuCategorySection';
import CategoryNavigationBar from '@/components/menu/CategoryNavigationBar';
import { MOCK_MENU_DATA } from '@/lib/constants';
import type { MenuCategory } from '@/types';

const SCROLL_OFFSET_PRECISION = 1; // px, adjustment for scroll/observer alignment.

export default function MenuPage() {
  const menuData: MenuCategory[] = MOCK_MENU_DATA;
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageHeaderRef = useRef<HTMLElement | null>(null);
  const categoryNavRef = useRef<HTMLDivElement | null>(null);

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
    if (observerRef.current) observerRef.current.disconnect();

    const siteHeader = document.querySelector('header'); // Main site header
    const categoryNavBarElement = categoryNavRef.current; // The sticky div for CategoryNavigationBar

    let rootMarginTop = 0;
    if (siteHeader) rootMarginTop += siteHeader.offsetHeight;
    if (categoryNavBarElement) rootMarginTop += categoryNavBarElement.offsetHeight;

    const observerOptions = {
      root: null, // observing intersections relative to the viewport
      rootMargin: `-${rootMarginTop + SCROLL_OFFSET_PRECISION}px 0px 0px 0px`,
      threshold: 0.01, // How much of the element needs to be visible (close to 0 means as soon as it enters)
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
      if (currentObserver) {
        currentObserver.disconnect();
      }
    };
  }, [menuData, categoryNavRef]); // Rerun if menuData or categoryNavRef changes (or its offsetHeight changes)

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryId(categoryId); // Immediately update active state for responsiveness
    const element = document.getElementById(categoryId);
    if (element) {
      const siteHeader = document.querySelector('header');
      const categoryNavBarElement = categoryNavRef.current; // The sticky div
      let offset = 0;
      if (siteHeader) offset += siteHeader.offsetHeight;
      if (categoryNavBarElement) offset += categoryNavBarElement.offsetHeight;

      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset - SCROLL_OFFSET_PRECISION;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-8">
      <header className="text-center" ref={pageHeaderRef}>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore our delicious offerings</p>
      </header>

      {menuData.length > 0 && (
        <div
          ref={categoryNavRef}
          className="sticky top-16 z-40 bg-card shadow" // This div is now sticky
        >
          <CategoryNavigationBar
            categories={menuData}
            selectedCategoryId={activeCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        </div>
      )}

      <div className="space-y-12">
        {menuData.map((category) => (
          <MenuCategorySection
            key={category.id}
            category={category}
          />
        ))}
      </div>
    </div>
  );
}
