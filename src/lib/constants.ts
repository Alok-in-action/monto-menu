
import type { MenuCategory, Dish, OrderType } from '@/types';
import { 
  Soup, Salad, UtensilsCrossed, IndianRupee, ShoppingCart, User, ListOrdered, 
  CalendarDays, CheckCircle, XCircle, RefreshCw, Disc3, Wheat, CookingPot, 
  Sparkles, Flame, Nut, Grip, Container, CupSoda, Martini, Vegan, Utensils 
} from 'lucide-react';

export const APP_NAME = "MONTO Restaurant";

export const CATEGORY_ICONS: { [key: string]: React.ElementType } = {
  'South Indian Fancy Dosa': Disc3,
  'Mitti Ki Khushbu Roti': Wheat,
  'Tava Roti': Wheat,
  'Punjab Ka Dhamaka': CookingPot,
  'Chinese Starters': Sparkles,
  'Tandoor Starter': Flame,
  'Paneer Ka Kamal': Vegan,
  'Kaju Ka Khajana': Nut,
  'Kofta': Vegan,
  'Chinese Main Course': Utensils,
  'Chinese Sizzler': Flame,
  'Mini/Starters Pakoda': Grip,
  'Raita': Container,
  'Hot Time': CupSoda,
  'Khane se pehele time pass': Salad,
  'Chinese Hot Soup': Soup,
  'Milk Shake': Martini,
  Default: UtensilsCrossed,
};

export const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/600x400.png';

// MOCK_MENU_DATA is removed as data will be fetched from Supabase.
// The MOCK_ORDERS_DATA below depended on MOCK_MENU_DATA.
// This will need to be updated to fetch from Supabase or use a different mocking strategy if orders are not yet in Supabase.
// For now, orders page might show no data or only orders with fully defined items not reliant on findDish.

// const findDish = (categoryId: string, dishIdSuffix: string): Dish | undefined => {
//   // This function will no longer work as MOCK_MENU_DATA is removed.
//   // It needs to be refactored if used by MOCK_ORDERS_DATA or other parts.
//   console.warn("findDish function needs refactoring as MOCK_MENU_DATA is removed.");
//   return undefined; 
// };

// const mockDish1 = findDish('south-indian-fancy-dosa', 'masala-dosa');
// const mockDish2 = findDish('paneer-ka-kamal', 'paneer-butter-masala');
// const mockDish3 = findDish('chinese-main-course', 'veg-hakka-noodles');
// const mockDish4 = findDish('chinese-hot-soup', 'veg-manchow-soup');
// const mockDish5 = findDish('mitti-ki-khushbu-roti', 'butter-naan');

// Temporarily, MOCK_ORDERS_DATA will be an empty array or hardcoded without findDish
export const MOCK_ORDERS_DATA: OrderType[] = [
  // {
  //   id: 'order1_new',
  //   items: [
  //     // Manually define items or ensure they are structured completely if not fetching
  //     { id: 'south-indian-fancy-dosa-masala-dosa', nameEn: 'Masala Dosa', nameHi: 'मसाला डोसा', price: 130, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: 'masala dosa', isVegetarian: true, quantity: 2 },
  //     { id: 'paneer-ka-kamal-paneer-butter-masala', nameEn: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', price: 220, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: 'paneer butter', isVegetarian: true, quantity: 1 },
  //   ],
  //   totalAmount: (130 * 2) + 220,
  //   tableNumber: '3B',
  //   customerName: 'Ms. Priya',
  //   status: 'Preparing' as OrderType['status'],
  //   orderTime: new Date(Date.now() - 15 * 60 * 1000), 
  // }
  // Add more mock orders here if needed, ensuring items are fully defined
  // or this part will be updated when orders are fetched from Supabase.
];


export const INR_CURRENCY_CODE = 'INR';
export const INR_SYMBOL = '₹';
