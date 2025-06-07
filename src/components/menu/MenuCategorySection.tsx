
import type { MenuCategory as MenuCategoryType, Dish } from '@/types';
import MenuItemCard from './MenuItemCard';
import { useMemo } from 'react';

interface MenuCategorySectionProps {
  category: MenuCategoryType;
  searchQueryToFilter?: string; // Renamed to reflect its purpose
}

export default function MenuCategorySection({ category, searchQueryToFilter }: MenuCategorySectionProps) {
  const IconComponent = category.icon;

  const displayedDishes = useMemo(() => {
    if (!searchQueryToFilter || searchQueryToFilter.trim() === '') {
      return category.dishes;
    }
    const normalizedQuery = searchQueryToFilter.toLowerCase().trim();
    return category.dishes.filter(dish =>
      dish.nameEn.toLowerCase().includes(normalizedQuery) ||
      dish.nameHi.toLowerCase().includes(normalizedQuery) ||
      (dish.description && dish.description.toLowerCase().includes(normalizedQuery))
    );
  }, [category.dishes, searchQueryToFilter]);

  if (searchQueryToFilter && searchQueryToFilter.trim() !== '' && displayedDishes.length === 0) {
    // If there's an active search and this category has no matching dishes,
    // we still render the section container for scroll-spy, but with a message.
  }

  return (
    <section id={category.id} className="mb-12 scroll-mt-32 md:scroll-mt-48">
      <div className="flex items-center mb-6">
        {IconComponent && <IconComponent className="h-8 w-8 mr-3 text-primary" />}
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{category.nameEn}</h2>
          <p className="text-muted-foreground">{category.nameHi}</p>
        </div>
      </div>
      {displayedDishes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayedDishes.map((dish) => (
            <MenuItemCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : searchQueryToFilter && searchQueryToFilter.trim() !== '' ? (
        <p className="text-muted-foreground italic">No items in this category match your search: "{searchQueryToFilter}"</p>
      ) : (
        <p className="text-muted-foreground">No items in this category yet.</p>
      )}
    </section>
  );
}
