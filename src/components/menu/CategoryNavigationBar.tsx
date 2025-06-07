
"use client";

import type { MenuCategory } from '@/types';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Check } from 'lucide-react';
import React, { useEffect, useRef } from 'react';

interface CategoryNavigationBarProps {
  categories: MenuCategory[];
  selectedCategoryId: string | null;
  onCategorySelect: (categoryId: string) => void;
}

export default function CategoryNavigationBar({
  categories,
  selectedCategoryId,
  onCategorySelect,
}: CategoryNavigationBarProps) {
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    if (selectedCategoryId && buttonRefs.current[selectedCategoryId]) {
      const activeButton = buttonRefs.current[selectedCategoryId];
      activeButton?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center', // Tries to center the item horizontally
        block: 'nearest',  // Keeps vertical position as is (important for elements in a horizontal scroll)
      });
    }
  }, [selectedCategoryId]); // Rerun when selectedCategoryId (active category due to vertical scroll) changes

  return (
    // This ScrollArea is nested inside the sticky div from page.tsx
    <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-card shadow">
      {/* The inner div that actually scrolls horizontally due to w-max */}
      <div className="flex w-max space-x-2 p-3">
        {categories.map((category) => {
          const IconComponent = category.icon;
          const isSelected = category.id === selectedCategoryId;
          return (
            <Button
              key={category.id}
              ref={(el) => (buttonRefs.current[category.id] = el)} // Assign ref to each button
              variant="outline"
              className={cn(
                "flex-shrink-0 flex flex-col items-center justify-start h-auto p-3 min-w-[7rem] max-w-[9rem] text-center shadow-sm hover:shadow-md focus:shadow-md transition-all duration-150 ease-in-out",
                "bg-background hover:bg-muted",
                isSelected && "border-primary border-2 bg-primary/10 relative ring-2 ring-primary ring-offset-2"
              )}
              onClick={() => onCategorySelect(category.id)}
              aria-pressed={isSelected}
              style={{height: '6rem'}} // Fixed height for consistency
            >
              {IconComponent && <IconComponent className="h-7 w-7 mb-1 text-primary flex-shrink-0" />}
              <span className="text-xs font-medium whitespace-normal break-words leading-tight mt-auto">
                {category.nameEn}
              </span>
              {isSelected && (
                <div className="absolute top-1 right-1 bg-primary text-primary-foreground rounded-full p-0.5 flex items-center justify-center">
                  <Check size={12} strokeWidth={3} />
                </div>
              )}
            </Button>
          );
        })}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
