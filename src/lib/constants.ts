
import type { MenuCategory, Dish, OrderType, CartItemType } from '@/types';
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

export const MOCK_MENU_DATA: MenuCategory[] = [
  {
    id: 'south-indian-fancy-dosa',
    nameEn: 'South Indian Fancy Dosa',
    nameHi: 'साउथ इंडियन फैंसी डोसा',
    icon: CATEGORY_ICONS['South Indian Fancy Dosa'],
    dishes: [
      { id: 'masala-dosa', nameEn: 'Masala Dosa', nameHi: 'मसाला डोसा', price: 130, category: 'south-indian-fancy-dosa', description: 'Crispy rice crepe filled with spiced potatoes.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala dosa' },
      { id: 'onion-uttapam', nameEn: 'Onion Uttapam', nameHi: 'प्याज उत्तपम', price: 140, category: 'south-indian-fancy-dosa', description: 'Thick pancake with onion topping.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion uttapam' },
    ],
  },
  {
    id: 'mitti-ki-khushbu-roti',
    nameEn: 'Mitti Ki Khushbu Roti',
    nameHi: 'मिट्टी की खुशबू रोटी',
    icon: CATEGORY_ICONS['Mitti Ki Khushbu Roti'],
    dishes: [
      { id: 'tandoori-roti', nameEn: 'Tandoori Roti', nameHi: 'तंदूरी रोटी', price: 30, category: 'mitti-ki-khushbu-roti', description: 'Whole wheat bread baked in tandoor.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'tandoori roti' },
      { id: 'butter-naan', nameEn: 'Butter Naan', nameHi: 'बटर नान', price: 45, category: 'mitti-ki-khushbu-roti', description: 'Soft leavened bread with butter.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter naan' },
    ],
  },
  {
    id: 'paneer-ka-kamal',
    nameEn: 'Paneer Ka Kamal',
    nameHi: 'पनीर का कमाल',
    icon: CATEGORY_ICONS['Paneer Ka Kamal'],
    dishes: [
      { id: 'paneer-butter-masala', nameEn: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', price: 220, category: 'paneer-ka-kamal', description: 'Creamy paneer curry in tomato gravy.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer butter' },
      { id: 'kadai-paneer', nameEn: 'Kadai Paneer', nameHi: 'कढ़ाई पनीर', price: 230, category: 'paneer-ka-kamal', description: 'Spicy paneer with bell peppers.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kadai paneer' },
    ],
  },
   {
    id: 'punjab-ka-dhamaka',
    nameEn: 'Punjab Ka Dhamaka',
    nameHi: 'पंजाब का धमाका',
    icon: CATEGORY_ICONS['Punjab Ka Dhamaka'],
    dishes: [
      { id: 'dal-makhani', nameEn: 'Dal Makhani', nameHi: 'दाल मखनी', price: 180, category: 'punjab-ka-dhamaka', description: 'Creamy black lentils.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dal makhani' },
    ],
  },
  {
    id: 'chinese-starters',
    nameEn: 'Chinese Starters',
    nameHi: 'चाइनीज स्टार्टर्स',
    icon: CATEGORY_ICONS['Chinese Starters'],
    dishes: [
      { id: 'veg-spring-roll', nameEn: 'Veg Spring Roll', nameHi: 'वेज स्प्रिंग रोल', price: 150, category: 'chinese-starters', description: 'Crispy fried rolls.', imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'spring roll' },
    ],
  },
];


const findDish = (categoryId: string, dishId: string): Dish | undefined => {
  const category = MOCK_MENU_DATA.find(cat => cat.id === categoryId);
  if (category) {
    return category.dishes.find(dish => dish.id === dishId);
  }
  return undefined;
};

const mockDish1 = findDish('south-indian-fancy-dosa', 'masala-dosa');
const mockDish2 = findDish('paneer-ka-kamal', 'paneer-butter-masala');
const mockDish3 = findDish('mitti-ki-khushbu-roti', 'butter-naan');


export const MOCK_ORDERS_DATA: OrderType[] = [
  {
    id: 'order1_mock',
    items: [
      mockDish1 ? { ...mockDish1, quantity: 2 } : undefined,
      mockDish2 ? { ...mockDish2, quantity: 1 } : undefined,
    ].filter(item => item !== undefined) as CartItemType[],
    totalAmount: (mockDish1 ? mockDish1.price * 2 : 0) + (mockDish2 ? mockDish2.price : 0),
    tableNumber: '3B',
    customerName: 'Ms. Priya Mock',
    status: 'Preparing' as OrderType['status'],
    orderTime: new Date(Date.now() - 15 * 60 * 1000), 
  },
  {
    id: 'order2_mock',
    items: [
      mockDish3 ? { ...mockDish3, quantity: 4 } : undefined,
    ].filter(item => item !== undefined) as CartItemType[],
    totalAmount: (mockDish3 ? mockDish3.price * 4 : 0),
    tableNumber: '7A',
    customerName: 'Mr. Rahul Mock',
    status: 'Pending' as OrderType['status'],
    orderTime: new Date(Date.now() - 5 * 60 * 1000),
  }
];


export const INR_CURRENCY_CODE = 'INR';
export const INR_SYMBOL = '₹';
