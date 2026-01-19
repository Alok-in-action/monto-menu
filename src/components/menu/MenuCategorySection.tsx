
import type { MenuCategory as MenuCategoryType } from '@/types';
import MenuItemCard from './MenuItemCard';

interface MenuCategorySectionProps {
  category: MenuCategoryType;
}

export default function MenuCategorySection({ category }: MenuCategorySectionProps) {
  const IconComponent = category.icon;

  return (
    <section id={category.id} className="mb-12 scroll-mt-32 md:scroll-mt-48">
      <div className="flex items-center mb-6">
        {IconComponent && <IconComponent className="h-8 w-8 mr-3 text-primary" />}
        <div>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">{category.nameEn}</h2>
          <p className="text-muted-foreground">{category.nameHi}</p>
        </div>
      </div>
      {category.dishes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {category.dishes.map((dish) => (
            <MenuItemCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No items in this category yet.</p>
      )}
    </section>
  );
}
