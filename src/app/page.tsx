
"use client";

import { useState, useEffect, useRef } from 'react';
import MenuCategorySection from '@/components/menu/MenuCategorySection';
import CategoryNavigationBar from '@/components/menu/CategoryNavigationBar';
import { MOCK_MENU_DATA } from '@/lib/constants';
import type { MenuCategory } from '@/types';

export default function MenuPage() {
  const menuData: MenuCategory[] = MOCK_MENU_DATA;
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const categoryRefs = useRef<Record<string, HTMLElement | null>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  const pageHeaderRef = useRef<HTMLElement | null>(null);
  const categoryNavRef = useRef<HTMLDivElement | null>(null);

  // Initialize category refs
  useEffect(() => {
    menuData.forEach(category => {
      categoryRefs.current[category.id] = document.getElementById(category.id);
    });
  }, [menuData]);

  // Set initial active category
  useEffect(() => {
    if (menuData.length > 0) {
      setActiveCategoryId(menuData[0].id);
    }
  }, [menuData]);
  
  // IntersectionObserver to update active category on scroll
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const siteHeader = document.querySelector('header'); // Main site sticky header
    const categoryNavBar = categoryNavRef.current;
    
    let rootMarginTop = 0;
    if (siteHeader) rootMarginTop += siteHeader.offsetHeight;
    if (categoryNavBar) rootMarginTop += categoryNavBar.offsetHeight;


    const observerOptions = {
      root: null,
      rootMargin: `-${rootMarginTop + 16}px 0px 0px 0px`, // Offset for sticky header and category bar + buffer
      threshold: 0.1, // When 10% of the top of the section is visible below the sticky elements
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
           // Find the topmost visible intersecting entry
          const visibleEntries = entries.filter(e => e.isIntersecting);
          if (visibleEntries.length > 0) {
            // Sort by vertical position
            visibleEntries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
            setActiveCategoryId(visibleEntries[0].target.id);
          }
        }
      });
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
  }, [menuData, pageHeaderRef, categoryNavRef]); // Rerun if these refs change

  const handleCategorySelect = (categoryId: string) => {
    setActiveCategoryId(categoryId); // Set active first for immediate UI update in nav bar
    const element = document.getElementById(categoryId);
    if (element) {
      const siteHeader = document.querySelector('header');
      const categoryNavBar = categoryNavRef.current;
      let offset = 0;
      if (siteHeader) offset += siteHeader.offsetHeight;
      if (categoryNavBar) offset += categoryNavBar.offsetHeight;
      
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset - 16; // 16px buffer

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="space-y-8"> {/* Reduced general space-y */}
      <header className="text-center mb-6" ref={pageHeaderRef}> {/* Reduced margin */}
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

      <div className="space-y-12"> {/* Container for category sections */}
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
