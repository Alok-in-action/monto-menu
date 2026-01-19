
import type { MenuCategory, Dish, CartItemType } from '@/types';
import { 
  Soup, Salad, UtensilsCrossed, IndianRupee, ShoppingCart, 
  Disc3, Wheat, CookingPot, 
  Sparkles, Flame, Nut, Grip, Container, CupSoda, Martini, Vegan, Utensils,
  Pizza, Sandwich, Cake
} from 'lucide-react';

export const APP_NAME = "MONTO Restaurant";

export const CATEGORY_ICONS: { [key: string]: React.ElementType } = {
  'KHANE SE PEHLE TIME PASS': Salad,
  'CHINESE HOT SOUP': Soup,
  'MILK SHAKE': Martini,
  'HOT TIME': CupSoda,
  'RAITA / DAIRY': Container,
  'MILIJULI STARTERS / PAKODA': Grip,
  'CHINESE SIZZLER': Flame,
  'CHINESE MAIN COURSE': Utensils,
  'CHINESE STARTERS': Sparkles,
  'TANDOOR STARTER': Flame,
  'PANEER KA KAMAL': CookingPot,
  'PUNJAB KA DHAMAKA': CookingPot,
  'KAJU KA KHAJANA': Nut,
  'KOFTA': Vegan,
  'DAL': Container,
  'BASMATI KA SWAD RICE': Utensils,
  'MITTI KI KHUSHBU ROTI': Wheat,
  'TAVA ROTI': Wheat,
  'SOUTH INDIAN FANCY DOSA': Disc3,
  'TOAST SANDWICH': Sandwich,
  'PAV BHAJI': CookingPot,
  'PIZZA': Pizza, 
  'GRILL SANDWICH': Sandwich,
  'BURGER': Sandwich, 
  'SIP-IN SODA': CupSoda,
  'PAPER DOSA': Disc3,
  'UTTAPAM': Disc3,
  'MONTO SPECIAL THALI': UtensilsCrossed,
  'Pasta': Utensils,
  'Baked Dish': Flame,
  'Maggi': Soup,
  'Brownie': Cake,
  'Momos': Vegan,
  Default: UtensilsCrossed,
};

export const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/600x400.png';

const slugify = (text: string) => text.toLowerCase().replace(/[\s/]+/g, '-').replace(/[^a-z0-9-]/g, '').replace(/^-+|-+$/g, '');

const generateDishId = (categorySlug: string, dishNameEn: string) => {
  return `${categorySlug}-${slugify(dishNameEn)}`;
};

// New, updated menu data structure based on the provided text.
const MOCK_MENU_DATA_TEMP: MenuCategory[] = [
  {
    id: slugify('MONTO SPECIAL THALI'),
    nameEn: 'MONTO SPECIAL THALI',
    nameHi: 'मोन्टो स्पेशल थाली',
    icon: CATEGORY_ICONS['MONTO SPECIAL THALI'],
    dishes: [
      { id: generateDishId(slugify('MONTO SPECIAL THALI'), 'MONTO SPECIAL THALI'), nameEn: 'MONTO SPECIAL THALI', nameHi: 'मोन्टो स्पेशल थाली', price: 211, description: 'Paneer Sabji, Vegetable, Dal Tadka, Rice, 4 Chapati, Sweet: Rasgulla (1)', category: slugify('MONTO SPECIAL THALI'), imageUrl: '', isVegetarian: true, dataAiHint: 'indian thali meal' },
    ],
  },
  {
    id: slugify('KHANE SE PEHLE TIME PASS'),
    nameEn: 'KHANE SE PEHLE TIME PASS',
    nameHi: 'खाने से पहले टाइम पास',
    icon: CATEGORY_ICONS['KHANE SE PEHLE TIME PASS'],
    dishes: [
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Cheese Masala Papad'), nameEn: 'Cheese Masala Papad', nameHi: 'चीज मसाला पापड़', price: 45, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese papad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Roasted Papad'), nameEn: 'Roasted Papad', nameHi: 'भुना हुआ पापड़', price: 20, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'roasted papad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Roasted Masala Papad'), nameEn: 'Roasted Masala Papad', nameHi: 'भुना मसाला पापड़', price: 30, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala papad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Fry Papad'), nameEn: 'Fry Papad', nameHi: 'तला पापड़', price: 25, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'fry papad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Fry Masala Papad'), nameEn: 'Fry Masala Papad', nameHi: 'तला मसाला पापड़', price: 35, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'fry masala papad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Green Salad'), nameEn: 'Green Salad', nameHi: 'ग्रीन सलाद', price: 60, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'green salad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Tomato Salad'), nameEn: 'Tomato Salad', nameHi: 'टमाटर सलाद', price: 60, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'tomato salad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Cucumber Salad'), nameEn: 'Cucumber Salad', nameHi: 'कुकुम्बर सलाद', price: 60, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'cucumber salad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Cucumber Tomato Salad'), nameEn: 'Cucumber Tomato Salad', nameHi: 'कुकुम्बर टमाटर सलाद', price: 70, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'cucumber tomato salad' },
      { id: generateDishId(slugify('KHANE SE PEHLE TIME PASS'), 'Kachumar Salad'), nameEn: 'Kachumar Salad', nameHi: 'कचुम्बर सलाद', price: 65, category: slugify('KHANE SE PEHLE TIME PASS'), imageUrl: '', isVegetarian: true, dataAiHint: 'kachumber salad' },
    ],
  },
  {
    id: slugify('CHINESE HOT SOUP'),
    nameEn: 'CHINESE HOT SOUP',
    nameHi: 'चाइनीज हॉट सूप',
    icon: CATEGORY_ICONS['CHINESE HOT SOUP'],
    dishes: [
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Veg Hot "n" Sour Soup'), nameEn: 'Veg Hot "n" Sour Soup', nameHi: 'वेज हाट सॉर सूप', price: 110, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'hot sour soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Veg Manchow Soup'), nameEn: 'Veg Manchow Soup', nameHi: 'वेज मनचाऊ सूप', price: 105, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'manchow soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Veg Manchurian Soup'), nameEn: 'Veg Manchurian Soup', nameHi: 'वेज मंचूरियन सूप', price: 108, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'manchurian soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Lemon Coriander Soup'), nameEn: 'Lemon Coriander Soup', nameHi: 'लेमन कोरिएन्डर सूप', price: 100, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'lemon coriander soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Noodles Soup'), nameEn: 'Noodles Soup', nameHi: 'नूडल्स सूप', price: 100, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'noodles soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Cheese Corn Tomato Soup'), nameEn: 'Cheese Corn Tomato Soup', nameHi: 'चीज कार्न टोमेटो सूप', price: 120, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese corn soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Minestrone Soup'), nameEn: 'Minestrone Soup', nameHi: 'माइनस्टोन सूप', price: 98, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'minestrone soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Veg Sweet Corn Soup'), nameEn: 'Veg Sweet Corn Soup', nameHi: 'वेज स्वीट कार्न सूप', price: 103, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'sweet corn soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Tomato Soup'), nameEn: 'Tomato Soup', nameHi: 'टमाटर सूप', price: 100, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'tomato soup' },
        { id: generateDishId(slugify('CHINESE HOT SOUP'), 'Green Island Soup'), nameEn: 'Green Island Soup', nameHi: 'ग्रीन आइसलेण्ड सूप', price: 100, category: slugify('CHINESE HOT SOUP'), imageUrl: '', isVegetarian: true, dataAiHint: 'green soup' },
    ]
  },
  {
    id: slugify('MILK SHAKE'),
    nameEn: 'MILK SHAKE',
    nameHi: 'मिल्क शेक',
    icon: CATEGORY_ICONS['MILK SHAKE'],
    dishes: [
        { id: generateDishId(slugify('MILK SHAKE'), 'Vanilla Milkshake'), nameEn: 'Vanilla Milkshake', nameHi: 'वेनिला मिल्क शेक', price: 85, category: slugify('MILK SHAKE'), imageUrl: '', isVegetarian: true, dataAiHint: 'vanilla milkshake' },
        { id: generateDishId(slugify('MILK SHAKE'), 'Strawberry Milkshake'), nameEn: 'Strawberry Milkshake', nameHi: 'स्ट्रॉबेरी मिल्क शेक', price: 100, category: slugify('MILK SHAKE'), imageUrl: '', isVegetarian: true, dataAiHint: 'strawberry milkshake' },
        { id: generateDishId(slugify('MILK SHAKE'), 'Mango Milkshake'), nameEn: 'Mango Milkshake', nameHi: 'मैंगो मिल्क शेक', price: 98, category: slugify('MILK SHAKE'), imageUrl: '', isVegetarian: true, dataAiHint: 'mango milkshake' },
        { id: generateDishId(slugify('MILK SHAKE'), 'Butter Scotch Milkshake'), nameEn: 'Butter Scotch Milkshake', nameHi: 'बटर स्कॉच शेक', price: 100, category: slugify('MILK SHAKE'), imageUrl: '', isVegetarian: true, dataAiHint: 'butterscotch milkshake' },
        { id: generateDishId(slugify('MILK SHAKE'), 'Chocolate Milkshake'), nameEn: 'Chocolate Milkshake', nameHi: 'चॉकलेट मिल्क शेक', price: 95, category: slugify('MILK SHAKE'), imageUrl: '', isVegetarian: true, dataAiHint: 'chocolate milkshake' },
        { id: generateDishId(slugify('MILK SHAKE'), 'Oreo Milkshake'), nameEn: 'Oreo Milkshake', nameHi: 'ओरियो मिल्क शेक', price: 105, category: slugify('MILK SHAKE'), imageUrl: '', isVegetarian: true, dataAiHint: 'oreo milkshake' },
        { id: generateDishId(slugify('MILK SHAKE'), 'Cold Coffee Milkshake'), nameEn: 'Cold Coffee Milkshake', nameHi: 'कोल्ड कॉफी', price: 85, category: slugify('MILK SHAKE'), imageUrl: '', isVegetarian: true, dataAiHint: 'cold coffee' },
    ]
  },
  {
    id: slugify('HOT TIME'),
    nameEn: 'HOT TIME',
    nameHi: 'हॉट टाइम',
    icon: CATEGORY_ICONS['HOT TIME'],
    dishes: [
        { id: generateDishId(slugify('HOT TIME'), 'Minto Mojito'), nameEn: 'Minto Mojito', nameHi: 'मिन्टो मोजिटो', price: 85, category: slugify('HOT TIME'), imageUrl: '', isVegetarian: true, dataAiHint: 'mint mojito' },
        { id: generateDishId(slugify('HOT TIME'), 'Paan Mojito'), nameEn: 'Paan Mojito', nameHi: 'पान मोजिटो', price: 85, category: slugify('HOT TIME'), imageUrl: '', isVegetarian: true, dataAiHint: 'paan mojito' },
        { id: generateDishId(slugify('HOT TIME'), 'Virgin Mojito'), nameEn: 'Virgin Mojito', nameHi: 'वर्जिन मोजिटो', price: 105, category: slugify('HOT TIME'), imageUrl: '', isVegetarian: true, dataAiHint: 'virgin mojito' },
    ]
  },
  {
    id: slugify('RAITA / DAIRY'),
    nameEn: 'RAITA / DAIRY',
    nameHi: 'रायता / डेयरी',
    icon: CATEGORY_ICONS['RAITA / DAIRY'],
    dishes: [
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Fruit Raita'), nameEn: 'Fruit Raita', nameHi: 'फ्रुट रायता', price: 90, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'fruit raita' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Pineapple Raita'), nameEn: 'Pineapple Raita', nameHi: 'पाईनापल रायता', price: 90, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'pineapple raita' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Veg Raita'), nameEn: 'Veg Raita', nameHi: 'वेज रायता', price: 85, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg raita' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Boondi Raita'), nameEn: 'Boondi Raita', nameHi: 'बुंदी रायता', price: 85, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'boondi raita' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'S.P. Monto Lassi'), nameEn: 'S.P. Monto Lassi', nameHi: 'स्पेशल मोन्टो लस्सी', price: 95, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'monto lassi' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Sweet Lassi'), nameEn: 'Sweet Lassi', nameHi: 'मिठी लस्सी', price: 80, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'sweet lassi' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Salted Lassi'), nameEn: 'Salted Lassi', nameHi: 'साल्टेड लस्सी', price: 70, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'salted lassi' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Curd'), nameEn: 'Curd', nameHi: 'दही', price: 65, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'curd' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Butter Milk'), nameEn: 'Butter Milk', nameHi: 'मखन छाछ', price: 35, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'butter milk' },
        { id: generateDishId(slugify('RAITA / DAIRY'), 'Milk'), nameEn: 'Milk', nameHi: 'दूध', price: 45, category: slugify('RAITA / DAIRY'), imageUrl: '', isVegetarian: true, dataAiHint: 'milk' },
    ]
  },
  {
    id: slugify('MILIJULI STARTERS / PAKODA'),
    nameEn: 'MILIJULI STARTERS / PAKODA',
    nameHi: 'मिलीजुली स्टार्टर्स / पकोड़ा',
    icon: CATEGORY_ICONS['MILIJULI STARTERS / PAKODA'],
    dishes: [
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Crispy Corn'), nameEn: 'Crispy Corn', nameHi: 'क्रीप्सी कोर्न', price: 110, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'crispy corn' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Chana Roast'), nameEn: 'Chana Roast', nameHi: 'चना रोस्ट', price: 120, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'chana roast' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'French Finger Fry'), nameEn: 'French Finger Fry', nameHi: 'फ्रेंच फिंगर फ्राय', price: 105, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'french fries' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Veg Pakoda'), nameEn: 'Veg Pakoda', nameHi: 'वेज पकोड़ा', price: 125, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg pakoda' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Paneer Pakoda'), nameEn: 'Paneer Pakoda', nameHi: 'पनीर पकोड़ा', price: 180, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer pakoda' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Onion Pakoda'), nameEn: 'Onion Pakoda', nameHi: 'प्याज पकोड़ा', price: 115, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'onion pakoda' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Chilly Pakoda'), nameEn: 'Chilly Pakoda', nameHi: 'मिर्ची पकोड़ा', price: 110, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'chilly pakoda' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Chole Bhature'), nameEn: 'Chole Bhature', nameHi: 'छोले भटुरे', price: 155, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'chole bhature' },
        { id: generateDishId(slugify('MILIJULI STARTERS / PAKODA'), 'Extra Bhature'), nameEn: 'Extra Bhature', nameHi: 'एक्सट्रा भटुरे', price: 25, category: slugify('MILIJULI STARTERS / PAKODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'bhature' },
    ]
  },
  {
    id: slugify('CHINESE STARTERS'),
    nameEn: 'CHINESE STARTERS',
    nameHi: 'चाइनीज स्टार्टर्स',
    icon: CATEGORY_ICONS['CHINESE STARTERS'],
    dishes: [
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Veg Crispy'), nameEn: 'Veg Crispy', nameHi: 'वेज क्रिस्पी', price: 210, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg crispy' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Paneer Chilly Gravy'), nameEn: 'Paneer Chilly Gravy', nameHi: 'पनीर चिली ग्रेवी', price: 205, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer chilly gravy' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Paneer Chilly Dry'), nameEn: 'Paneer Chilly Dry', nameHi: 'पनीर चिली डाय', price: 220, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer chilly dry' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Paneer Rocket'), nameEn: 'Paneer Rocket', nameHi: 'पनीर रॉकेट', price: 235, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer rocket' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Paneer Crispy'), nameEn: 'Paneer Crispy', nameHi: 'पनीर क्रिस्पी', price: 235, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer crispy' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Paneer 65'), nameEn: 'Paneer 65', nameHi: 'पनीर 65', price: 230, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer 65' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Veg 65'), nameEn: 'Veg 65', nameHi: 'वेज 65', price: 185, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg 65' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Veg Lollipop'), nameEn: 'Veg Lollipop', nameHi: 'वेज लोलिपोप', price: 185, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg lolipop' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Veg Manchurian Dry'), nameEn: 'Veg Manchurian Dry', nameHi: 'वेज मंचूरियन डाय', price: 175, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg manchurian dry' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Veg Manchurian Gravy'), nameEn: 'Veg Manchurian Gravy', nameHi: 'वेज मंचूरियन ग्रेवी', price: 160, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg manchurian gravy' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Dragon Potato'), nameEn: 'Dragon Potato', nameHi: 'डेगन पटेटो', price: 195, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'dragon potato' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Baby Corn Chilly Dry'), nameEn: 'Baby Corn Chilly Dry', nameHi: 'बेबी कॉर्न चिल्ली डाय', price: 220, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'baby corn chilly' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Mushroom Chilly Dry'), nameEn: 'Mushroom Chilly Dry', nameHi: 'मशरूम चिल्ली डाय', price: 225, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'mushroom chilly' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Veg Spring Roll'), nameEn: 'Veg Spring Roll', nameHi: 'वेज स्प्रिंग रोल', price: 225, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'spring roll' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'Veg Chowmein'), nameEn: 'Veg Chowmein', nameHi: 'वेज चाऊमिन', price: 150, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg chowmein' },
        { id: generateDishId(slugify('CHINESE STARTERS'), 'American Chopsuey (Sweet)'), nameEn: 'American Chopsuey (Sweet)', nameHi: 'अमेरीकन चोप्सी', price: 185, category: slugify('CHINESE STARTERS'), imageUrl: '', isVegetarian: true, dataAiHint: 'american chopsuey' },
    ]
  },
  {
    id: slugify('TANDOOR STARTER'),
    nameEn: 'TANDOOR STARTER',
    nameHi: 'तंदूर स्टार्टर',
    icon: CATEGORY_ICONS['TANDOOR STARTER'],
    dishes: [
        { id: generateDishId(slugify('TANDOOR STARTER'), 'Paneer Barah Tikka Dry'), nameEn: 'Paneer Barah Tikka Dry', nameHi: 'पनीर बारह टिक्का डाय', price: 280, category: slugify('TANDOOR STARTER'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer tikka' },
        { id: generateDishId(slugify('TANDOOR STARTER'), 'Paneer Tikka Dry'), nameEn: 'Paneer Tikka Dry', nameHi: 'पनीर टिक्का डाय', price: 260, category: slugify('TANDOOR STARTER'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer tikka dry' },
        { id: generateDishId(slugify('TANDOOR STARTER'), 'Paneer Hariyali Tikka Dry'), nameEn: 'Paneer Hariyali Tikka Dry', nameHi: 'पनीर हरियाली टिक्का डाय', price: 240, category: slugify('TANDOOR STARTER'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer hariyali tikka' },
        { id: generateDishId(slugify('TANDOOR STARTER'), 'Harabhara Kabab'), nameEn: 'Harabhara Kabab', nameHi: 'हराभरा कबाब', price: 225, category: slugify('TANDOOR STARTER'), imageUrl: '', isVegetarian: true, dataAiHint: 'hara bhara kabab' },
        { id: generateDishId(slugify('TANDOOR STARTER'), 'Raja Kabab'), nameEn: 'Raja Kabab', nameHi: 'राजा कबाब', price: 195, category: slugify('TANDOOR STARTER'), imageUrl: '', isVegetarian: true, dataAiHint: 'raja kabab' },
        { id: generateDishId(slugify('TANDOOR STARTER'), 'Achari Tikka Dry'), nameEn: 'Achari Tikka Dry', nameHi: 'अचारी टिक्का डाय', price: 250, category: slugify('TANDOOR STARTER'), imageUrl: '', isVegetarian: true, dataAiHint: 'achari tikka' },
    ]
  },
  {
    id: slugify('CHINESE SIZZLER'),
    nameEn: 'CHINESE SIZZLER',
    nameHi: 'चाइनीज सिजलर',
    icon: CATEGORY_ICONS['CHINESE SIZZLER'],
    dishes: [
        { id: generateDishId(slugify('CHINESE SIZZLER'), 'Special Monto Sizzler'), nameEn: 'Special Monto Sizzler', nameHi: 'स्पेशल मोन्टो सिजलर', price: 510, category: slugify('CHINESE SIZZLER'), imageUrl: '', isVegetarian: true, dataAiHint: 'monto sizzler' },
        { id: generateDishId(slugify('CHINESE SIZZLER'), 'Paneer Stick Sizzler'), nameEn: 'Paneer Stick Sizzler', nameHi: 'पनीर स्टीक सिजलर', price: 425, category: slugify('CHINESE SIZZLER'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer sizzler' },
        { id: generateDishId(slugify('CHINESE SIZZLER'), 'Veg Sizzler'), nameEn: 'Veg Sizzler', nameHi: 'वेज सिजलर', price: 360, category: slugify('CHINESE SIZZLER'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg sizzler' },
        { id: generateDishId(slugify('CHINESE SIZZLER'), 'Chinese Sizzler'), nameEn: 'Chinese Sizzler', nameHi: 'चाईनिस सिजलर', price: 410, category: slugify('CHINESE SIZZLER'), imageUrl: '', isVegetarian: true, dataAiHint: 'chinese sizzler' },
    ]
  },
  {
    id: slugify('CHINESE MAIN COURSE'),
    nameEn: 'CHINESE MAIN COURSE',
    nameHi: 'चाइनीज मेन कोर्स',
    icon: CATEGORY_ICONS['CHINESE MAIN COURSE'],
    dishes: [
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Veg Hakka Noodles'), nameEn: 'Veg Hakka Noodles', nameHi: 'वेज हक्का नूडल्स', price: 130, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'hakka noodles' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Veg Manchurian Noodles'), nameEn: 'Veg Manchurian Noodles', nameHi: 'वेज मंजूरियन नूडल्स', price: 135, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'manchurian noodles' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Veg Schezwan Noodles'), nameEn: 'Veg Schezwan Noodles', nameHi: 'वेज शेजवान नूडल्स', price: 140, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'schezwan noodles' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Veg Garlic Noodles'), nameEn: 'Veg Garlic Noodles', nameHi: 'वेज लहसून नूडल्स', price: 140, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'garlic noodles' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Veg Manchurian Rice'), nameEn: 'Veg Manchurian Rice', nameHi: 'वेज मंचूरियन राईस', price: 140, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'manchurian rice' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Veg Schezwan Rice'), nameEn: 'Veg Schezwan Rice', nameHi: 'वेज शेजवान राईस', price: 135, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'schezwan rice' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Chinese Fried Rice'), nameEn: 'Chinese Fried Rice', nameHi: 'चायनीज फ्राइड राईस', price: 150, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'chinese fried rice' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Triple Fried Rice'), nameEn: 'Triple Fried Rice', nameHi: 'त्रिपल फ्राइड राईस', price: 180, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'triple fried rice' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Noodles Fried Rice'), nameEn: 'Noodles Fried Rice', nameHi: 'नूडल्स फ्राइड राईस', price: 145, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'noodles fried rice' },
        { id: generateDishId(slugify('CHINESE MAIN COURSE'), 'Chinese Bhel'), nameEn: 'Chinese Bhel', nameHi: 'चायनीज भैल', price: 150, category: slugify('CHINESE MAIN COURSE'), imageUrl: '', isVegetarian: true, dataAiHint: 'chinese bhel' },
    ]
  },
  {
    id: slugify('PANEER KA KAMAL'),
    nameEn: 'PANEER KA KAMAL',
    nameHi: 'पनीर का कमाल',
    icon: CATEGORY_ICONS['PANEER KA KAMAL'],
    dishes: [
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Special Paneer Monto'), nameEn: 'Special Paneer Monto', nameHi: 'स्पेशल पनीर मोन्टो', price: 285, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'special paneer' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Takatak'), nameEn: 'Paneer Takatak', nameHi: 'पनीर टकाटक', price: 230, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer takatak' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Rustum'), nameEn: 'Paneer Rustum', nameHi: 'पनीर रुस्तम', price: 215, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer rustum' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Lababdar'), nameEn: 'Paneer Lababdar', nameHi: 'पनीर लबाबदार', price: 220, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer lababdar' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Punjabi'), nameEn: 'Paneer Punjabi', nameHi: 'पनीर पंजाबी', price: 205, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer punjabi' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Angara'), nameEn: 'Paneer Angara', nameHi: 'पनीर अंगारा', price: 235, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer angara' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Tawa'), nameEn: 'Paneer Tawa', nameHi: 'पनीर तवा', price: 205, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer tawa' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Matar Paneer'), nameEn: 'Matar Paneer', nameHi: 'मटर पनीर', price: 195, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'matar paneer' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Handi'), nameEn: 'Paneer Handi', nameHi: 'पनीर हांडी', price: 200, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer handi' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Kadai'), nameEn: 'Paneer Kadai', nameHi: 'पनीर कढ़ाई', price: 205, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer kadai' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Patiala'), nameEn: 'Paneer Patiala', nameHi: 'पनीर पटियाला', price: 215, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer patiala' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Pasanda'), nameEn: 'Paneer Pasanda', nameHi: 'पनीर पसंदा', price: 215, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer pasanda' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Shahi Paneer'), nameEn: 'Shahi Paneer', nameHi: 'शाही पनीर', price: 195, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'shahi paneer' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Chatpata'), nameEn: 'Paneer Chatpata', nameHi: 'पनीर चटपटा', price: 210, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer chatpata' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Diwani Handi'), nameEn: 'Paneer Diwani Handi', nameHi: 'पनीर दिवानी हांडी', price: 220, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer diwani handi' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Lasuniya'), nameEn: 'Paneer Lasuniya', nameHi: 'पनीर लसुनिया', price: 215, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer lasuniya' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Tikka Masala'), nameEn: 'Paneer Tikka Masala', nameHi: 'पनीर टिक्का मसाला', price: 210, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer tikka masala' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Bhurji'), nameEn: 'Paneer Bhurji', nameHi: 'पनीर भुर्जी', price: 230, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer bhurji' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Toofani'), nameEn: 'Paneer Toofani', nameHi: 'पनीर तूफानी', price: 200, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer toofani' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Palak Paneer'), nameEn: 'Palak Paneer', nameHi: 'पालक पनीर', price: 180, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'palak paneer' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Kurma'), nameEn: 'Paneer Kurma', nameHi: 'पनीर कुरमा', price: 205, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer korma' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Butter Masala'), nameEn: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', price: 210, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer butter masala' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer K.K.T'), nameEn: 'Paneer K.K.T', nameHi: 'पनीर के.के.टी', price: 280, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer kkt' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Bahubali'), nameEn: 'Paneer Bahubali', nameHi: 'पनीर बाहुबली', price: 250, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer bahubali' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Chula Paneer'), nameEn: 'Chula Paneer', nameHi: 'चुला पनीर', price: 195, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'chula paneer' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Paneer Do Pyaja'), nameEn: 'Paneer Do Pyaja', nameHi: 'पनीर दो प्याजा', price: 210, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer do pyaza' },
      { id: generateDishId(slugify('PANEER KA KAMAL'), 'Mushroom Paneer'), nameEn: 'Mushroom Paneer', nameHi: 'मशरूम पनीर', price: 215, category: slugify('PANEER KA KAMAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'mushroom paneer' },
    ]
  },
  {
    id: slugify('PUNJAB KA DHAMAKA'),
    nameEn: 'PUNJAB KA DHAMAKA',
    nameHi: 'पंजाब का धमाका',
    icon: CATEGORY_ICONS['PUNJAB KA DHAMAKA'],
    dishes: [
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Special Veg Monto'), nameEn: 'Special Veg Monto', nameHi: 'स्पेशल वेज मोन्टो', price: 230, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'special veg' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Angara'), nameEn: 'Veg Angara', nameHi: 'वेज अंगारा', price: 190, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg angara' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Tawa'), nameEn: 'Veg Tawa', nameHi: 'वेज तवा', price: 170, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg tawa' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Jalfraji'), nameEn: 'Veg Jalfraji', nameHi: 'वेज जलफ्राजी', price: 170, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg jalfrezi' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Kheema'), nameEn: 'Veg Kheema', nameHi: 'वेज कीमा', price: 155, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg kheema' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Handi'), nameEn: 'Veg Handi', nameHi: 'वेज हांडी', price: 145, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg handi' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Kadai'), nameEn: 'Veg Kadai', nameHi: 'वेज कढ़ाई', price: 145, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg kadai' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Hyderabadi'), nameEn: 'Veg Hyderabadi', nameHi: 'वेज हैदराबादी', price: 160, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg hyderabadi' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Makhanwala'), nameEn: 'Veg Makhanwala', nameHi: 'वेज मक्खनवाला', price: 140, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg makhanwala' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Kolhapuri'), nameEn: 'Veg Kolhapuri', nameHi: 'वेज कोलापुरी', price: 145, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg kolhapuri' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Jaipuri'), nameEn: 'Veg Jaipuri', nameHi: 'वेज जयपुरी', price: 135, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg jaipuri' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Jawala Mukhi'), nameEn: 'Veg Jawala Mukhi', nameHi: 'वेज ज्वालामुखी', price: 180, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg jwalamukhi' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Veg Shishila'), nameEn: 'Veg Shishila', nameHi: 'वेज शिशिला', price: 175, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg silsila' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Aloo Mutter'), nameEn: 'Aloo Mutter', nameHi: 'आलू मटर', price: 110, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo matar' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Aloo Palak'), nameEn: 'Aloo Palak', nameHi: 'आलू पालक', price: 105, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo palak' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Chana Masala'), nameEn: 'Chana Masala', nameHi: 'चना मसाला', price: 115, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'chana masala' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Mix Veg'), nameEn: 'Mix Veg', nameHi: 'मिक्स वेज', price: 110, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'mix veg' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Plain Palak'), nameEn: 'Plain Palak', nameHi: 'प्लेन पालक', price: 100, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'plain palak' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Lasaniya Aloo'), nameEn: 'Lasaniya Aloo', nameHi: 'लसानिया आलू', price: 110, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'lasaniya aloo' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Sev Tamatar'), nameEn: 'Sev Tamatar', nameHi: 'सेव टमाटर', price: 110, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'sev tamatar' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Navratan Korma (Sweet)'), nameEn: 'Navratan Korma (Sweet)', nameHi: 'नवरत्न कुरमा', price: 190, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'navratan korma' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Sev Bhaji'), nameEn: 'Sev Bhaji', nameHi: 'सेव भाजी', price: 120, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'sev bhaji' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Dum Aloo'), nameEn: 'Dum Aloo', nameHi: 'दम आलू', price: 210, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'dum aloo' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Dahi Tikhari'), nameEn: 'Dahi Tikhari', nameHi: 'दही टिकारी', price: 160, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'dahi tikhari' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Aloo Do Pyaja'), nameEn: 'Aloo Do Pyaja', nameHi: 'आलू दो प्याजा', price: 200, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo do pyaza' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Save Masala'), nameEn: 'Save Masala', nameHi: 'सेव मसाला', price: 110, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'sev masala' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Mushroom Masala'), nameEn: 'Mushroom Masala', nameHi: 'मशरूम मसाला', price: 205, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'mushroom masala' },
      { id: generateDishId(slugify('PUNJAB KA DHAMAKA'), 'Methi Malai Mutter'), nameEn: 'Methi Malai Mutter', nameHi: 'मैथी मलाई मटर', price: 220, category: slugify('PUNJAB KA DHAMAKA'), imageUrl: '', isVegetarian: true, dataAiHint: 'methi malai matar' },
    ]
  },
  {
    id: slugify('KAJU KA KHAJANA'),
    nameEn: 'KAJU KA KHAJANA',
    nameHi: 'काजू का खजाना',
    icon: CATEGORY_ICONS['KAJU KA KHAJANA'],
    dishes: [
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Fry Kaju Kasturi Methi'), nameEn: 'Fry Kaju Kasturi Methi', nameHi: 'फ्राय काजु कस्तुरी मैथी', price: 230, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju kasturi methi' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Fry Kaju Handi'), nameEn: 'Fry Kaju Handi', nameHi: 'फ्राय काजु हांडी', price: 215, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju handi' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Kaju Cheese Paneer Masala'), nameEn: 'Kaju Cheese Paneer Masala', nameHi: 'काजु चीज पनीर मसाला', price: 255, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju cheese paneer' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Kaju Cheese Masala'), nameEn: 'Kaju Cheese Masala', nameHi: 'काजु चीज मसाला', price: 235, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju cheese masala' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Kaju Curry'), nameEn: 'Kaju Curry', nameHi: 'काजु करी', price: 205, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju curry' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Kaju Butter Masala'), nameEn: 'Kaju Butter Masala', nameHi: 'काजु बटर मसाला', price: 210, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju butter masala' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Kaju Masala'), nameEn: 'Kaju Masala', nameHi: 'काजु मसाला', price: 200, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju masala' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Kaju Handi'), nameEn: 'Kaju Handi', nameHi: 'काजु हांडी', price: 205, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju handi plain' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Cheese Paneer Masala'), nameEn: 'Cheese Paneer Masala', nameHi: 'चीज पनीर मसाला', price: 225, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese paneer masala' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Cheese Butter Masala'), nameEn: 'Cheese Butter Masala', nameHi: 'चीज बटर मसाला', price: 230, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese butter masala' },
      { id: generateDishId(slugify('KAJU KA KHAJANA'), 'Khoya Kaju'), nameEn: 'Khoya Kaju', nameHi: 'खोया काजु', price: 215, category: slugify('KAJU KA KHAJANA'), imageUrl: '', isVegetarian: true, dataAiHint: 'khoya kaju' },
    ]
  },
  {
    id: slugify('KOFTA'),
    nameEn: 'KOFTA',
    nameHi: 'कोफ्ता',
    icon: CATEGORY_ICONS['KOFTA'],
    dishes: [
      { id: generateDishId(slugify('KOFTA'), 'Veg Kofta'), nameEn: 'Veg Kofta', nameHi: 'वेज कोफ्ता', price: 180, category: slugify('KOFTA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg kofta' },
      { id: generateDishId(slugify('KOFTA'), 'Paneer Kofta'), nameEn: 'Paneer Kofta', nameHi: 'पनीर कोफ्ता', price: 200, category: slugify('KOFTA'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer kofta' },
      { id: generateDishId(slugify('KOFTA'), 'Nargis Kofta'), nameEn: 'Nargis Kofta', nameHi: 'नरगिस कोफ्ता', price: 185, category: slugify('KOFTA'), imageUrl: '', isVegetarian: true, dataAiHint: 'nargisi kofta' },
      { id: generateDishId(slugify('KOFTA'), 'Kaju Kofta'), nameEn: 'Kaju Kofta', nameHi: 'काजु कोफ्ता', price: 205, category: slugify('KOFTA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju kofta' },
      { id: generateDishId(slugify('KOFTA'), 'Tiranga Kofta'), nameEn: 'Tiranga Kofta', nameHi: 'तिरंगा कोफ्ता', price: 220, category: slugify('KOFTA'), imageUrl: '', isVegetarian: true, dataAiHint: 'tiranga kofta' },
      { id: generateDishId(slugify('KOFTA'), 'Malai Kofta'), nameEn: 'Malai Kofta', nameHi: 'मलाई कोफ्ता', price: 195, category: slugify('KOFTA'), imageUrl: '', isVegetarian: true, dataAiHint: 'malai kofta' },
      { id: generateDishId(slugify('KOFTA'), 'Kashmiri Kofta (Sweet)'), nameEn: 'Kashmiri Kofta (Sweet)', nameHi: 'कश्मीरी कोफ्ता', price: 205, category: slugify('KOFTA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kashmiri kofta' },
    ]
  },
  {
    id: slugify('DAL'),
    nameEn: 'DAL',
    nameHi: 'दाल',
    icon: CATEGORY_ICONS['DAL'],
    dishes: [
      { id: generateDishId(slugify('DAL'), 'Dal Makhani'), nameEn: 'Dal Makhani', nameHi: 'दाल मखनी', price: 140, category: slugify('DAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'dal makhani' },
      { id: generateDishId(slugify('DAL'), 'Dal Tadka'), nameEn: 'Dal Tadka', nameHi: 'दाल तड़का', price: 126, category: slugify('DAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'dal tadka' },
      { id: generateDishId(slugify('DAL'), 'Dal Fry'), nameEn: 'Dal Fry', nameHi: 'दाल फ्राय', price: 119, category: slugify('DAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'dal fry' },
      { id: generateDishId(slugify('DAL'), 'Dal Fry Butter'), nameEn: 'Dal Fry Butter', nameHi: 'दाल फ्राय बटर', price: 125, category: slugify('DAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'dal fry butter' },
      { id: generateDishId(slugify('DAL'), 'Dal Khatti Mithi'), nameEn: 'Dal Khatti Mithi', nameHi: 'दाल खट्टी मिठी', price: 121, category: slugify('DAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'khatti meethi dal' },
      { id: generateDishId(slugify('DAL'), 'Dal Tadka Butter'), nameEn: 'Dal Tadka Butter', nameHi: 'दाल तड़का बटर', price: 130, category: slugify('DAL'), imageUrl: '', isVegetarian: true, dataAiHint: 'dal tadka butter' },
    ]
  },
  {
    id: slugify('BASMATI KA SWAD RICE'),
    nameEn: 'BASMATI KA SWAD RICE',
    nameHi: 'बासमती का स्वाद चावल',
    icon: CATEGORY_ICONS['BASMATI KA SWAD RICE'],
    dishes: [
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'S.P. Veg Monto Biryani'), nameEn: 'S.P. Veg Monto Biryani', nameHi: 'स्पेशल वेज मोन्टो बिरयानी', price: 195, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg biryani' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Dum Biryani'), nameEn: 'Dum Biryani', nameHi: 'दम बिरयानी', price: 175, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'dum biryani' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Hyderabadi Biryani'), nameEn: 'Hyderabadi Biryani', nameHi: 'हैदराबादी बिरयानी', price: 170, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'hyderabadi biryani' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Veg Biryani'), nameEn: 'Veg Biryani', nameHi: 'वेज बिरयानी', price: 167, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg biryani simple' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Veg Pulav'), nameEn: 'Veg Pulav', nameHi: 'वेज पुलाव', price: 145, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg pulao' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Kashmiri Pulav (Sweet)'), nameEn: 'Kashmiri Pulav (Sweet)', nameHi: 'कश्मीरी पुलाव (स्वीट)', price: 160, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'kashmiri pulao' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Kaju Pulav'), nameEn: 'Kaju Pulav', nameHi: 'काजु पुलाव', price: 155, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'kaju pulao' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Matar Pulav'), nameEn: 'Matar Pulav', nameHi: 'मटर पुलाव', price: 142, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'matar pulao' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Masala Rice'), nameEn: 'Masala Rice', nameHi: 'मसाला राईस', price: 126, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala rice' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Jeera Rice'), nameEn: 'Jeera Rice', nameHi: 'जीरा राईस', price: 122, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'jeera rice' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Plain Rice'), nameEn: 'Plain Rice', nameHi: 'प्लेन राईस', price: 105, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'plain rice' },
      { id: generateDishId(slugify('BASMATI KA SWAD RICE'), 'Steam Rice'), nameEn: 'Steam Rice', nameHi: 'स्टीम राईस', price: 115, category: slugify('BASMATI KA SWAD RICE'), imageUrl: '', isVegetarian: true, dataAiHint: 'steam rice' },
    ]
  },
  {
    id: slugify('MITTI KI KHUSHBU ROTI'),
    nameEn: 'MITTI KI KHUSHBU ROTI',
    nameHi: 'मिट्टी की खुशबु रोटी',
    icon: CATEGORY_ICONS['MITTI KI KHUSHBU ROTI'],
    dishes: [
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Plain Roti'), nameEn: 'Plain Roti', nameHi: 'सादी रोटी', price: 18, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'plain roti' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Butter Roti'), nameEn: 'Butter Roti', nameHi: 'मक्खन रोटी', price: 20, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'butter roti' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Plain Paratha'), nameEn: 'Plain Paratha', nameHi: 'साद पराठा', price: 32, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'plain paratha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Butter Paratha'), nameEn: 'Butter Paratha', nameHi: 'मक्खन पराठा', price: 37, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'butter paratha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Plain Naan'), nameEn: 'Plain Naan', nameHi: 'सादा नान', price: 37, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'plain naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Butter Naan'), nameEn: 'Butter Naan', nameHi: 'मक्खन नान', price: 47, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'butter naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Missi Roti'), nameEn: 'Missi Roti', nameHi: 'मिसी रोटी', price: 40, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'missi roti' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Garlic Naan'), nameEn: 'Garlic Naan', nameHi: 'लहसुन नान', price: 75, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'garlic naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Aloo Paratha'), nameEn: 'Aloo Paratha', nameHi: 'आलू पराठा', price: 65, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo paratha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Paneer Paratha'), nameEn: 'Paneer Paratha', nameHi: 'पनीर पराठा', price: 80, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer paratha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Onion Paratha'), nameEn: 'Onion Paratha', nameHi: 'प्याज पराठा', price: 52, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'onion paratha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Plain Kulcha'), nameEn: 'Plain Kulcha', nameHi: 'सादा कुल्छा', price: 42, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'plain kulcha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Butter Kulcha'), nameEn: 'Butter Kulcha', nameHi: 'मक्खन कुल्छा', price: 49, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'butter kulcha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Masala Kulcha'), nameEn: 'Masala Kulcha', nameHi: 'मसाला कुल्छा', price: 64, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala kulcha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Cheese Naan'), nameEn: 'Cheese Naan', nameHi: 'चीज नान', price: 87, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Cheese Garlic Naan'), nameEn: 'Cheese Garlic Naan', nameHi: 'चीज लहसुन नान', price: 95, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese garlic naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Cheese Paratha'), nameEn: 'Cheese Paratha', nameHi: 'चीज पराठा', price: 82, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese paratha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Lachha Paratha'), nameEn: 'Lachha Paratha', nameHi: 'लच्छा पराठा', price: 42, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'lachha paratha' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Chilly Garlic Naan'), nameEn: 'Chilly Garlic Naan', nameHi: 'चिल्ली लहसुन नान', price: 78, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'chilly garlic naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Chilly Naan'), nameEn: 'Chilly Naan', nameHi: 'चिल्ली नान', price: 52, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'chilly naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Stuff Naan'), nameEn: 'Stuff Naan', nameHi: 'स्टफ नान', price: 92, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'stuff naan' },
      { id: generateDishId(slugify('MITTI KI KHUSHBU ROTI'), 'Stuff Paratha'), nameEn: 'Stuff Paratha', nameHi: 'स्टफ पराठा', price: 84, category: slugify('MITTI KI KHUSHBU ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'stuff paratha' },
    ]
  },
  {
    id: slugify('TAVA ROTI'),
    nameEn: 'TAVA ROTI',
    nameHi: 'तवा रोटी',
    icon: CATEGORY_ICONS['TAVA ROTI'],
    dishes: [
      { id: generateDishId(slugify('TAVA ROTI'), 'Plain Tava Roti'), nameEn: 'Plain Tava Roti', nameHi: 'सादी तवा रोटी', price: 15, category: slugify('TAVA ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'plain tava roti' },
      { id: generateDishId(slugify('TAVA ROTI'), 'Butter Tava Roti'), nameEn: 'Butter Tava Roti', nameHi: 'मक्खन तवा रोटी', price: 20, category: slugify('TAVA ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'butter tava roti' },
      { id: generateDishId(slugify('TAVA ROTI'), 'Tava Paratha'), nameEn: 'Tava Paratha', nameHi: 'तवा पराठा', price: 40, category: slugify('TAVA ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'tava paratha' },
      { id: generateDishId(slugify('TAVA ROTI'), 'Makka Roti'), nameEn: 'Makka Roti', nameHi: 'मक्का रोटी', price: 50, category: slugify('TAVA ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'makka roti' },
      { id: generateDishId(slugify('TAVA ROTI'), 'Jawar Roti'), nameEn: 'Jawar Roti', nameHi: 'ज्वार रोटी', price: 50, category: slugify('TAVA ROTI'), imageUrl: '', isVegetarian: true, dataAiHint: 'jowar roti' },
    ]
  },
  {
    id: slugify('TOAST SANDWICH'),
    nameEn: 'TOAST SANDWICH',
    nameHi: 'टोस्ट सैंडविच',
    icon: CATEGORY_ICONS['TOAST SANDWICH'],
    dishes: [
      { id: generateDishId(slugify('TOAST SANDWICH'), 'Cheese Garlic Toast'), nameEn: 'Cheese Garlic Toast', nameHi: 'चीज गार्लिक टोस्ट', price: 97, category: slugify('TOAST SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese garlic toast' },
      { id: generateDishId(slugify('TOAST SANDWICH'), 'Cheese Chilly Toast'), nameEn: 'Cheese Chilly Toast', nameHi: 'चीज चिली टोस्ट', price: 87, category: slugify('TOAST SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese chilly toast' },
      { id: generateDishId(slugify('TOAST SANDWICH'), 'Bread Butter Toast'), nameEn: 'Bread Butter Toast', nameHi: 'ब्रेड बटर टोस्ट', price: 75, category: slugify('TOAST SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'bread butter toast' },
      { id: generateDishId(slugify('TOAST SANDWICH'), 'Peppy Paneer Toast'), nameEn: 'Peppy Paneer Toast', nameHi: 'पेपी पनीर टोस्ट', price: 95, category: slugify('TOAST SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer toast' },
      { id: generateDishId(slugify('TOAST SANDWICH'), 'Maxican Burst Toast'), nameEn: 'Maxican Burst Toast', nameHi: 'मेक्सिकन ब्रेड टोस्ट', price: 105, category: slugify('TOAST SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'mexican toast' },
      { id: generateDishId(slugify('TOAST SANDWICH'), 'Cheese Burst Toast'), nameEn: 'Cheese Burst Toast', nameHi: 'चीज ब्रेड टोस्ट', price: 100, category: slugify('TOAST SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese burst toast' },
      { id: generateDishId(slugify('TOAST SANDWICH'), 'Paneer Cheese Toast'), nameEn: 'Paneer Cheese Toast', nameHi: 'पनीर चीज टोस्ट', price: 107, category: slugify('TOAST SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer cheese toast' },
    ]
  },
  {
    id: slugify('BURGER'),
    nameEn: 'BURGER',
    nameHi: 'बर्गर',
    icon: CATEGORY_ICONS['BURGER'],
    dishes: [
      { id: generateDishId(slugify('BURGER'), 'S.P. Monto Burger'), nameEn: 'S.P. Monto Burger', nameHi: 'स्पेशल मोन्टो बर्गर', price: 97, category: slugify('BURGER'), imageUrl: '', isVegetarian: true, dataAiHint: 'monto burger' },
      { id: generateDishId(slugify('BURGER'), 'Veg Burger'), nameEn: 'Veg Burger', nameHi: 'वेज बर्गर', price: 82, category: slugify('BURGER'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg burger' },
      { id: generateDishId(slugify('BURGER'), 'Cheese Burger'), nameEn: 'Cheese Burger', nameHi: 'चीज बर्गर', price: 90, category: slugify('BURGER'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese burger' },
      { id: generateDishId(slugify('BURGER'), 'Aloo Tikki Burger'), nameEn: 'Aloo Tikki Burger', nameHi: 'आलू टिक्का बर्गर', price: 78, category: slugify('BURGER'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo tikki burger' },
      { id: generateDishId(slugify('BURGER'), 'Masala Burger'), nameEn: 'Masala Burger', nameHi: 'मसाला बर्गर', price: 75, category: slugify('BURGER'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala burger' },
    ]
  },
  {
    id: slugify('SIP-IN SODA'),
    nameEn: 'SIP-IN SODA',
    nameHi: 'सिप-इन सोडा',
    icon: CATEGORY_ICONS['SIP-IN SODA'],
    dishes: [
      { id: generateDishId(slugify('SIP-IN SODA'), 'Fresh Lemon Soda'), nameEn: 'Fresh Lemon Soda', nameHi: 'फ्रेश लेमन सोडा', price: 45, category: slugify('SIP-IN SODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'lemon soda' },
      { id: generateDishId(slugify('SIP-IN SODA'), 'Kala Khatta Lime Soda'), nameEn: 'Kala Khatta Lime Soda', nameHi: 'काला खटटा लाइम', price: 50, category: slugify('SIP-IN SODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'kala khatta' },
      { id: generateDishId(slugify('SIP-IN SODA'), 'Sweet Lime Soda'), nameEn: 'Sweet Lime Soda', nameHi: 'मीठा लाइम सोडा', price: 45, category: slugify('SIP-IN SODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'sweet lime soda' },
      { id: generateDishId(slugify('SIP-IN SODA'), 'Salt Lime Soda'), nameEn: 'Salt Lime Soda', nameHi: 'साल्ट लाइम सोडा', price: 45, category: slugify('SIP-IN SODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'salt lime soda' },
      { id: generateDishId(slugify('SIP-IN SODA'), 'Masala Lime Soda'), nameEn: 'Masala Lime Soda', nameHi: 'मसाला लाइम सोडा', price: 50, category: slugify('SIP-IN SODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala lime soda' },
      { id: generateDishId(slugify('SIP-IN SODA'), 'Jal Jeera Lime Soda'), nameEn: 'Jal Jeera Lime Soda', nameHi: 'जल जीरा लाइम सोडा', price: 50, category: slugify('SIP-IN SODA'), imageUrl: '', isVegetarian: true, dataAiHint: 'jaljeera soda' },
    ]
  },
  {
    id: slugify('PAV BHAJI'),
    nameEn: 'PAV BHAJI',
    nameHi: 'पाव भाजी',
    icon: CATEGORY_ICONS['PAV BHAJI'],
    dishes: [
      { id: generateDishId(slugify('PAV BHAJI'), 'S.P. Pav Bhaji'), nameEn: 'S.P. Pav Bhaji', nameHi: 'स्पेशल पाव भाजी', price: 165, category: slugify('PAV BHAJI'), imageUrl: '', isVegetarian: true, dataAiHint: 'special pav bhaji' },
      { id: generateDishId(slugify('PAV BHAJI'), 'Butter Bhaji'), nameEn: 'Butter Bhaji', nameHi: 'बटर भाजी', price: 155, category: slugify('PAV BHAJI'), imageUrl: '', isVegetarian: true, dataAiHint: 'butter pav bhaji' },
      { id: generateDishId(slugify('PAV BHAJI'), 'Jain Bhaji'), nameEn: 'Jain Bhaji', nameHi: 'जैन भाजी', price: 150, category: slugify('PAV BHAJI'), imageUrl: '', isVegetarian: true, dataAiHint: 'jain pav bhaji' },
      { id: generateDishId(slugify('PAV BHAJI'), 'Extra Pav'), nameEn: 'Extra Pav', nameHi: 'एक्स्ट्रा पाव', price: 15, category: slugify('PAV BHAJI'), imageUrl: '', isVegetarian: true, dataAiHint: 'extra pav' },
    ]
  },
  {
    id: slugify('PIZZA'),
    nameEn: 'PIZZA',
    nameHi: 'पिज्जा',
    icon: CATEGORY_ICONS['PIZZA'],
    dishes: [
      { id: generateDishId(slugify('PIZZA'), 'Special Monto Pizza'), nameEn: 'Special Monto Pizza', nameHi: 'स्पेशल मोन्टो पिज्जा', price: 220, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'monto pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Italian Pizza'), nameEn: 'Italian Pizza', nameHi: 'इटालियन पिज्जा', price: 170, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'italian pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Veg Pizza'), nameEn: 'Veg Pizza', nameHi: 'वेज पिज्जा', price: 160, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg pizza' },
      { id: generateDishId(slugify('PIZZA'), 'American Pizza'), nameEn: 'American Pizza', nameHi: 'अमेरिका पिज्जा', price: 165, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'american pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Indian Garden Pizza'), nameEn: 'Indian Garden Pizza', nameHi: 'इंडियन गार्डन पिज्जा', price: 175, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'indian garden pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Mushroom Pizza'), nameEn: 'Mushroom Pizza', nameHi: 'मशरूम पिज्जा', price: 168, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'mushroom pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Pineapple Pizza'), nameEn: 'Pineapple Pizza', nameHi: 'पाईनापल पिज्जा', price: 166, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'pineapple pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Paneer Pizza'), nameEn: 'Paneer Pizza', nameHi: 'पनीर पिज्जा', price: 180, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Onion Capsicum Pizza'), nameEn: 'Onion Capsicum Pizza', nameHi: 'ओनियन कैप्सिकम पिज्जा', price: 165, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'onion capsicum pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Continental Pizza'), nameEn: 'Continental Pizza', nameHi: 'कॉटिनेंटल पिज्जा', price: 160, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'continental pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Cheese Pizza'), nameEn: 'Cheese Pizza', nameHi: 'चीज पिज्जा', price: 155, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Corn Pizza'), nameEn: 'Corn Pizza', nameHi: 'कॉर्न पिज्जा', price: 168, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'corn pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Tango Chilly Pizza'), nameEn: 'Tango Chilly Pizza', nameHi: 'टेंगो चिल्ली पिज्जा', price: 165, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'chilly pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Onion Pizza'), nameEn: 'Onion Pizza', nameHi: 'ओनियन पिज्जा', price: 150, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'onion pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Simple Cheese Pizza'), nameEn: 'Simple Cheese Pizza', nameHi: 'सिंपल पिज्जा', price: 150, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'simple cheese pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Double Cheese Pizza'), nameEn: 'Double Cheese Pizza', nameHi: 'डबल चीज पिज्जा', price: 180, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'double cheese pizza' },
      { id: generateDishId(slugify('PIZZA'), 'Margherita Pizza'), nameEn: 'Margherita Pizza', nameHi: 'मारगरिटा पिज्जा', price: 155, category: slugify('PIZZA'), imageUrl: '', isVegetarian: true, dataAiHint: 'margherita pizza' },
    ]
  },
  {
    id: slugify('GRILL SANDWICH'),
    nameEn: 'GRILL SANDWICH',
    nameHi: 'ग्रिल सैंडविच',
    icon: CATEGORY_ICONS['GRILL SANDWICH'],
    dishes: [
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Veg Cheese Chocolate Grill Sandwich'), nameEn: 'Veg Cheese Chocolate Grill Sandwich', nameHi: 'वेज चीज चॉकलेट सैंडविच', price: 93, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese chocolate sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Garden Grill Sandwich'), nameEn: 'Garden Grill Sandwich', nameHi: 'गार्डन ग्रील सैंडविच', price: 97, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'garden grill sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'S.P. Club Grill Sandwich'), nameEn: 'S.P. Club Grill Sandwich', nameHi: 'स्पे. क्लब ग्रील सैंडविच', price: 155, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'club grill sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Aloo Mutter Grill Sandwich'), nameEn: 'Aloo Mutter Grill Sandwich', nameHi: 'आलू मटर ग्रील सैंडविच', price: 90, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo matar sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Masala Grill Sandwich'), nameEn: 'Masala Grill Sandwich', nameHi: 'मसाला ग्रील सैंडविच', price: 97, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala grill sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Indian Garden Grill Sandwich'), nameEn: 'Indian Garden Grill Sandwich', nameHi: 'इंडियन गार्डन ग्रील सैंडविच', price: 107, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'indian garden sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Veg Cheese Grill Sandwich'), nameEn: 'Veg Cheese Grill Sandwich', nameHi: 'वेज चीज सैंडविच', price: 93, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg cheese sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Maxican Grill Sandwich'), nameEn: 'Maxican Grill Sandwich', nameHi: 'मेक्सिकन ग्रील सैंडविच', price: 100, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'mexican grill sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Italian Grill Sandwich'), nameEn: 'Italian Grill Sandwich', nameHi: 'इटालियन ग्रील सैंडविच', price: 98, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'italian grill sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Cheese Grill Sandwich'), nameEn: 'Cheese Grill Sandwich', nameHi: 'चीज ग्रील सैंडविच', price: 95, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese grill sandwich' },
      { id: generateDishId(slugify('GRILL SANDWICH'), 'Cheese Masala Sandwich'), nameEn: 'Cheese Masala Sandwich', nameHi: 'चीज मसाला सैंडविच', price: 105, category: slugify('GRILL SANDWICH'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese masala sandwich' },
    ]
  },
  {
    id: slugify('PAPER DOSA'),
    nameEn: 'PAPER DOSA',
    nameHi: 'पेपर डोसा',
    icon: CATEGORY_ICONS['PAPER DOSA'],
    dishes: [
      { id: generateDishId(slugify('PAPER DOSA'), 'Ginger Paper'), nameEn: 'Ginger Paper', nameHi: 'जिंजर पेपर', price: 97, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'ginger paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Sada Paper'), nameEn: 'Sada Paper', nameHi: 'सादा पेपर', price: 95, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'sada paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Baby Paper'), nameEn: 'Baby Paper', nameHi: 'बेबी पेपर', price: 92, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'baby paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Jira Paper'), nameEn: 'Jira Paper', nameHi: 'जीरा पेपर', price: 95, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'jeera paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Garlic Paper'), nameEn: 'Garlic Paper', nameHi: 'गार्लिक पेपर', price: 135, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'garlic paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Masala Paper'), nameEn: 'Masala Paper', nameHi: 'मसाला पेपर', price: 150, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Chocolate Paper'), nameEn: 'Chocolate Paper', nameHi: 'चॉकलेट पेपर', price: 155, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'chocolate paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Cheese Paper'), nameEn: 'Cheese Paper', nameHi: 'चीज पेपर', price: 167, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Cheese Garlic Paper'), nameEn: 'Cheese Garlic Paper', nameHi: 'चीज गार्लिक पेपर', price: 177, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese garlic paper dosa' },
      { id: generateDishId(slugify('PAPER DOSA'), 'Paneer Cheese Paper'), nameEn: 'Paneer Cheese Paper', nameHi: 'पनीर चीज पेपर', price: 180, category: slugify('PAPER DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer cheese paper dosa' },
    ]
  },
  {
    id: slugify('SOUTH INDIAN FANCY DOSA'),
    nameEn: 'SOUTH INDIAN FANCY DOSA',
    nameHi: 'साउथ इंडियन फैंसी डोसा',
    icon: CATEGORY_ICONS['SOUTH INDIAN FANCY DOSA'],
    dishes: [
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Masala Dosa'), nameEn: 'Masala Dosa', nameHi: 'मसाला डोसा', price: 130, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Paneer Masala Dosa'), nameEn: 'Paneer Masala Dosa', nameHi: 'पनीर मसाला डोसा', price: 145, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer masala dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Cheese Masala Dosa'), nameEn: 'Cheese Masala Dosa', nameHi: 'चीज मसाला डोसा', price: 150, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese masala dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Aloo Palak Dosa'), nameEn: 'Aloo Palak Dosa', nameHi: 'आलू पालक डोसा', price: 128, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo palak dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Aloo Palak Cheese Masala Dosa'), nameEn: 'Aloo Palak Cheese Masala Dosa', nameHi: 'आलू पालक चीज मसाला डोसा', price: 155, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'aloo palak cheese dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Paneer Cheese Masala Dosa'), nameEn: 'Paneer Cheese Masala Dosa', nameHi: 'पनीर चीज मसाला डोसा', price: 165, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer cheese dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Mix Masala Dosa'), nameEn: 'Mix Masala Dosa', nameHi: 'मिक्स मसाला डोसा', price: 150, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'mix masala dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Monto S.P. Masala Dosa'), nameEn: 'Monto S.P. Masala Dosa', nameHi: 'मोन्टो स्पेशल मसाला डोसा', price: 200, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'monto special dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Jini Dosa'), nameEn: 'Jini Dosa', nameHi: 'जीनी डोसा', price: 180, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'jini roll dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Palak Paneer Dosa'), nameEn: 'Palak Paneer Dosa', nameHi: 'पालक पनीर डोसा', price: 152, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'palak paneer dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Palak Cheese Dosa'), nameEn: 'Palak Cheese Dosa', nameHi: 'पालक चीज डोसा', price: 162, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'palak cheese dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Palak Paneer Cheese Dosa'), nameEn: 'Palak Paneer Cheese Dosa', nameHi: 'पालक पनीर चीज डोसा', price: 170, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'palak paneer cheese dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Spring Roll Dosa'), nameEn: 'Spring Roll Dosa', nameHi: 'स्प्रिंग रोल डोसा', price: 165, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'spring roll dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Chinese Dosa'), nameEn: 'Chinese Dosa', nameHi: 'चाइनीज डोसा', price: 145, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'chinese dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Paneer Chilli Dosa'), nameEn: 'Paneer Chilli Dosa', nameHi: 'पनीर चिली डोसा', price: 147, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer chilli dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Onion Dosa'), nameEn: 'Onion Dosa', nameHi: 'ओनियन डोसा', price: 120, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'onion dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Pizza Dosa'), nameEn: 'Pizza Dosa', nameHi: 'पिज्जा डोसा', price: 195, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'pizza dosa' },
      { id: generateDishId(slugify('SOUTH INDIAN FANCY DOSA'), 'Sweet Corn Dosa'), nameEn: 'Sweet Corn Dosa', nameHi: 'स्वीट्स कोर्न डोसा', price: 175, category: slugify('SOUTH INDIAN FANCY DOSA'), imageUrl: '', isVegetarian: true, dataAiHint: 'sweet corn dosa' },
    ]
  },
  {
    id: slugify('UTTAPAM'),
    nameEn: 'UTTAPAM',
    nameHi: 'उत्तपम',
    icon: CATEGORY_ICONS['UTTAPAM'],
    dishes: [
      { id: generateDishId(slugify('UTTAPAM'), 'Sada Uttapam'), nameEn: 'Sada Uttapam', nameHi: 'सादा उत्तपम', price: 115, category: slugify('UTTAPAM'), imageUrl: '', isVegetarian: true, dataAiHint: 'sada uttapam' },
      { id: generateDishId(slugify('UTTAPAM'), 'Masala Uttapam'), nameEn: 'Masala Uttapam', nameHi: 'मसाला उत्तपम', price: 150, category: slugify('UTTAPAM'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala uttapam' },
      { id: generateDishId(slugify('UTTAPAM'), 'Tomato Uttapam'), nameEn: 'Tomato Uttapam', nameHi: 'टमाटर उत्तपम', price: 128, category: slugify('UTTAPAM'), imageUrl: '', isVegetarian: true, dataAiHint: 'tomato uttapam' },
      { id: generateDishId(slugify('UTTAPAM'), 'Onion Uttapam'), nameEn: 'Onion Uttapam', nameHi: 'प्याज उत्तपम', price: 138, category: slugify('UTTAPAM'), imageUrl: '', isVegetarian: true, dataAiHint: 'onion uttapam' },
      { id: generateDishId(slugify('UTTAPAM'), 'Capsicum Uttapam'), nameEn: 'Capsicum Uttapam', nameHi: 'केपसीकम उत्तपम', price: 138, category: slugify('UTTAPAM'), imageUrl: '', isVegetarian: true, dataAiHint: 'capsicum uttapam' },
      { id: generateDishId(slugify('UTTAPAM'), 'Onion Capsicum Uttapam'), nameEn: 'Onion Capsicum Uttapam', nameHi: 'प्याज केपसीकम उत्तपम', price: 148, category: slugify('UTTAPAM'), imageUrl: '', isVegetarian: true, dataAiHint: 'onion capsicum uttapam' },
      { id: generateDishId(slugify('UTTAPAM'), 'Mix Uttapam'), nameEn: 'Mix Uttapam', nameHi: 'मिक्स उत्तपम', price: 160, category: slugify('UTTAPAM'), imageUrl: '', isVegetarian: true, dataAiHint: 'mix uttapam' },
    ]
  },
  {
    id: slugify('Pasta'),
    nameEn: 'Pasta',
    nameHi: 'पास्ता',
    icon: CATEGORY_ICONS['Pasta'],
    dishes: [
      { id: generateDishId(slugify('Pasta'), 'Red Spicy Pasta'), nameEn: 'Red Spicy Pasta', nameHi: 'रेड स्पाइसी पास्ता', price: 195, category: slugify('Pasta'), imageUrl: '', isVegetarian: true, dataAiHint: 'red sauce pasta' },
      { id: generateDishId(slugify('Pasta'), 'Panner Pasta'), nameEn: 'Panner Pasta', nameHi: 'पनीर पास्ता', price: 199, category: slugify('Pasta'), imageUrl: '', isVegetarian: true, dataAiHint: 'paneer pasta' },
      { id: generateDishId(slugify('Pasta'), 'White Sauce Pasta'), nameEn: 'White Sauce Pasta', nameHi: 'व्हाइट सॉस पास्ता', price: 220, category: slugify('Pasta'), imageUrl: '', isVegetarian: true, dataAiHint: 'white sauce pasta' },
      { id: generateDishId(slugify('Pasta'), 'Chinese Pasta'), nameEn: 'Chinese Pasta', nameHi: 'चाइनीज पास्ता', price: 200, category: slugify('Pasta'), imageUrl: '', isVegetarian: true, dataAiHint: 'chinese pasta' },
    ]
  },
  {
    id: slugify('Baked Dish'),
    nameEn: 'Baked Dish',
    nameHi: 'बेक्ड डिश',
    icon: CATEGORY_ICONS['Baked Dish'],
    dishes: [
      { id: generateDishId(slugify('Baked Dish'), 'Baked Macaroni With Pineapple'), nameEn: 'Baked Macaroni With Pineapple', nameHi: 'बेक्ड मैकरोनी विद पाइनएप्पल', price: 220, category: slugify('Baked Dish'), imageUrl: '', isVegetarian: true, dataAiHint: 'baked macaroni' },
      { id: generateDishId(slugify('Baked Dish'), 'Baked Macaroni Without Pineapple'), nameEn: 'Baked Macaroni Without Pineapple', nameHi: 'बेक्ड मैकरोनी विदाउट पाइनएप्पल', price: 210, category: slugify('Baked Dish'), imageUrl: '', isVegetarian: true, dataAiHint: 'baked macaroni' },
    ]
  },
  {
    id: slugify('Maggi'),
    nameEn: 'Maggi',
    nameHi: 'मैगी',
    icon: CATEGORY_ICONS['Maggi'],
    dishes: [
      { id: generateDishId(slugify('Maggi'), 'Cheese Maggi'), nameEn: 'Cheese Maggi', nameHi: 'चीज मैगी', price: 120, category: slugify('Maggi'), imageUrl: '', isVegetarian: true, dataAiHint: 'cheese maggi' },
      { id: generateDishId(slugify('Maggi'), 'Masala Maggi'), nameEn: 'Masala Maggi', nameHi: 'मसाला मैगी', price: 110, category: slugify('Maggi'), imageUrl: '', isVegetarian: true, dataAiHint: 'masala maggi' },
      { id: generateDishId(slugify('Maggi'), 'Veg Maggi'), nameEn: 'Veg Maggi', nameHi: 'वेज मैगी', price: 100, category: slugify('Maggi'), imageUrl: '', isVegetarian: true, dataAiHint: 'veg maggi' },
    ]
  },
  {
    id: slugify('Brownie'),
    nameEn: 'Brownie',
    nameHi: 'ब्राउनी',
    icon: CATEGORY_ICONS['Brownie'],
    dishes: [
      { id: generateDishId(slugify('Brownie'), 'Sizzling Brownie With Ice Cream'), nameEn: 'Sizzling Brownie With Ice Cream', nameHi: 'सिजलिंग ब्राउनी विद आइसक्रीम', price: 149, category: slugify('Brownie'), imageUrl: '', isVegetarian: true, dataAiHint: 'sizzling brownie' },
      { id: generateDishId(slugify('Brownie'), 'Sizzling Brownie Without Ice Cream'), nameEn: 'Sizzling Brownie Without Ice Cream', nameHi: 'सिजलिंग ब्राउनी विदाउट आइसक्रीम', price: 125, category: slugify('Brownie'), imageUrl: '', isVegetarian: true, dataAiHint: 'sizzling brownie' },
    ]
  },
  {
    id: slugify('Momos'),
    nameEn: 'Momos',
    nameHi: 'मोमोज',
    icon: CATEGORY_ICONS['Momos'],
    dishes: [
      { id: generateDishId(slugify('Momos'), 'Veg Fry Momos (10 pcs)'), nameEn: 'Veg Fry Momos (10 pcs)', nameHi: 'वेज फ्राई मोमोज (10 पीस)', price: 190, category: slugify('Momos'), imageUrl: '', isVegetarian: true, dataAiHint: 'fried momos' },
      { id: generateDishId(slugify('Momos'), 'Steam Momos (10 pcs)'), nameEn: 'Steam Momos (10 pcs)', nameHi: 'स्टीम मोमोज (10 पीस)', price: 180, category: slugify('Momos'), imageUrl: '', isVegetarian: true, dataAiHint: 'steamed momos' },
    ]
  }
];

export const MOCK_MENU_DATA: MenuCategory[] = MOCK_MENU_DATA_TEMP.map(category => ({
    ...category,
    dishes: category.dishes.map(dish => ({
        ...dish,
        imageUrl: dish.imageUrl || PLACEHOLDER_IMAGE_URL,
    }))
}));

export const INR_CURRENCY_CODE = 'INR';
export const INR_SYMBOL = '₹';
    
