
import type { MenuCategory as MenuCategoryType, Dish } from '@/types';
import MenuItemCard from './MenuItemCard';
import { useMemo } from 'react';

interface MenuCategorySectionProps {
  category: MenuCategoryType;
  searchQuery?: string;
}

export default function MenuCategorySection({ category, searchQuery }: MenuCategorySectionProps) {
  const IconComponent = category.icon;

  const displayedDishes = useMemo(() => {
    if (!searchQuery || searchQuery.trim() === '') {
      return category.dishes;
    }
    const normalizedQuery = searchQuery.toLowerCase().trim();
    return category.dishes.filter(dish =>
      dish.nameEn.toLowerCase().includes(normalizedQuery) ||
      dish.nameHi.toLowerCase().includes(normalizedQuery) ||
      (dish.description && dish.description.toLowerCase().includes(normalizedQuery))
    );
  }, [category.dishes, searchQuery]);

  // Only render the section if it has dishes to display after filtering or if no search is active
  if (searchQuery && searchQuery.trim() !== '' && displayedDishes.length === 0) {
    // If there's an active search and this category has no matching dishes, 
    // we can choose to render nothing for this section, or render the title with a message.
    // For now, let's not render the section at all to avoid empty category titles during search.
    // The global "No results" message in page.tsx will handle cases where no categories have matches.
    // However, to keep the scroll-spy working with all category IDs, we must render the section.
    // So, we'll render the title and a specific message.
  }


  return (
    <section id={category.id} className="mb-12 scroll-mt-32 md:scroll-mt-48"> {/* scroll-mt accounts for sticky headers */}
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
      ) : searchQuery && searchQuery.trim() !== '' ? (
        <p className="text-muted-foreground italic">No items in this category match your search: "{searchQuery}"</p>
      ) : (
        <p className="text-muted-foreground">No items in this category yet.</p>
      )}
    </section>
  );
}
