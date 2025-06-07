
"use client";

import { useState, useEffect, useRef } from 'react';
import MenuCategorySection from '@/components/menu/MenuCategorySection';
import CategoryNavigationBar from '@/components/menu/CategoryNavigationBar';
import { MOCK_MENU_DATA } from '@/lib/constants';
import type { MenuCategory } from '@/types';

const SCROLL_OFFSET_BUFFER = 8; // px, buffer below sticky headers

export default function MenuPage() {
  const menuData: MenuCategory[] = MOCK_MENU_DATA;
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageHeaderRef = useRef<HTMLElement | null>(null); // Ref for the "Our Menu" header
  const categoryNavRef = useRef<HTMLDivElement | null>(null); // Ref for the CategoryNavigationBar container

  // Initialize category refs
  useEffect(() => {
    menuData.forEach(category => {
      categoryRefs.current[category.id] = document.getElementById(category.id);
    });
  }, [menuData]);

  // Set initial active category
  useEffect(() => {
    if (menuData.length > 0 && !activeCategoryId) { // Only set if not already set
      setActiveCategoryId(menuData[0].id);
    }
  }, [menuData, activeCategoryId]);
  
  // IntersectionObserver to update active category on scroll
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const siteHeader = document.querySelector('header'); // Main site sticky header
    const categoryNavBarElement = categoryNavRef.current; // The div wrapping CategoryNavigationBar
    
    let rootMarginTop = 0;
    if (siteHeader) rootMarginTop += siteHeader.offsetHeight;
    if (categoryNavBarElement) rootMarginTop += categoryNavBarElement.offsetHeight;

    const observerOptions = {
      root: null,
      rootMargin: `-${rootMarginTop + SCROLL_OFFSET_BUFFER}px 0px 0px 0px`, 
      threshold: 0.01, // Trigger when even a small part is visible past the offset
    };

    observerRef.current = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length > 0) {
        // Sort by vertical position to find the topmost visible section
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
  // Rerun if menuData changes, or if the categoryNavRef element might have changed (e.g., on mount)
  // siteHeader.offsetHeight might change on responsive breakpoint if its structure changes, so re-observe.
  // However, direct dependency on offsetHeight values is not possible in dep array.
  // Relying on categoryNavRef (the DOM element wrapper) being stable.
  // Adding activeCategoryId to prevent re-runs if only active category changes internally from this effect.
  }, [menuData, categoryNavRef]); 

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryId(categoryId); // Set active for immediate UI update in nav bar
    const element = document.getElementById(categoryId);
    if (element) {
      const siteHeader = document.querySelector('header');
      const categoryNavBarElement = categoryNavRef.current;
      let offset = 0;
      if (siteHeader) offset += siteHeader.offsetHeight;
      if (categoryNavBarElement) offset += categoryNavBarElement.offsetHeight;
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset - SCROLL_OFFSET_BUFFER;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-8">
      <header className="text-center mb-6" ref={pageHeaderRef}>
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore our delicious offerings</p>
      </header>

      {menuData.length > 0 && (
        <div ref={categoryNavRef} className="mb-6"> {/* Wrapper for category nav ref */}
          <CategoryNavigationBar
            categories={menuData}
            selectedCategoryId={activeCategoryId}
            onCategorySelect={handleCategorySelect}
          />
        </div>
      )}

      <div className="space-y-12">
        {menuData.map((category) => (
          // The section element itself needs the ID for scrolling and observation
          <MenuCategorySection 
            key={category.id} 
            category={category} 
          />
        ))}
      </div>
    </div>
  );
}
