
import type { MenuCategory, Dish, OrderType, CartItemType } from '@/types';
import { 
  Soup, Salad, UtensilsCrossed, IndianRupee, ShoppingCart, User, ListOrdered, 
  CalendarDays, CheckCircle, XCircle, RefreshCw, Disc3, Wheat, CookingPot, 
  Sparkles, Flame, Nut, Grip, Container, CupSoda, Martini, Vegan, Utensils,
  Pizza, Sandwich 
} from 'lucide-react';

export const APP_NAME = "MONTO Restaurant";

export const CATEGORY_ICONS: { [key: string]: React.ElementType } = {
  'Khane Se Pahele Time Pass': Salad,
  'Chinese Hot Soup': Soup,
  'Milk Shakes & Cold Coffee': Martini,
  'Hot Time': CupSoda,
  'Raita & Lassi': Container,
  'Starters & Pakoda': Grip,
  'Chinese Sizzler': Flame,
  'Chinese Main Course': Utensils,
  'Chinese Starters': Sparkles,
  'Tandoor Starters': Flame,
  'Paneer ka Kamal': CookingPot, // New category icon
  'Punjab Ka Dhamaka (Veg Specials)': CookingPot,
  'Kaju Special': Nut,
  'Kofta': Vegan,
  'Roti, Paratha, Naan & Kulcha': Wheat,
  'Tava Roti': Wheat,
  'South Indian Fancy Dosa': Disc3,
  'Dal': Container,
  'Rice & Biryani': Utensils,
  'Mozzarella Pizza': Pizza,
  'Toast Sandwich': Sandwich,
  'Pav Bhaji': CookingPot,
  'Pizza': Pizza, 
  'Grill Sandwich': Sandwich,
  'Burger': Sandwich, 
  'Sip-in Soda': CupSoda,
  'Paper Dosa': Disc3,
  'Uttapam': Disc3,
  'Monto Special Thali': UtensilsCrossed,
  Default: UtensilsCrossed,
};

export const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/600x400.png';

export const WATER_BOTTLE_DISH: Dish = {
  id: 'water-bottle-auto-001',
  nameEn: 'Mineral Water Bottle',
  nameHi: 'मिनरल वाटर बोतल',
  price: 20.00,
  category: 'essentials', 
  description: 'Chilled and refreshing mineral water.',
  imageUrl: PLACEHOLDER_IMAGE_URL,
  isVegetarian: true,
  dataAiHint: 'water bottle',
};

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/^-+|-+$/g, '');

const generateDishId = (categorySlug: string, dishNameEn: string) => {
  return `${categorySlug}-${slugify(dishNameEn)}`;
};

// Original MOCK_MENU_DATA array definition, which will be modified
let MOCK_MENU_DATA_TEMP: MenuCategory[] = [
  {
    id: slugify('Khane Se Pahele Time Pass'),
    nameEn: 'Khane Se Pahele Time Pass',
    nameHi: 'खाने से पहले टाइम पास',
    icon: CATEGORY_ICONS['Khane Se Pahele Time Pass'],
    dishes: [
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Cheese Masala Papad'), nameEn: 'Cheese Masala Papad', nameHi: 'चीज मसाला पापड़', price: 45, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese papad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Roasted Papad'), nameEn: 'Roasted Papad', nameHi: 'भुना हुआ पापड़', price: 20, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'roasted papad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Roasted Masala Papad'), nameEn: 'Roasted Masala Papad', nameHi: 'भुना मसाला पापड़', price: 30, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala papad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Fry Papad'), nameEn: 'Fry Papad', nameHi: 'तला पापड़', price: 25, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'fry papad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Fry Masala Papad'), nameEn: 'Fry Masala Papad', nameHi: 'तला मसाला पापड़', price: 35, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'fry masala papad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Green Salad'), nameEn: 'Green Salad', nameHi: 'ग्रीन सलाद', price: 60, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'green salad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Tomato Salad'), nameEn: 'Tomato Salad', nameHi: 'टमाटर सलाद', price: 50, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'tomato salad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Cucumber Salad'), nameEn: 'Cucumber Salad', nameHi: 'कुकुम्बर सलाद', price: 55, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cucumber salad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Cucumber Tomato Salad'), nameEn: 'Cucumber Tomato Salad', nameHi: 'कुकुम्बर टमाटर सलाद', price: 55, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cucumber tomato salad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Kachumar Salad'), nameEn: 'Kachumar Salad', nameHi: 'कचुम्बर सलाद', price: 52, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kachumber salad' },
      { id: generateDishId(slugify('Khane Se Pahele Time Pass'), 'Onion Salad'), nameEn: 'Onion Salad', nameHi: 'प्याज सलाद', price: 0, category: slugify('Khane Se Pahele Time Pass'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion salad' },
    ],
  },
  {
    id: slugify('Chinese Hot Soup'),
    nameEn: 'Chinese Hot Soup',
    nameHi: 'चाइनीज हॉट सूप',
    icon: CATEGORY_ICONS['Chinese Hot Soup'],
    dishes: [
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Veg Hot & Sour Soup'), nameEn: 'Veg Hot & Sour Soup', nameHi: 'वेज हाट सॉर सूप', price: 105, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'hot sour soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Veg Manchow Soup'), nameEn: 'Veg Manchow Soup', nameHi: 'वेज मनचाऊ सूप', price: 100, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'manchow soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Veg Manchurian Soup'), nameEn: 'Veg Manchurian Soup', nameHi: 'वेज मंचूरियन सूप', price: 103, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'manchurian soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Lemon Coriander Soup'), nameEn: 'Lemon Coriander Soup', nameHi: 'लेमन कोरिएन्डर सूप', price: 95, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'lemon coriander soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Noodles Soup'), nameEn: 'Noodles Soup', nameHi: 'नूडल्स सूप', price: 95, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'noodles soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Cheese Corn Tomato Soup'), nameEn: 'Cheese Corn Tomato Soup', nameHi: 'चीज कार्न टोमेटो सूप', price: 115, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese corn soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Minestrone Soup'), nameEn: 'Minestrone Soup', nameHi: 'माइनस्टोन सूप', price: 92, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'minestrone soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Veg Sweet Corn Soup'), nameEn: 'Veg Sweet Corn Soup', nameHi: 'वेज स्वीट कार्न सूप', price: 98, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sweet corn soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Tomato Soup'), nameEn: 'Tomato Soup', nameHi: 'टमाटर सूप', price: 95, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'tomato soup' },
      { id: generateDishId(slugify('Chinese Hot Soup'), 'Green Iceland Soup'), nameEn: 'Green Iceland Soup', nameHi: 'ग्रीन आइसलेण्ड सूप', price: 95, category: slugify('Chinese Hot Soup'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'green soup' },
    ],
  },
  {
    id: slugify('Milk Shakes & Cold Coffee'),
    nameEn: 'Milk Shakes & Cold Coffee',
    nameHi: 'मिल्क शेक & कोल्ड कॉफी',
    icon: CATEGORY_ICONS['Milk Shakes & Cold Coffee'],
    dishes: [
      { id: generateDishId(slugify('Milk Shakes & Cold Coffee'), 'Vanilla Milk Shake'), nameEn: 'Vanilla Milk Shake', nameHi: 'वेनिला मिल्क शेक', price: 80, category: slugify('Milk Shakes & Cold Coffee'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'vanilla milkshake' },
      { id: generateDishId(slugify('Milk Shakes & Cold Coffee'), 'Strawberry Milk Shake'), nameEn: 'Strawberry Milk Shake', nameHi: 'स्ट्रॉबेरी मिल्क शेक', price: 95, category: slugify('Milk Shakes & Cold Coffee'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'strawberry milkshake' },
      { id: generateDishId(slugify('Milk Shakes & Cold Coffee'), 'Mango Milk Shake'), nameEn: 'Mango Milk Shake', nameHi: 'मैंगो मिल्क शेक', price: 92, category: slugify('Milk Shakes & Cold Coffee'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mango milkshake' },
      { id: generateDishId(slugify('Milk Shakes & Cold Coffee'), 'Butter Scotch Milk Shake'), nameEn: 'Butter Scotch Milk Shake', nameHi: 'बटर स्कॉच शेक', price: 95, category: slugify('Milk Shakes & Cold Coffee'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butterscotch milkshake' },
      { id: generateDishId(slugify('Milk Shakes & Cold Coffee'), 'Chocolate Milk Shake'), nameEn: 'Chocolate Milk Shake', nameHi: 'चॉकलेट मिल्क शेक', price: 90, category: slugify('Milk Shakes & Cold Coffee'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chocolate milkshake' },
      { id: generateDishId(slugify('Milk Shakes & Cold Coffee'), 'Oreo Milk Shake'), nameEn: 'Oreo Milk Shake', nameHi: 'ओरियो मिल्क शेक', price: 100, category: slugify('Milk Shakes & Cold Coffee'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'oreo milkshake' },
      { id: generateDishId(slugify('Milk Shakes & Cold Coffee'), 'Cold Coffee'), nameEn: 'Cold Coffee', nameHi: 'कोल्ड कॉफी', price: 80, category: slugify('Milk Shakes & Cold Coffee'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cold coffee' },
    ],
  },
  {
    id: slugify('Hot Time'),
    nameEn: 'Hot Time',
    nameHi: 'हॉट टाइम',
    icon: CATEGORY_ICONS['Hot Time'],
    dishes: [
      { id: generateDishId(slugify('Hot Time'), 'Minto Mozzata'), nameEn: 'Minto Mozzata', nameHi: 'मिन्टो मोजाटा', price: 80, category: slugify('Hot Time'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'minto mozzata' },
      { id: generateDishId(slugify('Hot Time'), 'Paan Mozzata'), nameEn: 'Paan Mozzata', nameHi: 'पान मोजाटा', price: 80, category: slugify('Hot Time'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paan mozzata' },
      { id: generateDishId(slugify('Hot Time'), 'Virgan Mozzata'), nameEn: 'Virgan Mozzata', nameHi: 'विरगन मोजाटा', price: 100, category: slugify('Hot Time'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'virgan mozzata' },
    ],
  },
  {
    id: slugify('Raita & Lassi'),
    nameEn: 'Raita & Lassi',
    nameHi: 'रायता & लस्सी',
    icon: CATEGORY_ICONS['Raita & Lassi'],
    dishes: [
      { id: generateDishId(slugify('Raita & Lassi'), 'Fruit Raita'), nameEn: 'Fruit Raita', nameHi: 'फ्रुट रायता', price: 85, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'fruit raita' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Pineapple Raita'), nameEn: 'Pineapple Raita', nameHi: 'पाईनापल रायता', price: 85, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'pineapple raita' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Veg Raita'), nameEn: 'Veg Raita', nameHi: 'वेज रायता', price: 80, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg raita' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Boondi Raita'), nameEn: 'Boondi Raita', nameHi: 'बुंदी रायता', price: 80, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'boondi raita' },
      { id: generateDishId(slugify('Raita & Lassi'), 'S.P. Monto Lassi'), nameEn: 'S.P. Monto Lassi', nameHi: 'स्पेशल मोन्टो लस्सी', price: 90, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'monto lassi' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Sweet Lassi'), nameEn: 'Sweet Lassi', nameHi: 'मिठी लस्सी', price: 75, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sweet lassi' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Salted Lassi'), nameEn: 'Salted Lassi', nameHi: 'साल्टेड लस्सी', price: 65, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'salted lassi' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Curd'), nameEn: 'Curd', nameHi: 'दही', price: 60, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'curd' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Butter Milk'), nameEn: 'Butter Milk', nameHi: 'मखन छाछ', price: 30, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter milk' },
      { id: generateDishId(slugify('Raita & Lassi'), 'Milk'), nameEn: 'Milk', nameHi: 'दूध', price: 40, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'milk' },
      { id: generateDishId(slugify('Raita & Lassi'), 'M/s Milk'), nameEn: 'M/s Milk', nameHi: 'मोन्टो स्पेशल छाछ', price: 50, category: slugify('Raita & Lassi'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'special buttermilk' },
    ],
  },
  {
    id: slugify('Starters & Pakoda'),
    nameEn: 'Starters & Pakoda',
    nameHi: 'स्टार्टर्स & पकोड़ा',
    icon: CATEGORY_ICONS['Starters & Pakoda'],
    dishes: [
      { id: generateDishId(slugify('Starters & Pakoda'), 'Crispy Corn'), nameEn: 'Crispy Corn', nameHi: 'क्रीप्सी कोर्न', price: 105, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'crispy corn' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'Chana Roast'), nameEn: 'Chana Roast', nameHi: 'चना रोस्ट', price: 115, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chana roast' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'French Finger Fry'), nameEn: 'French Finger Fry', nameHi: 'फ्रेंच फिंगर फ्राय', price: 100, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'french fries' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'Veg Pakoda'), nameEn: 'Veg Pakoda', nameHi: 'वेज पकोड़ा', price: 120, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg pakoda' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'Paneer Pakoda'), nameEn: 'Paneer Pakoda', nameHi: 'पनीर पकोड़ा', price: 170, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer pakoda' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'Onion Pakoda'), nameEn: 'Onion Pakoda', nameHi: 'प्याज पकोड़ा', price: 110, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion pakoda' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'Chilly Pakoda'), nameEn: 'Chilly Pakoda', nameHi: 'मिर्ची पकोड़ा', price: 105, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chilly pakoda' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'Chole Bhature'), nameEn: 'Chole Bhature', nameHi: 'छोले भटुरे', price: 150, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chole bhature' },
      { id: generateDishId(slugify('Starters & Pakoda'), 'Extra Bhature'), nameEn: 'Extra Bhature', nameHi: 'एक्सट्रा भटुरे', price: 20, category: slugify('Starters & Pakoda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'bhature' },
    ],
  },
  {
    id: slugify('Chinese Sizzler'),
    nameEn: 'Chinese Sizzler',
    nameHi: 'चाइनीज सिजलर',
    icon: CATEGORY_ICONS['Chinese Sizzler'],
    dishes: [
      { id: generateDishId(slugify('Chinese Sizzler'), 'Special Monto Sizzler'), nameEn: 'Special Monto Sizzler', nameHi: 'स्पेशल मोन्टो सिजलर', price: 500, category: slugify('Chinese Sizzler'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'monto sizzler' },
      { id: generateDishId(slugify('Chinese Sizzler'), 'Paneer Stick Sizzler'), nameEn: 'Paneer Stick Sizzler', nameHi: 'पनीर स्टीक सिजलर', price: 400, category: slugify('Chinese Sizzler'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer sizzler' },
      { id: generateDishId(slugify('Chinese Sizzler'), 'Veg Sizzler'), nameEn: 'Veg Sizzler', nameHi: 'वेज सिजलर', price: 350, category: slugify('Chinese Sizzler'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg sizzler' },
      { id: generateDishId(slugify('Chinese Sizzler'), 'Chinese Sizzler'), nameEn: 'Chinese Sizzler', nameHi: 'चाईनिस सिजलर', price: 395, category: slugify('Chinese Sizzler'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chinese sizzler' },
    ],
  },
  {
    id: slugify('Chinese Main Course'),
    nameEn: 'Chinese Main Course',
    nameHi: 'चाइनीज मेन कोर्स',
    icon: CATEGORY_ICONS['Chinese Main Course'],
    dishes: [
      { id: generateDishId(slugify('Chinese Main Course'), 'Veg Hakka Noodles'), nameEn: 'Veg Hakka Noodles', nameHi: 'वेज हक्का नूडल्स', price: 125, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'hakka noodles' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Veg Manchurian Noodles'), nameEn: 'Veg Manchurian Noodles', nameHi: 'वेज मंजूरियन नूडल्स', price: 130, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'manchurian noodles' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Veg Schezwan Noodles'), nameEn: 'Veg Schezwan Noodles', nameHi: 'वेज शेजवान नूडल्स', price: 130, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'schezwan noodles' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Veg Garlic Noodles'), nameEn: 'Veg Garlic Noodles', nameHi: 'वेज लहसून नूडल्स', price: 135, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'garlic noodles' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Veg Manchurian Rice'), nameEn: 'Veg Manchurian Rice', nameHi: 'वेज मंचूरियन राईस', price: 135, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'manchurian rice' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Veg Schezwan Rice'), nameEn: 'Veg Schezwan Rice', nameHi: 'वेज शेजवान राईस', price: 130, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'schezwan rice' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Chinese Fried Rice'), nameEn: 'Chinese Fried Rice', nameHi: 'चायनीज फ्राइड राईस', price: 145, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chinese fried rice' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Triple Fried Rice'), nameEn: 'Triple Fried Rice', nameHi: 'त्रिपल फ्राइड राईस', price: 170, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'triple fried rice' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Noodles Fried Rice'), nameEn: 'Noodles Fried Rice', nameHi: 'नूडल्स फ्राइड राईस', price: 140, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'noodles fried rice' },
      { id: generateDishId(slugify('Chinese Main Course'), 'Chinese Bhel'), nameEn: 'Chinese Bhel', nameHi: 'चायनीज भैल', price: 145, category: slugify('Chinese Main Course'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chinese bhel' },
    ],
  },
  {
    id: slugify('Chinese Starters'),
    nameEn: 'Chinese Starters',
    nameHi: 'चाइनीज स्टार्टर्स',
    icon: CATEGORY_ICONS['Chinese Starters'],
    dishes: [
      { id: generateDishId(slugify('Chinese Starters'), 'Veg Crispy'), nameEn: 'Veg Crispy', nameHi: 'वेज क्रिस्पी', price: 200, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg crispy' },
      { id: generateDishId(slugify('Chinese Starters'), 'Paneer Chilly Gravy'), nameEn: 'Paneer Chilly Gravy', nameHi: 'पनीर चिली ग्रेवी', price: 200, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer chilly gravy' },
      { id: generateDishId(slugify('Chinese Starters'), 'Paneer Chilly Dry'), nameEn: 'Paneer Chilly Dry', nameHi: 'पनीर चिली डाय', price: 210, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer chilly dry' },
      { id: generateDishId(slugify('Chinese Starters'), 'Paneer Rocket'), nameEn: 'Paneer Rocket', nameHi: 'पनीर रॉकेट', price: 225, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer rocket' },
      { id: generateDishId(slugify('Chinese Starters'), 'Paneer Crispy'), nameEn: 'Paneer Crispy', nameHi: 'पनीर क्रिस्पी', price: 225, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer crispy' },
      { id: generateDishId(slugify('Chinese Starters'), 'Paneer 65'), nameEn: 'Paneer 65', nameHi: 'पनीर 65', price: 220, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer 65' },
      { id: generateDishId(slugify('Chinese Starters'), 'Veg 65'), nameEn: 'Veg 65', nameHi: 'वेज 65', price: 180, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg 65' },
      { id: generateDishId(slugify('Chinese Starters'), 'Veg Lolipop'), nameEn: 'Veg Lolipop', nameHi: 'वेज लोलिपोप', price: 180, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg lolipop' },
      { id: generateDishId(slugify('Chinese Starters'), 'Veg Manchurian Dry'), nameEn: 'Veg Manchurian Dry', nameHi: 'वेज मंचूरियन डाय', price: 170, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg manchurian dry' },
      { id: generateDishId(slugify('Chinese Starters'), 'Veg Manchurian Gravy'), nameEn: 'Veg Manchurian Gravy', nameHi: 'वेज मंचूरियन ग्रेवी', price: 155, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg manchurian gravy' },
      { id: generateDishId(slugify('Chinese Starters'), 'Dragon Potato'), nameEn: 'Dragon Potato', nameHi: 'डेगन पटेटो', price: 190, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dragon potato' },
      { id: generateDishId(slugify('Chinese Starters'), 'Baby Corn Chilly Dry'), nameEn: 'Baby Corn Chilly Dry', nameHi: 'बेबी कॉर्न चिल्ली डाय', price: 210, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'baby corn chilly' },
      { id: generateDishId(slugify('Chinese Starters'), 'Mushroom Chilly Dry'), nameEn: 'Mushroom Chilly Dry', nameHi: 'मशरूम चिल्ली डाय', price: 215, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mushroom chilly' },
      { id: generateDishId(slugify('Chinese Starters'), 'Veg Spring Roll'), nameEn: 'Veg Spring Roll', nameHi: 'वेज स्प्रिंग रोल', price: 220, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'spring roll' },
      { id: generateDishId(slugify('Chinese Starters'), 'Veg Chowmein'), nameEn: 'Veg Chowmein', nameHi: 'वेज चाऊमिन', price: 150, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg chowmein' },
      { id: generateDishId(slugify('Chinese Starters'), 'American Chopsuey'), nameEn: 'American Chopsuey', nameHi: 'अमेरीकन चोप्सी', price: 180, category: slugify('Chinese Starters'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'american chopsuey' },
    ],
  },
  {
    id: slugify('Tandoor Starters'),
    nameEn: 'Tandoor Starters',
    nameHi: 'तंदूर स्टार्टर्स',
    icon: CATEGORY_ICONS['Tandoor Starters'],
    dishes: [ // Dishes will be populated dynamically
    ]
  },
  // Placeholder for the new "Paneer ka Kamal" category, to be inserted dynamically
  {
    id: slugify('Kaju Special'),
    nameEn: 'Kaju Special',
    nameHi: 'काजू स्पेशल',
    icon: CATEGORY_ICONS['Kaju Special'],
    dishes: [
      { id: generateDishId(slugify('Kaju Special'), 'Fry Kaju Kasturi Methi'), nameEn: 'Fry Kaju Kasturi Methi', nameHi: 'फ्राय काजु कस्तुरी मैथी', price: 225, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju kasturi methi' },
      { id: generateDishId(slugify('Kaju Special'), 'Fry Kaju Handi'), nameEn: 'Fry Kaju Handi', nameHi: 'फ्राय काजु हांडी', price: 210, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju handi' },
      { id: generateDishId(slugify('Kaju Special'), 'Kaju Cheese Paneer Masala'), nameEn: 'Kaju Cheese Paneer Masala', nameHi: 'काजु चीज पनीर मसाला', price: 245, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju cheese paneer' },
      { id: generateDishId(slugify('Kaju Special'), 'Kaju Cheese Masala'), nameEn: 'Kaju Cheese Masala', nameHi: 'काजु चीज मसाला', price: 230, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju cheese masala' },
      { id: generateDishId(slugify('Kaju Special'), 'Kaju Curry'), nameEn: 'Kaju Curry', nameHi: 'काजु करी', price: 200, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju curry' },
      { id: generateDishId(slugify('Kaju Special'), 'Kaju Butter Masala'), nameEn: 'Kaju Butter Masala', nameHi: 'काजु बटर मसाला', price: 205, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju butter masala' },
      { id: generateDishId(slugify('Kaju Special'), 'Kaju Masala'), nameEn: 'Kaju Masala', nameHi: 'काजु मसाला', price: 195, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju masala' },
      { id: generateDishId(slugify('Kaju Special'), 'Kaju Handi'), nameEn: 'Kaju Handi', nameHi: 'काजु हांडी', price: 200, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju handi plain' },
      { id: generateDishId(slugify('Kaju Special'), 'Cheese Paneer Masala'), nameEn: 'Cheese Paneer Masala', nameHi: 'चीज पनीर मसाला', price: 220, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese paneer masala' },
      { id: generateDishId(slugify('Kaju Special'), 'Cheese Butter Masala'), nameEn: 'Cheese Butter Masala', nameHi: 'चीज बटर मसाला', price: 220, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese butter masala' },
      { id: generateDishId(slugify('Kaju Special'), 'Khoya Kaju'), nameEn: 'Khoya Kaju', nameHi: 'खोया काजु', price: 210, category: slugify('Kaju Special'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'khoya kaju' },
    ],
  },
  {
    id: slugify('Kofta'),
    nameEn: 'Kofta',
    nameHi: 'कोफ्ता',
    icon: CATEGORY_ICONS['Kofta'],
    dishes: [
      { id: generateDishId(slugify('Kofta'), 'Veg Kofta'), nameEn: 'Veg Kofta', nameHi: 'वेज कोफ्ता', price: 175, category: slugify('Kofta'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg kofta' },
      { id: generateDishId(slugify('Kofta'), 'Paneer Kofta'), nameEn: 'Paneer Kofta', nameHi: 'पनीर कोफ्ता', price: 195, category: slugify('Kofta'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer kofta' },
      { id: generateDishId(slugify('Kofta'), 'Nargish Kofta'), nameEn: 'Nargish Kofta', nameHi: 'नरसिंग कोफ्ता', price: 180, category: slugify('Kofta'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'nargisi kofta' },
      { id: generateDishId(slugify('Kofta'), 'Kaju Kofta'), nameEn: 'Kaju Kofta', nameHi: 'काजु कोफ्ता', price: 200, category: slugify('Kofta'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju kofta' },
      { id: generateDishId(slugify('Kofta'), 'Tiranga Kofta'), nameEn: 'Tiranga Kofta', nameHi: 'तिरंगा कोफ्ता', price: 215, category: slugify('Kofta'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'tiranga kofta' },
      { id: generateDishId(slugify('Kofta'), 'Malai Kofta'), nameEn: 'Malai Kofta', nameHi: 'मलाई कोफ्ता', price: 190, category: slugify('Kofta'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'malai kofta' },
      { id: generateDishId(slugify('Kofta'), 'Kashmiri Kofta (Sweet)'), nameEn: 'Kashmiri Kofta (Sweet)', nameHi: 'कश्मीरी कोफ्ता', price: 195, category: slugify('Kofta'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kashmiri kofta' },
    ],
  },
  {
    id: slugify('Punjab Ka Dhamaka (Veg Specials)'),
    nameEn: 'Punjab Ka Dhamaka (Veg Specials)',
    nameHi: 'पंजाब का धमाका (वेज स्पेशल)',
    icon: CATEGORY_ICONS['Punjab Ka Dhamaka (Veg Specials)'],
    dishes: [
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Special Veg Monto'), nameEn: 'Special Veg Monto', nameHi: 'स्पेशल वेज मोन्टो', price: 225, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'special veg monto' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Angara'), nameEn: 'Veg Angara', nameHi: 'वेज अंगारा', price: 185, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg angara' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Tawa'), nameEn: 'Veg Tawa', nameHi: 'वेज तवा', price: 165, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg tawa' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Lajawab'), nameEn: 'Veg Lajawab', nameHi: 'वेज लाजवाब', price: 165, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg lajawab' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Kheema'), nameEn: 'Veg Kheema', nameHi: 'वेज कीमा', price: 145, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg kheema' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Handi'), nameEn: 'Veg Handi', nameHi: 'वेज हांडी', price: 140, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg handi' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Kadai'), nameEn: 'Veg Kadai', nameHi: 'वेज कढ़ाई', price: 140, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg kadai' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Hyderabadi'), nameEn: 'Veg Hyderabadi', nameHi: 'वेज हैदराबादी', price: 150, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg hyderabadi' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Makhanwala'), nameEn: 'Veg Makhanwala', nameHi: 'वेज मक्खनवाला', price: 135, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg makhanwala' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Kolapuri'), nameEn: 'Veg Kolapuri', nameHi: 'वेज कोलापुरी', price: 140, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg kolhapuri' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Jaipuri'), nameEn: 'Veg Jaipuri', nameHi: 'वेज जयपुरी', price: 130, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg jaipuri' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Jawala Mukhi'), nameEn: 'Veg Jawala Mukhi', nameHi: 'वेज ज्वालामुखी', price: 175, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg jwalamukhi' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Veg Shilsila'), nameEn: 'Veg Shilsila', nameHi: 'वेज सिलसिला', price: 170, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg silsila' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Aloo Mutter'), nameEn: 'Aloo Mutter', nameHi: 'आलू मटर', price: 105, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo matar' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Aloo Palak'), nameEn: 'Aloo Palak', nameHi: 'आलू पालक', price: 100, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo palak' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Chana Masala'), nameEn: 'Chana Masala', nameHi: 'चना मसाला', price: 110, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chana masala' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Mix Veg'), nameEn: 'Mix Veg', nameHi: 'मिक्स वेज', price: 110, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mix veg' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Plain Palak'), nameEn: 'Plain Palak', nameHi: 'प्लेन पालक', price: 95, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'plain palak' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Lasaniya Aloo'), nameEn: 'Lasaniya Aloo', nameHi: 'लसानिया आलू', price: 110, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'lasaniya aloo' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Sev Tamatar'), nameEn: 'Sev Tamatar', nameHi: 'सेव टमाटर', price: 110, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sev tamatar' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Navratan Korma (Sweet)'), nameEn: 'Navratan Korma (Sweet)', nameHi: 'नवरत्न कुरमा', price: 180, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'navratan korma' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Sev Bhaji'), nameEn: 'Sev Bhaji', nameHi: 'सेव भाजी', price: 115, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sev bhaji' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Dum Aloo'), nameEn: 'Dum Aloo', nameHi: 'दम आलू', price: 200, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dum aloo' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Dahi Tikhari'), nameEn: 'Dahi Tikhari', nameHi: 'दही टिकारी', price: 160, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dahi tikhari' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Aloo Do Pyaja'), nameEn: 'Aloo Do Pyaja', nameHi: 'आलू दो प्याजा', price: 195, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo do pyaza' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Save Masala'), nameEn: 'Save Masala', nameHi: 'सेव मसाला', price: 110, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sev masala' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Mushroom Masala'), nameEn: 'Mushroom Masala', nameHi: 'मशरूम मसाला', price: 210, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mushroom masala' },
      { id: generateDishId(slugify('Punjab Ka Dhamaka (Veg Specials)'), 'Mathi Malai Mutter'), nameEn: 'Mathi Malai Mutter', nameHi: 'मैथी मलाई मटर', price: 210, category: slugify('Punjab Ka Dhamaka (Veg Specials)'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'methi malai matar' },
    ],
  },
  {
    id: slugify('Roti, Paratha, Naan & Kulcha'),
    nameEn: 'Roti, Paratha, Naan & Kulcha',
    nameHi: 'रोटी, पराठा, नान & कुल्चा',
    icon: CATEGORY_ICONS['Roti, Paratha, Naan & Kulcha'],
    dishes: [
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Plain Roti'), nameEn: 'Plain Roti', nameHi: 'सादी रोटी', price: 18, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'plain roti' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Butter Roti'), nameEn: 'Butter Roti', nameHi: 'मक्खन रोटी', price: 20, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter roti' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Plain Paratha'), nameEn: 'Plain Paratha', nameHi: 'साद पराठा', price: 30, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'plain paratha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Butter Paratha'), nameEn: 'Butter Paratha', nameHi: 'मक्खन पराठा', price: 35, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter paratha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Plain Naan'), nameEn: 'Plain Naan', nameHi: 'सादा नान', price: 35, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'plain naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Butter Naan'), nameEn: 'Butter Naan', nameHi: 'मक्खन नान', price: 45, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Missi Roti'), nameEn: 'Missi Roti', nameHi: 'मिसी रोटी', price: 38, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'missi roti' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Garlic Naan'), nameEn: 'Garlic Naan', nameHi: 'लहसुन नान', price: 70, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'garlic naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Aloo Paratha'), nameEn: 'Aloo Paratha', nameHi: 'आलू पराठा', price: 60, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo paratha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Paneer Paratha'), nameEn: 'Paneer Paratha', nameHi: 'पनीर पराठा', price: 75, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer paratha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Onion Paratha'), nameEn: 'Onion Paratha', nameHi: 'प्याज पराठा', price: 50, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion paratha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Plain Kulcha'), nameEn: 'Plain Kulcha', nameHi: 'सादा कुल्छा', price: 40, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'plain kulcha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Butter Kulcha'), nameEn: 'Butter Kulcha', nameHi: 'मक्खन कुल्छा', price: 47, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter kulcha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Masala Kulcha'), nameEn: 'Masala Kulcha', nameHi: 'मसाला कुल्छा', price: 62, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala kulcha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Cheese Naan'), nameEn: 'Cheese Naan', nameHi: 'चीज नान', price: 85, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Cheese Garlic Naan'), nameEn: 'Cheese Garlic Naan', nameHi: 'चीज लहसुन नान', price: 95, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese garlic naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Cheese Paratha'), nameEn: 'Cheese Paratha', nameHi: 'चीज पराठा', price: 80, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese paratha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Lachha Paratha'), nameEn: 'Lachha Paratha', nameHi: 'लच्छा पराठा', price: 42, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'lachha paratha' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Chilly Garlic Naan'), nameEn: 'Chilly Garlic Naan', nameHi: 'चिल्ली लहसुन नान', price: 78, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chilly garlic naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Chilly Naan'), nameEn: 'Chilly Naan', nameHi: 'चिल्ली नान', price: 50, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chilly naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Stuff Naan'), nameEn: 'Stuff Naan', nameHi: 'स्टफ नान', price: 88, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'stuff naan' },
      { id: generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Stuff Paratha'), nameEn: 'Stuff Paratha', nameHi: 'स्टफ पराठा', price: 80, category: slugify('Roti, Paratha, Naan & Kulcha'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'stuff paratha' },
    ],
  },
  {
    id: slugify('Tava Roti'),
    nameEn: 'Tava Roti',
    nameHi: 'तवा रोटी',
    icon: CATEGORY_ICONS['Tava Roti'],
    dishes: [
      { id: generateDishId(slugify('Tava Roti'), 'Plain Tava Roti'), nameEn: 'Plain Tava Roti', nameHi: 'सादी तवा रोटी', price: 15, category: slugify('Tava Roti'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'plain tava roti' },
      { id: generateDishId(slugify('Tava Roti'), 'Butter Tava Roti'), nameEn: 'Butter Tava Roti', nameHi: 'मक्खन तवा रोटी', price: 20, category: slugify('Tava Roti'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter tava roti' },
      { id: generateDishId(slugify('Tava Roti'), 'Tava Paratha'), nameEn: 'Tava Paratha', nameHi: 'तवा पराठा', price: 40, category: slugify('Tava Roti'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'tava paratha' },
      { id: generateDishId(slugify('Tava Roti'), 'Makka Roti'), nameEn: 'Makka Roti', nameHi: 'मक्का रोटी', price: 50, category: slugify('Tava Roti'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'makka roti' },
      { id: generateDishId(slugify('Tava Roti'), 'Jawar Roti'), nameEn: 'Jawar Roti', nameHi: 'ज्वार रोटी', price: 50, category: slugify('Tava Roti'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'jowar roti' },
    ],
  },
  {
    id: slugify('South Indian Fancy Dosa'),
    nameEn: 'South Indian Fancy Dosa',
    nameHi: 'साउथ इंडियन फैंसी डोसा',
    icon: CATEGORY_ICONS['South Indian Fancy Dosa'],
    dishes: [
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Masala Dosa'), nameEn: 'Masala Dosa', nameHi: 'मसाला डोसा', price: 130, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Paneer Masala Dosa'), nameEn: 'Paneer Masala Dosa', nameHi: 'पनीर मसाला डोसा', price: 145, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer masala dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Cheese Masala Dosa'), nameEn: 'Cheese Masala Dosa', nameHi: 'चीज मसाला डोसा', price: 150, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese masala dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Aloo Palak Dosa'), nameEn: 'Aloo Palak Dosa', nameHi: 'आलू पालक डोसा', price: 128, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo palak dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Aloo Palak Cheese Masala Dosa'), nameEn: 'Aloo Palak Cheese Masala Dosa', nameHi: 'आलू पालक चीज मसाला डोसा', price: 155, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo palak cheese dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Paneer Cheese Masala Dosa'), nameEn: 'Paneer Cheese Masala Dosa', nameHi: 'पनीर चीज मसाला डोसा', price: 165, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer cheese dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Mix Masala Dosa'), nameEn: 'Mix Masala Dosa', nameHi: 'मिक्स मसाला डोसा', price: 150, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mix masala dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Monto S.P. Masala Dosa'), nameEn: 'Monto S.P. Masala Dosa', nameHi: 'मोन्टो स्पेशल मसाला डोसा', price: 200, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'monto special dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Jinirole Dosa'), nameEn: 'Jinirole Dosa', nameHi: 'जीनी रोल डोसा', price: 180, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'jini roll dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Palak Paneer Dosa'), nameEn: 'Palak Paneer Dosa', nameHi: 'पालक पनीर डोसा', price: 152, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'palak paneer dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Palak Cheese Dosa'), nameEn: 'Palak Cheese Dosa', nameHi: 'पालक चीज डोसा', price: 162, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'palak cheese dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Palak Paneer Cheese Dosa'), nameEn: 'Palak Paneer Cheese Dosa', nameHi: 'पालक पनीर चीज डोसा', price: 170, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'palak paneer cheese dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Spring Roll Dosa'), nameEn: 'Spring Roll Dosa', nameHi: 'स्प्रिंग रोल डोसा', price: 165, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'spring roll dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Chinese Dosa'), nameEn: 'Chinese Dosa', nameHi: 'चाइनीज डोसा', price: 145, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chinese dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Rajarani Dosa'), nameEn: 'Rajarani Dosa', nameHi: 'राजारानी डोसा', price: 160, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'raja rani dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Dilkhus Dosa'), nameEn: 'Dilkhus Dosa', nameHi: 'दिलखुश डोसा', price: 155, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dilkhush dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Paneer Chilli Dosa'), nameEn: 'Paneer Chilli Dosa', nameHi: 'पनीर चिली डोसा', price: 147, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer chilli dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Onion Dosa'), nameEn: 'Onion Dosa', nameHi: 'ओनियन डोसा', price: 120, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Pizza Dosa'), nameEn: 'Pizza Dosa', nameHi: 'पिज्जा डोसा', price: 180, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'pizza dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Meggie Dosa'), nameEn: 'Meggie Dosa', nameHi: 'मेगी डोसा', price: 0, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'maggi dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Janak Payal Dosa'), nameEn: 'Janak Payal Dosa', nameHi: 'जनक पायल डोसा', price: 180, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'janak payal dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'Sweet Corn Dosa'), nameEn: 'Sweet Corn Dosa', nameHi: 'स्वीट्स कोर्न डोसा', price: 175, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sweet corn dosa' },
      { id: generateDishId(slugify('South Indian Fancy Dosa'), 'M.K.T. Dosa'), nameEn: 'M.K.T. Dosa', nameHi: 'एम.के.टी. डोसा', price: 200, category: slugify('South Indian Fancy Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mkt dosa' },
    ],
  },
  {
    id: slugify('Dal'),
    nameEn: 'Dal',
    nameHi: 'दाल',
    icon: CATEGORY_ICONS['Dal'],
    dishes: [
      { id: generateDishId(slugify('Dal'), 'Dal Makhani'), nameEn: 'Dal Makhani', nameHi: 'दाल मखनी', price: 135, category: slugify('Dal'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dal makhani' },
      { id: generateDishId(slugify('Dal'), 'Dal Tadka'), nameEn: 'Dal Tadka', nameHi: 'दाल तड़का', price: 122, category: slugify('Dal'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dal tadka' },
      { id: generateDishId(slugify('Dal'), 'Dal Fry'), nameEn: 'Dal Fry', nameHi: 'दाल फ्राय', price: 117, category: slugify('Dal'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dal fry' },
      { id: generateDishId(slugify('Dal'), 'Dal Fry Butter'), nameEn: 'Dal Fry Butter', nameHi: 'दाल फ्राय बटर', price: 120, category: slugify('Dal'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dal fry butter' },
      { id: generateDishId(slugify('Dal'), 'Dal Khatti Mithi'), nameEn: 'Dal Khatti Mithi', nameHi: 'दाल खट्टी मिठी', price: 118, category: slugify('Dal'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'khatti meethi dal' },
      { id: generateDishId(slugify('Dal'), 'Dal Tadka Butter'), nameEn: 'Dal Tadka Butter', nameHi: 'दाल तड़का बटर', price: 125, category: slugify('Dal'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dal tadka butter' },
    ],
  },
  {
    id: slugify('Rice & Biryani'),
    nameEn: 'Rice & Biryani',
    nameHi: 'चावल & बिरयानी',
    icon: CATEGORY_ICONS['Rice & Biryani'],
    dishes: [
      { id: generateDishId(slugify('Rice & Biryani'), 'S.P. Veg Monto Biriyani'), nameEn: 'S.P. Veg Monto Biriyani', nameHi: 'स्पेशल वेज मोन्टो बिरयानी', price: 190, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg biryani' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Dum Biriyani'), nameEn: 'Dum Biriyani', nameHi: 'दम बिरयानी', price: 170, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'dum biryani' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Hyderabadi Biriyani'), nameEn: 'Hyderabadi Biriyani', nameHi: 'हैदराबादी बिरयानी', price: 165, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'hyderabadi biryani' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Veg Biriyani'), nameEn: 'Veg Biriyani', nameHi: 'वेज बिरयानी', price: 162, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg biryani simple' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Veg Pulav'), nameEn: 'Veg Pulav', nameHi: 'वेज पुलाव', price: 140, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg pulao' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Kashmiri Pulav (Sweet)'), nameEn: 'Kashmiri Pulav (Sweet)', nameHi: 'कश्मीरी पुलाव (स्वीट)', price: 155, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kashmiri pulao' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Kaju Pulav'), nameEn: 'Kaju Pulav', nameHi: 'काजु पुलाव', price: 150, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kaju pulao' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Mater Pulav'), nameEn: 'Mater Pulav', nameHi: 'मटर पुलाव', price: 140, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'matar pulao' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Masala Rice'), nameEn: 'Masala Rice', nameHi: 'मसाला राईस', price: 120, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala rice' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Jeera Rice'), nameEn: 'Jeera Rice', nameHi: 'जीरा राईस', price: 118, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'jeera rice' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Plain Rice'), nameEn: 'Plain Rice', nameHi: 'प्लेन राईस', price: 100, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'plain rice' },
      { id: generateDishId(slugify('Rice & Biryani'), 'Steam Rice'), nameEn: 'Steam Rice', nameHi: 'स्टीम राईस', price: 110, category: slugify('Rice & Biryani'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'steam rice' },
    ],
  },
  {
    id: slugify('Mozzarella Pizza'),
    nameEn: 'Mozzarella Pizza',
    nameHi: 'मोजरेला पिज्जा',
    icon: CATEGORY_ICONS['Mozzarella Pizza'],
    dishes: [
      { id: generateDishId(slugify('Mozzarella Pizza'), 'S.P. Monto Mozzarella Pizza'), nameEn: 'S.P. Monto Mozzarella Pizza', nameHi: 'स्पेशल मोन्टो मोजरेला पिज्जा', price: 210, category: slugify('Mozzarella Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'monto mozzarella pizza' },
      { id: generateDishId(slugify('Mozzarella Pizza'), 'Italian Mozzarella Pizza'), nameEn: 'Italian Mozzarella Pizza', nameHi: 'इटालियन मोजरेला पिज्जा', price: 170, category: slugify('Mozzarella Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'italian mozzarella pizza' },
      { id: generateDishId(slugify('Mozzarella Pizza'), 'Indian Garden Mozzarella Pizza'), nameEn: 'Indian Garden Mozzarella Pizza', nameHi: 'इंडियन गार्डन मोजरेला पिज्जा', price: 180, category: slugify('Mozzarella Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'indian garden pizza' },
      { id: generateDishId(slugify('Mozzarella Pizza'), 'Continental Mozzarella Pizza'), nameEn: 'Continental Mozzarella Pizza', nameHi: 'कांटिनेन्टल मोजरेला पिज्जा', price: 160, category: slugify('Mozzarella Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'continental pizza' },
      { id: generateDishId(slugify('Mozzarella Pizza'), 'Marghrita Mozzarella Pizza'), nameEn: 'Marghrita Mozzarella Pizza', nameHi: 'मारगरिटा मोजरेला पिज्जा', price: 160, category: slugify('Mozzarella Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'margherita pizza' },
      { id: generateDishId(slugify('Mozzarella Pizza'), 'Paneer Mozzarella Pizza'), nameEn: 'Paneer Mozzarella Pizza', nameHi: 'पनीर मोजरेला पिज्जा', price: 185, category: slugify('Mozzarella Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer pizza' },
      { id: generateDishId(slugify('Mozzarella Pizza'), 'American Mozzarella Pizza'), nameEn: 'American Mozzarella Pizza', nameHi: 'अमेरिका मोजरेला पिज्जा', price: 170, category: slugify('Mozzarella Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'american pizza' },
    ],
  },
  {
    id: slugify('Toast Sandwich'),
    nameEn: 'Toast Sandwich',
    nameHi: 'टोस्ट सैंडविच',
    icon: CATEGORY_ICONS['Toast Sandwich'],
    dishes: [
      { id: generateDishId(slugify('Toast Sandwich'), 'Cheese Garlic Toast'), nameEn: 'Cheese Garlic Toast', nameHi: 'चीज गार्लिक टोस्ट', price: 92, category: slugify('Toast Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese garlic toast' },
      { id: generateDishId(slugify('Toast Sandwich'), 'Cheese Chilly Toast'), nameEn: 'Cheese Chilly Toast', nameHi: 'चीज चिली टोस्ट', price: 82, category: slugify('Toast Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese chilly toast' },
      { id: generateDishId(slugify('Toast Sandwich'), 'Bread Butter Toast'), nameEn: 'Bread Butter Toast', nameHi: 'ब्रेड बटर टोस्ट', price: 70, category: slugify('Toast Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'bread butter toast' },
      { id: generateDishId(slugify('Toast Sandwich'), 'Peppy Paneer Toast'), nameEn: 'Peppy Paneer Toast', nameHi: 'पेपी पनीर टोस्ट', price: 90, category: slugify('Toast Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer toast' },
      { id: generateDishId(slugify('Toast Sandwich'), 'Maxican Burst Toast'), nameEn: 'Maxican Burst Toast', nameHi: 'मेक्सिकन ब्रेड टोस्ट', price: 100, category: slugify('Toast Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mexican toast' },
      { id: generateDishId(slugify('Toast Sandwich'), 'Cheese Burst Toast'), nameEn: 'Cheese Burst Toast', nameHi: 'चीज ब्रेड टोस्ट', price: 95, category: slugify('Toast Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese burst toast' },
      { id: generateDishId(slugify('Toast Sandwich'), 'Paneer Cheese Toast'), nameEn: 'Paneer Cheese Toast', nameHi: 'पनीर चीज टोस्ट', price: 102, category: slugify('Toast Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer cheese toast' },
    ],
  },
  {
    id: slugify('Pav Bhaji'),
    nameEn: 'Pav Bhaji',
    nameHi: 'पाव भाजी',
    icon: CATEGORY_ICONS['Pav Bhaji'],
    dishes: [
      { id: generateDishId(slugify('Pav Bhaji'), 'S.P. Pav Bhaji'), nameEn: 'S.P. Pav Bhaji', nameHi: 'स्पेशल पाव भाजी', price: 165, category: slugify('Pav Bhaji'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'special pav bhaji' },
      { id: generateDishId(slugify('Pav Bhaji'), 'Butter Bhaji'), nameEn: 'Butter Bhaji', nameHi: 'बटर भाजी', price: 155, category: slugify('Pav Bhaji'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'butter pav bhaji' },
      { id: generateDishId(slugify('Pav Bhaji'), 'Green Bhaji'), nameEn: 'Green Bhaji', nameHi: 'ग्रीन भाजी', price: 150, category: slugify('Pav Bhaji'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'green pav bhaji' },
      { id: generateDishId(slugify('Pav Bhaji'), 'Ex. Pav'), nameEn: 'Ex. Pav', nameHi: 'एक्स्ट्रा पाव', price: 15, category: slugify('Pav Bhaji'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'extra pav' },
    ],
  },
  {
    id: slugify('Pizza'),
    nameEn: 'Pizza',
    nameHi: 'पिज्जा',
    icon: CATEGORY_ICONS['Pizza'],
    dishes: [
      { id: generateDishId(slugify('Pizza'), 'Special Monto Pizza'), nameEn: 'Special Monto Pizza', nameHi: 'स्पेशल मोन्टो पिज्जा', price: 200, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'monto pizza' },
      { id: generateDishId(slugify('Pizza'), 'Italian Pizza'), nameEn: 'Italian Pizza', nameHi: 'इटालियन पिज्जा', price: 150, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'italian pizza' },
      { id: generateDishId(slugify('Pizza'), 'Veg Pizza'), nameEn: 'Veg Pizza', nameHi: 'वेज पिज्जा', price: 140, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg pizza' },
      { id: generateDishId(slugify('Pizza'), 'American Pizza'), nameEn: 'American Pizza', nameHi: 'अमेरिका पिज्जा', price: 150, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'american pizza' },
      { id: generateDishId(slugify('Pizza'), 'Indian Garden Pizza'), nameEn: 'Indian Garden Pizza', nameHi: 'इंडियन गार्डन पिज्जा', price: 160, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'indian garden pizza' },
      { id: generateDishId(slugify('Pizza'), 'Mushroom Pizza'), nameEn: 'Mushroom Pizza', nameHi: 'मशरूम पिज्जा', price: 148, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mushroom pizza' },
      { id: generateDishId(slugify('Pizza'), 'Pineapple Pizza'), nameEn: 'Pineapple Pizza', nameHi: 'पाईनापल पिज्जा', price: 146, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'pineapple pizza' },
      { id: generateDishId(slugify('Pizza'), 'Paneer Pizza'), nameEn: 'Paneer Pizza', nameHi: 'पनीर पिज्जा', price: 160, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer pizza' },
      { id: generateDishId(slugify('Pizza'), 'Onion Capsicum Pizza'), nameEn: 'Onion Capsicum Pizza', nameHi: 'ओनियन कैप्सिकम पिज्जा', price: 145, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion capsicum pizza' },
      { id: generateDishId(slugify('Pizza'), 'Continental Pizza'), nameEn: 'Continental Pizza', nameHi: 'कॉटिनेंटल पिज्जा', price: 140, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'continental pizza' },
      { id: generateDishId(slugify('Pizza'), 'Cheese Pizza'), nameEn: 'Cheese Pizza', nameHi: 'चीज पिज्जा', price: 135, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese pizza' },
      { id: generateDishId(slugify('Pizza'), 'Corn Pizza'), nameEn: 'Corn Pizza', nameHi: 'कॉर्न पिज्जा', price: 148, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'corn pizza' },
      { id: generateDishId(slugify('Pizza'), 'Tango Chilly Pizza'), nameEn: 'Tango Chilly Pizza', nameHi: 'टेंगो चिल्ली पिज्जा', price: 145, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chilly pizza' },
      { id: generateDishId(slugify('Pizza'), 'Onion Pizza'), nameEn: 'Onion Pizza', nameHi: 'ओनियन पिज्जा', price: 130, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion pizza' },
      { id: generateDishId(slugify('Pizza'), 'Simple Cheese Pizza'), nameEn: 'Simple Cheese Pizza', nameHi: 'सिंपल पिज्जा', price: 130, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'simple cheese pizza' },
      { id: generateDishId(slugify('Pizza'), 'Double Cheese Pizza'), nameEn: 'Double Cheese Pizza', nameHi: 'डबल चीज पिज्जा', price: 160, category: slugify('Pizza'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'double cheese pizza' },
    ],
  },
  {
    id: slugify('Grill Sandwich'),
    nameEn: 'Grill Sandwich',
    nameHi: 'ग्रिल सैंडविच',
    icon: CATEGORY_ICONS['Grill Sandwich'],
    dishes: [
      { id: generateDishId(slugify('Grill Sandwich'), 'Veg Cheese Chocolate Grill'), nameEn: 'Veg Cheese Chocolate Grill', nameHi: 'वेज चीज चॉकलेट सैंडविच', price: 87, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese chocolate sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Garden Grill'), nameEn: 'Garden Grill', nameHi: 'गार्डन ग्रील सैंडविच', price: 92, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'garden grill sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'S.P. Club Grill'), nameEn: 'S.P. Club Grill', nameHi: 'स्पे. क्लब ग्रील सैंडविच', price: 150, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'club grill sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Aloo Mutter Grill'), nameEn: 'Aloo Mutter Grill', nameHi: 'आलू मटर ग्रील सैंडविच', price: 85, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo matar sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Masala Grill'), nameEn: 'Masala Grill', nameHi: 'मसाला ग्रील सैंडविच', price: 92, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala grill sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Indian Garden Grill'), nameEn: 'Indian Garden Grill', nameHi: 'इंडियन गार्डन ग्रील सैंडविच', price: 102, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'indian garden sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Veg Cheese Grill'), nameEn: 'Veg Cheese Grill', nameHi: 'वेज चीज सैंडविच', price: 88, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg cheese sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Maxican Grill'), nameEn: 'Maxican Grill', nameHi: 'मेक्सिकन ग्रील सैंडविच', price: 95, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mexican grill sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Italian Grill'), nameEn: 'Italian Grill', nameHi: 'इटालियन ग्रील सैंडविच', price: 92, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'italian grill sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Cheese Grill'), nameEn: 'Cheese Grill', nameHi: 'चीज ग्रील सैंडविच', price: 90, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese grill sandwich' },
      { id: generateDishId(slugify('Grill Sandwich'), 'Cheese Masala Sandwich'), nameEn: 'Cheese Masala Sandwich', nameHi: 'चीज मसाला सैंडविच', price: 105, category: slugify('Grill Sandwich'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese masala sandwich' },
    ],
  },
  {
    id: slugify('Burger'),
    nameEn: 'Burger',
    nameHi: 'बर्गर',
    icon: CATEGORY_ICONS['Burger'],
    dishes: [
      { id: generateDishId(slugify('Burger'), 'S.P. Monto Burger'), nameEn: 'S.P. Monto Burger', nameHi: 'स्पेशल मोन्टो बर्गर', price: 92, category: slugify('Burger'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'monto burger' },
      { id: generateDishId(slugify('Burger'), 'Veg Burger'), nameEn: 'Veg Burger', nameHi: 'वेज बर्गर', price: 77, category: slugify('Burger'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'veg burger' },
      { id: generateDishId(slugify('Burger'), 'Cheese Burger'), nameEn: 'Cheese Burger', nameHi: 'चीज बर्गर', price: 80, category: slugify('Burger'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese burger' },
      { id: generateDishId(slugify('Burger'), 'Aloo Tikki Burger'), nameEn: 'Aloo Tikki Burger', nameHi: 'आलू टिक्का बर्गर', price: 72, category: slugify('Burger'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'aloo tikki burger' },
      { id: generateDishId(slugify('Burger'), 'Masala Burger'), nameEn: 'Masala Burger', nameHi: 'मसाला बर्गर', price: 70, category: slugify('Burger'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala burger' },
    ],
  },
  {
    id: slugify('Sip-in Soda'),
    nameEn: 'Sip-in Soda',
    nameHi: 'सिप-इन सोडा',
    icon: CATEGORY_ICONS['Sip-in Soda'],
    dishes: [
      { id: generateDishId(slugify('Sip-in Soda'), 'Fresh Lemon Soda'), nameEn: 'Fresh Lemon Soda', nameHi: 'फ्रेश लेमन सोडा', price: 40, category: slugify('Sip-in Soda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'lemon soda' },
      { id: generateDishId(slugify('Sip-in Soda'), 'Kala Khatta Lime'), nameEn: 'Kala Khatta Lime', nameHi: 'काला खटटा लाइम', price: 45, category: slugify('Sip-in Soda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kala khatta' },
      { id: generateDishId(slugify('Sip-in Soda'), 'Sweet Lime Soda'), nameEn: 'Sweet Lime Soda', nameHi: 'मीठा लाइम सोडा', price: 40, category: slugify('Sip-in Soda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sweet lime soda' },
      { id: generateDishId(slugify('Sip-in Soda'), 'Salt Lime Soda'), nameEn: 'Salt Lime Soda', nameHi: 'साल्ट लाइम सोडा', price: 40, category: slugify('Sip-in Soda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'salt lime soda' },
      { id: generateDishId(slugify('Sip-in Soda'), 'Masala Lime Soda'), nameEn: 'Masala Lime Soda', nameHi: 'मसाला लाइम सोडा', price: 0, category: slugify('Sip-in Soda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala lime soda' }, 
      { id: generateDishId(slugify('Sip-in Soda'), 'Jal Jeera Lime Soda'), nameEn: 'Jal Jeera Lime Soda', nameHi: 'जल जीरा लाइम सोडा', price: 45, category: slugify('Sip-in Soda'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'jaljeera soda' },
    ],
  },
  {
    id: slugify('Paper Dosa'),
    nameEn: 'Paper Dosa',
    nameHi: 'पेपर डोसा',
    icon: CATEGORY_ICONS['Paper Dosa'],
    dishes: [
      { id: generateDishId(slugify('Paper Dosa'), 'Ginger Paper'), nameEn: 'Ginger Paper', nameHi: 'जिंजर पेपर', price: 92, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'ginger paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Sada Paper'), nameEn: 'Sada Paper', nameHi: 'सादा पेपर', price: 90, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sada paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Baby Paper'), nameEn: 'Baby Paper', nameHi: 'बेबी पेपर', price: 88, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'baby paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Jira Paper'), nameEn: 'Jira Paper', nameHi: 'जीरा पेपर', price: 90, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'jeera paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Garlic Paper'), nameEn: 'Garlic Paper', nameHi: 'गार्लिक पेपर', price: 130, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'garlic paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Masala Paper'), nameEn: 'Masala Paper', nameHi: 'मसाला पेपर', price: 145, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Naylon Paper'), nameEn: 'Naylon Paper', nameHi: 'नायलॉन पेपर', price: 135, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'nylon paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Chocolate Paper'), nameEn: 'Chocolate Paper', nameHi: 'चॉकलेट पेपर', price: 150, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'chocolate paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Cheese Paper'), nameEn: 'Cheese Paper', nameHi: 'चीज पेपर', price: 162, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Cheese Garlic Paper'), nameEn: 'Cheese Garlic Paper', nameHi: 'चीज गार्लिक पेपर', price: 172, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'cheese garlic paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Paneer Cheese Paper'), nameEn: 'Paneer Cheese Paper', nameHi: 'पनीर चीज पेपर', price: 175, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'paneer cheese paper dosa' },
      { id: generateDishId(slugify('Paper Dosa'), 'Kashmiri Naylon Paper'), nameEn: 'Kashmiri Naylon Paper', nameHi: 'कश्मीरी नायलॉन पेपर', price: 100, category: slugify('Paper Dosa'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'kashmiri nylon paper dosa' },
    ],
  },
  {
    id: slugify('Uttapam'),
    nameEn: 'Uttapam',
    nameHi: 'उत्तपम',
    icon: CATEGORY_ICONS['Uttapam'],
    dishes: [
      { id: generateDishId(slugify('Uttapam'), 'Sada Uttapam'), nameEn: 'Sada Uttapam', nameHi: 'सादा उत्तपम', price: 115, category: slugify('Uttapam'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'sada uttapam' },
      { id: generateDishId(slugify('Uttapam'), 'Masala Uttapam'), nameEn: 'Masala Uttapam', nameHi: 'मसाला उत्तपम', price: 150, category: slugify('Uttapam'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'masala uttapam' },
      { id: generateDishId(slugify('Uttapam'), 'Tomato Uttapam'), nameEn: 'Tomato Uttapam', nameHi: 'टमाटर उत्तपम', price: 128, category: slugify('Uttapam'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'tomato uttapam' },
      { id: generateDishId(slugify('Uttapam'), 'Onion Uttapam'), nameEn: 'Onion Uttapam', nameHi: 'प्याज उत्तपम', price: 138, category: slugify('Uttapam'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion uttapam' },
      { id: generateDishId(slugify('Uttapam'), 'Capsicum Uttapam'), nameEn: 'Capsicum Uttapam', nameHi: 'केपसीकम उत्तपम', price: 138, category: slugify('Uttapam'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'capsicum uttapam' },
      { id: generateDishId(slugify('Uttapam'), 'Onion Capsicum Uttapam'), nameEn: 'Onion Capsicum Uttapam', nameHi: 'प्याज केपसीकम उत्तपम', price: 148, category: slugify('Uttapam'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'onion capsicum uttapam' },
      { id: generateDishId(slugify('Uttapam'), 'Mix Uttapam'), nameEn: 'Mix Uttapam', nameHi: 'मिक्स उत्तपम', price: 160, category: slugify('Uttapam'), imageUrl: PLACEHOLDER_IMAGE_URL, isVegetarian: true, dataAiHint: 'mix uttapam' },
    ],
  },
  {
    id: slugify('Monto Special Thali'),
    nameEn: 'Monto Special Thali',
    nameHi: 'मोन्टो स्पेशल थाली',
    icon: CATEGORY_ICONS['Monto Special Thali'],
    dishes: [
      { 
        id: generateDishId(slugify('Monto Special Thali'), 'Monto Special Thali Package'), 
        nameEn: 'Monto Special Thali (₹201/-)', 
        nameHi: 'मोन्टो स्पेशल थाली (₹२०१/-)', 
        price: 201, 
        category: slugify('Monto Special Thali'), 
        description: 'In Fixed Quantity: Roasted Papad, Salad, Paneer Sabji, Vegetable Dal Tadka, Rice, 4 Chapati, Sweet: Rasgulla (1 piece).', 
        imageUrl: PLACEHOLDER_IMAGE_URL, 
        isVegetarian: true, 
        dataAiHint: 'special thali meal' 
      },
    ],
  },
];

// Logic to restructure the menu
const tandoorStartersCategoryIndex = MOCK_MENU_DATA_TEMP.findIndex(cat => cat.id === slugify('Tandoor Starters'));

if (tandoorStartersCategoryIndex !== -1) {
  const tandoorStartersCategory = MOCK_MENU_DATA_TEMP[tandoorStartersCategoryIndex];
  const originalTandoorDishes = [...tandoorStartersCategory.dishes]; // Clone for safety

  const achariTikkaDryIndex = originalTandoorDishes.findIndex(dish => dish.nameEn === 'Achari Tikka Dry');

  const paneerKaKamalSlug = slugify('Paneer ka Kamal');
  
  let dishesForPaneerKaKamal: Dish[] = [];
  if (achariTikkaDryIndex !== -1 && achariTikkaDryIndex + 1 < originalTandoorDishes.length) {
    dishesForPaneerKaKamal = originalTandoorDishes.slice(achariTikkaDryIndex + 1).map(dish => ({
      ...dish,
      category: paneerKaKamalSlug,
      id: generateDishId(paneerKaKamalSlug, dish.nameEn),
    }));
  }

  const newTandoorStartersDishes = achariTikkaDryIndex !== -1 
    ? originalTandoorDishes.slice(0, achariTikkaDryIndex + 1)
    : originalTandoorDishes; // Fallback if 'Achari Tikka Dry' not found (should not happen with current data)
  
  tandoorStartersCategory.dishes = newTandoorStartersDishes;

  const newPaneerKaKamalCategory: MenuCategory = {
    id: paneerKaKamalSlug,
    nameEn: 'Paneer ka Kamal',
    nameHi: 'पनीर का कमाल',
    icon: CATEGORY_ICONS['Paneer ka Kamal'],
    dishes: dishesForPaneerKaKamal,
  };

  // Insert the new category after Tandoor Starters
  MOCK_MENU_DATA_TEMP.splice(tandoorStartersCategoryIndex + 1, 0, newPaneerKaKamalCategory);
}

export const MOCK_MENU_DATA: MenuCategory[] = MOCK_MENU_DATA_TEMP;


const findDishFromNewMenu = (dishId: string): Dish | undefined => {
  for (const category of MOCK_MENU_DATA) {
    const foundDish = category.dishes.find(d => d.id === dishId);
    if (foundDish) return foundDish;
  }
  return undefined;
};

const mockOrderDish1 = findDishFromNewMenu(generateDishId(slugify('South Indian Fancy Dosa'), 'Masala Dosa')); 
// Update mockOrderDish2 to reflect potential ID change due to category move
const mockOrderDish2 = findDishFromNewMenu(generateDishId(slugify('Paneer ka Kamal'), 'Paneer Butter Masala')); 
const mockOrderDish3 = findDishFromNewMenu(generateDishId(slugify('Roti, Paratha, Naan & Kulcha'), 'Butter Naan'));


export const MOCK_ORDERS_DATA: OrderType[] = [
  {
    id: 'order1_mock_updated',
    items: [
      mockOrderDish1 ? { ...mockOrderDish1, quantity: 2 } : undefined,
      mockOrderDish2 ? { ...mockOrderDish2, quantity: 1 } : undefined,
    ].filter(item => item !== undefined) as CartItemType[],
    totalAmount: (mockOrderDish1 ? mockOrderDish1.price * 2 : 0) + (mockOrderDish2 ? mockOrderDish2.price : 0),
    tableNumber: '5C',
    customerName: 'Ms. Anjali Sharma',
    status: 'Preparing' as OrderType['status'],
    orderTime: new Date(Date.now() - 25 * 60 * 1000), 
  },
  {
    id: 'order2_mock_updated',
    items: [
      mockOrderDish3 ? { ...mockOrderDish3, quantity: 4 } : undefined,
    ].filter(item => item !== undefined) as CartItemType[],
    totalAmount: (mockOrderDish3 ? mockOrderDish3.price * 4 : 0),
    tableNumber: '1A',
    customerName: 'Mr. Vikram Singh',
    status: 'Pending' as OrderType['status'],
    orderTime: new Date(Date.now() - 10 * 60 * 1000),
  }
].filter(order => order.items.length > 0); 


export const INR_CURRENCY_CODE = 'INR';
export const INR_SYMBOL = '₹';
    
