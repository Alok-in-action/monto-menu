
import type { MenuCategory, Dish, OrderType } from '@/types';
import { Soup, Pizza, Glasses, Salad, UtensilsCrossed, IndianRupee, ShoppingCart, User, ListOrdered, CalendarDays, CheckCircle, XCircle, RefreshCw } from 'lucide-react';

export const APP_NAME = "MONTO Restaurant";

export const CATEGORY_ICONS: { [key: string]: React.ElementType } = {
  Appetizers: Soup,
  MainCourse: Pizza,
  Beverages: Glasses,
  Desserts: Salad, // Placeholder, could be IceCream or Cake
  Default: UtensilsCrossed,
};


export const MOCK_MENU_DATA: MenuCategory[] = [
  {
    id: 'appetizers',
    nameEn: 'Appetizers',
    nameHi: 'स्टार्टर्स (Starters)',
    icon: CATEGORY_ICONS['Appetizers'],
    dishes: [
      { id: 'ap1', nameEn: 'Paneer Tikka', nameHi: 'पनीर टिक्का (Paneer Tikka)', price: 250, category: 'Appetizers', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'paneer tikka', isVegetarian: true, description: 'Grilled cottage cheese cubes marinated in yogurt and spices.' },
      { id: 'ap2', nameEn: 'Vegetable Samosa', nameHi: 'सब्जी समोसा (Sabji Samosa)', price: 120, category: 'Appetizers', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'vegetable samosa', isVegetarian: true, description: 'Crispy pastry filled with spiced potatoes and peas.' },
      { id: 'ap3', nameEn: 'Chicken 65', nameHi: 'चिकन ६५ (Chicken 65)', price: 300, category: 'Appetizers', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'chicken fry', isVegetarian: false, description: 'Spicy, deep-fried chicken dish originating from Chennai, India.' },
    ],
  },
  {
    id: 'main-course',
    nameEn: 'Main Course',
    nameHi: 'मुख्य भोजन (Mukhya Bhojan)',
    icon: CATEGORY_ICONS['MainCourse'],
    dishes: [
      { id: 'mc1', nameEn: 'Butter Chicken', nameHi: 'बटर चिकन (Butter Chicken)', price: 450, category: 'Main Course', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'butter chicken', isVegetarian: false, description: 'Classic Indian dish of chicken in a mildly spiced tomato sauce.' },
      { id: 'mc2', nameEn: 'Dal Makhani', nameHi: 'दाल मखनी (Dal Makhani)', price: 350, category: 'Main Course', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'dal makhani', isVegetarian: true, description: 'Creamy and buttery black lentils slow-cooked to perfection.' },
      { id: 'mc3', nameEn: 'Palak Paneer', nameHi: 'पालक पनीर (Palak Paneer)', price: 380, category: 'Main Course', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'palak paneer', isVegetarian: true, description: 'Cottage cheese cubes in a smooth spinach gravy.' },
      { id: 'mc4', nameEn: 'Rogan Josh', nameHi: 'रोगन जोश (Rogan Josh)', price: 550, category: 'Main Course', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'rogan josh', isVegetarian: false, description: 'Aromatic lamb curry with a rich gravy.' },
    ],
  },
  {
    id: 'beverages',
    nameEn: 'Beverages',
    nameHi: 'पेय पदार्थ (Peya Padarth)',
    icon: CATEGORY_ICONS['Beverages'],
    dishes: [
      { id: 'bv1', nameEn: 'Masala Chai', nameHi: 'मसाला चाय (Masala Chai)', price: 80, category: 'Beverages', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'masala chai', isVegetarian: true, description: 'Spiced Indian tea with milk.' },
      { id: 'bv2', nameEn: 'Lassi (Sweet/Salted)', nameHi: 'लस्सी (मीठी/नमकीन) (Lassi)', price: 100, category: 'Beverages', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'lassi drink', isVegetarian: true, description: 'Traditional yogurt-based drink.' },
      { id: 'bv3', nameEn: 'Fresh Lime Soda', nameHi: 'फ्रेश लाइम सोडा (Fresh Lime Soda)', price: 90, category: 'Beverages', imageUrl: 'https://placehold.co/600x400.png', dataAiHint: 'lime soda', isVegetarian: true, description: 'Refreshing soda with lemon and optional sugar/salt.' },
    ],
  },
];

export const MOCK_ORDERS_DATA: OrderType[] = [
  {
    id: 'order1',
    items: [
      { ...MOCK_MENU_DATA[0].dishes[0], quantity: 2 }, // Paneer Tikka
      { ...MOCK_MENU_DATA[1].dishes[0], quantity: 1 }, // Butter Chicken
    ],
    totalAmount: (MOCK_MENU_DATA[0].dishes[0].price * 2) + MOCK_MENU_DATA[1].dishes[0].price,
    tableNumber: '5A',
    customerName: 'Mr. Sharma',
    status: 'Preparing',
    orderTime: new Date(Date.now() - 10 * 60 * 1000), // 10 minutes ago
  },
  {
    id: 'order2',
    items: [
      { ...MOCK_MENU_DATA[1].dishes[1], quantity: 1 }, // Dal Makhani
      { ...MOCK_MENU_DATA[2].dishes[0], quantity: 4 }, // Masala Chai
    ],
    totalAmount: MOCK_MENU_DATA[1].dishes[1].price + (MOCK_MENU_DATA[2].dishes[0].price * 4),
    tableNumber: '12C',
    customerName: 'Ms. Gupta',
    status: 'Pending',
    orderTime: new Date(Date.now() - 2 * 60 * 1000), // 2 minutes ago
  },
  {
    id: 'order3',
    items: [
      { ...MOCK_MENU_DATA[0].dishes[2], quantity: 1 }, // Chicken 65
    ],
    totalAmount: MOCK_MENU_DATA[0].dishes[2].price,
    tableNumber: '7B',
    customerName: 'Family Khan',
    status: 'Ready',
    orderTime: new Date(Date.now() - 25 * 60 * 1000), // 25 minutes ago
  },
];

export const INR_CURRENCY_CODE = 'INR';
export const INR_SYMBOL = '₹';

