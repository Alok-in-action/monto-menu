import MenuCategorySection from '@/components/menu/MenuCategorySection';
import { MOCK_MENU_DATA } from '@/lib/constants';
import type { MenuCategory } from '@/types';

export default function MenuPage() {
  const menuData: MenuCategory[] = MOCK_MENU_DATA;

  return (
    <div className="space-y-12">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Our Menu</h1>
        <p className="text-lg text-muted-foreground mt-2">Explore our delicious offerings</p>
      </header>
      {menuData.map((category) => (
        <MenuCategorySection key={category.id} category={category} />
      ))}
    </div>
  );
}
