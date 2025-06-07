
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
  'Raita': Container, // Changed from Bowl to Container
  'Hot Time': CupSoda,
  'Khane se pehele time pass': Salad,
  'Chinese Hot Soup': Soup,
  'Milk Shake': Martini,
  Default: UtensilsCrossed,
};

const PLACEHOLDER_IMAGE_URL = 'https://placehold.co/600x400.png';

const slugify = (text: string) => text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');

const generateDataAiHint = (nameEn: string) => {
  return nameEn.split(' ').slice(0, 2).join(' ').toLowerCase();
};

export const MOCK_MENU_DATA: MenuCategory[] = [
  {
    id: 'south-indian-fancy-dosa',
    nameEn: 'South Indian Fancy Dosa',
    nameHi: 'South Indian Fancy Dosa', 
    icon: CATEGORY_ICONS['South Indian Fancy Dosa'],
    dishes: [
      { id: 'south-indian-fancy-dosa-masala-dosa', nameEn: 'Masala Dosa', nameHi: 'मसाला डोसा', price: 130, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Masala Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-paneer-masala-dosa', nameEn: 'Paneer Masala Dosa', nameHi: 'पनीर मसाला डोसा', price: 145, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Masala Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-cheese-masala-dosa', nameEn: 'Cheese Masala Dosa', nameHi: 'चीज मसाला डोसा', price: 150, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Masala Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-aloo-palak-dosa', nameEn: 'Aloo Palak Dosa', nameHi: 'आलू पालक डोसा', price: 128, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Aloo Palak Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-aloo-palak-cheese-masala-dosa', nameEn: 'Aloo Palak Cheese Masala Dosa', nameHi: 'आलू पालक चीज मसाला डोसा', price: 155, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Aloo Palak Cheese Masala Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-paneer-cheese-masala-dosa', nameEn: 'Paneer Cheese Masala Dosa', nameHi: 'पनीर चीज मसाला डोसा', price: 155, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Cheese Masala Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-mix-masala-dosa', nameEn: 'Mix Masala Dosa', nameHi: 'मिक्स मसाला डोसा', price: 140, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mix Masala Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-monto-sp-masala-dosa', nameEn: 'Monto S.P. Masala Dosa', nameHi: 'मोंटो स्पेशल मसाला डोसा', price: 200, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Monto S.P. Masala Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-jinirule-dosa', nameEn: 'Jinirule Dosa', nameHi: 'जिनिरोल डोसा', price: 180, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Jinirule Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-palak-paneer-dosa', nameEn: 'Palak Paneer Dosa', nameHi: 'पालक पनीर डोसा', price: 152, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Palak Paneer Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-palak-cheese-dosa', nameEn: 'Palak Cheese Dosa', nameHi: 'पालक चीज डोसा', price: 162, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Palak Cheese Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-palak-paneer-cheese-dosa', nameEn: 'Palak Paneer Cheese Dosa', nameHi: 'पालक पनीर चीज डोसा', price: 165, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Palak Paneer Cheese Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-spring-roll-dosa', nameEn: 'Spring Roll Dosa', nameHi: 'स्प्रिंग रोल डोसा', price: 165, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Spring Roll Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-chinese-dosa', nameEn: 'Chinese Dosa', nameHi: 'चाइनीज डोसा', price: 145, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chinese Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-rajarani-dosa', nameEn: 'Rajarani Dosa', nameHi: 'राजारानी डोसा', price: 155, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Rajarani Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-dilkhush-dosa', nameEn: 'Dilkhush Dosa', nameHi: 'दिलखुश डोसा', price: 150, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Dilkhush Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-paneer-chilli-dosa', nameEn: 'Paneer Chilli Dosa', nameHi: 'पनीर चिली डोसा', price: 147, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Chilli Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-onion-dosa', nameEn: 'Onion Dosa', nameHi: 'ओनियन डोसा', price: 150, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Onion Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-pizza-dosa', nameEn: 'Pizza Dosa', nameHi: 'पिज्जा डोसा', price: 195, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Pizza Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-meggie-dosa', nameEn: 'Meggie Dosa', nameHi: 'मेगी डोसा', price: 180, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Meggie Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-janak-payal-dosa', nameEn: 'Janak Payal Dosa', nameHi: 'जनक पायल डोसा', price: 175, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Janak Payal Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-sweet-corn-dosa', nameEn: 'Sweet Corn Dosa', nameHi: 'स्वीट कॉर्न डोसा', price: 175, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Sweet Corn Dosa'), isVegetarian: true },
      { id: 'south-indian-fancy-dosa-mkt-dosa', nameEn: 'M.K.T. Dosa', nameHi: 'एम.के.टी. डोसा', price: 200, category: 'South Indian Fancy Dosa', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('M.K.T. Dosa'), isVegetarian: true },
    ],
  },
  {
    id: 'mitti-ki-khushbu-roti',
    nameEn: 'Mitti Ki Khushbu Roti',
    nameHi: 'Mitti Ki Khushbu Roti',
    icon: CATEGORY_ICONS['Mitti Ki Khushbu Roti'],
    dishes: [
      { id: 'mitti-ki-khushbu-roti-plain-roti', nameEn: 'Plain Roti', nameHi: 'सादी रोटी', price: 18, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Plain Roti'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-butter-roti', nameEn: 'Butter Roti', nameHi: 'मक्खन रोटी', price: 20, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Butter Roti'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-plain-paratha', nameEn: 'Plain Paratha', nameHi: 'सादा पराठा', price: 30, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Plain Paratha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-butter-paratha', nameEn: 'Butter Paratha', nameHi: 'मक्खन पराठा', price: 35, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Butter Paratha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-plain-naan', nameEn: 'Plain Naan', nameHi: 'सादा नान', price: 35, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Plain Naan'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-butter-naan', nameEn: 'Butter Naan', nameHi: 'मक्खन नान', price: 45, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Butter Naan'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-missi-roti', nameEn: 'Missi Roti', nameHi: 'मिस्सी रोटी', price: 38, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Missi Roti'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-onion-paratha', nameEn: 'Onion Paratha', nameHi: 'प्याज पराठा', price: 50, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Onion Paratha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-plain-kulcha', nameEn: 'Plain Kulcha', nameHi: 'सादा कुलचा', price: 40, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Plain Kulcha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-butter-kulcha', nameEn: 'Butter Kulcha', nameHi: 'मक्खन कुलचा', price: 47, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Butter Kulcha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-masala-kulcha', nameEn: 'Masala Kulcha', nameHi: 'मसाला कुलचा', price: 62, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Masala Kulcha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-cheese-naan', nameEn: 'Cheese Naan', nameHi: 'चीज नान', price: 68, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Naan'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-cheese-garlic-naan', nameEn: 'Cheese Garlic Naan', nameHi: 'चीज गार्लिक नान', price: 78, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Garlic Naan'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-cheese-paratha', nameEn: 'Cheese Paratha', nameHi: 'चीज पराठा', price: 68, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Paratha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-lachha-paratha', nameEn: 'Lachha Paratha', nameHi: 'लच्छा पराठा', price: 50, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Lachha Paratha'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-chilly-garlic-naan', nameEn: 'Chilly Garlic Naan', nameHi: 'चिली गार्लिक नान', price: 78, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chilly Garlic Naan'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-chilly-naan', nameEn: 'Chilly Naan', nameHi: 'चिली नान', price: 78, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chilly Naan'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-stuff-naan', nameEn: 'Stuff Naan', nameHi: 'स्टफ नान', price: 88, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Stuff Naan'), isVegetarian: true },
      { id: 'mitti-ki-khushbu-roti-stuff-paratha', nameEn: 'Stuff Paratha', nameHi: 'स्टफ पराठा', price: 88, category: 'Mitti Ki Khushbu Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Stuff Paratha'), isVegetarian: true },
    ]
  },
  {
    id: 'tava-roti',
    nameEn: 'Tava Roti',
    nameHi: 'Tava Roti',
    icon: CATEGORY_ICONS['Tava Roti'],
    dishes: [
      { id: 'tava-roti-plain-tava-roti', nameEn: 'Plain Tava Roti', nameHi: 'सादी तवा रोटी', price: 15, category: 'Tava Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Plain Tava Roti'), isVegetarian: true },
      { id: 'tava-roti-butter-tava-roti', nameEn: 'Butter Tava Roti', nameHi: 'मक्खन तवा रोटी', price: 20, category: 'Tava Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Butter Tava Roti'), isVegetarian: true },
      { id: 'tava-roti-tava-paratha', nameEn: 'Tava Paratha', nameHi: 'तवा पराठा', price: 40, category: 'Tava Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Tava Paratha'), isVegetarian: true },
      { id: 'tava-roti-makka-roti', nameEn: 'Makka Roti', nameHi: 'मक्का रोटी', price: 50, category: 'Tava Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Makka Roti'), isVegetarian: true },
      { id: 'tava-roti-jawar-roti', nameEn: 'Jawar Roti', nameHi: 'ज्वार रोटी', price: 50, category: 'Tava Roti', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Jawar Roti'), isVegetarian: true },
    ]
  },
  {
    id: 'punjab-ka-dhamaka',
    nameEn: 'Punjab Ka Dhamaka',
    nameHi: 'Punjab Ka Dhamaka',
    icon: CATEGORY_ICONS['Punjab Ka Dhamaka'],
    dishes: [
      { id: 'punjab-ka-dhamaka-special-veg-monto', nameEn: 'Special Veg Monto', nameHi: 'स्पेशल वेज मोंटो', price: 225, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Special Veg Monto'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-angara', nameEn: 'Veg Angara', nameHi: 'वेज अंगारा', price: 185, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Angara'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-tawa', nameEn: 'Veg Tawa', nameHi: 'वेज तवा', price: 165, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Tawa'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-lajawab', nameEn: 'Veg Lajawab', nameHi: 'वेज लाजवाब', price: 165, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Lajawab'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-kheema', nameEn: 'Veg Kheema', nameHi: 'वेज कीमा', price: 165, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Kheema'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-handi', nameEn: 'Veg Handi', nameHi: 'वेज हांडी', price: 145, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Handi'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-kadai', nameEn: 'Veg Kadai', nameHi: 'वेज कढ़ाई', price: 140, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Kadai'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-hyderabadi', nameEn: 'Veg Hyderabadi', nameHi: 'वेज हैदराबादी', price: 140, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Hyderabadi'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-makhanwala', nameEn: 'Veg Makhanwala', nameHi: 'वेज मक्खनवाला', price: 130, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Makhanwala'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-kolhapuri', nameEn: 'Veg Kolhapuri', nameHi: 'वेज कोल्हापुरी', price: 140, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Kolhapuri'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-jaipuri', nameEn: 'Veg Jaipuri', nameHi: 'वेज जयपुरी', price: 140, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Jaipuri'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-jawala-mukhi', nameEn: 'Veg Jawala Mukhi', nameHi: 'वेज ज्वालामुखी', price: 175, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Jawala Mukhi'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-veg-shilsila', nameEn: 'Veg Shilsila', nameHi: 'वेज सिलसिला', price: 170, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Shilsila'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-aloo-mutter', nameEn: 'Aloo Mutter', nameHi: 'आलू मटर', price: 105, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Aloo Mutter'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-aloo-palak', nameEn: 'Aloo Palak', nameHi: 'आलू पालक', price: 100, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Aloo Palak'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-chana-masala', nameEn: 'Chana Masala', nameHi: 'चना मसाला', price: 110, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chana Masala'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-mix-veg', nameEn: 'Mix Veg', nameHi: 'मिक्स वेज', price: 110, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mix Veg'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-plain-palak', nameEn: 'Plain Palak', nameHi: 'प्लेन पालक', price: 95, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Plain Palak'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-lasaniya-aloo', nameEn: 'Lasaniya Aloo', nameHi: 'लसनिया आलू', price: 110, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Lasaniya Aloo'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-sev-tamatar', nameEn: 'Sev Tamatar', nameHi: 'सेव टमाटर', price: 110, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Sev Tamatar'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-navaratan-korma-sweet', nameEn: 'Navaratan Korma (Sweet)', nameHi: 'नवरतन कोरमा', price: 180, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Navaratan Korma'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-sev-bhaji', nameEn: 'Sev Bhaji', nameHi: 'सेव भाजी', price: 115, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Sev Bhaji'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-dum-aloo', nameEn: 'Dum Aloo', nameHi: 'दम आलू', price: 200, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Dum Aloo'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-dahi-tikhari', nameEn: 'Dahi Tikhari', nameHi: 'दही तीखारी', price: 160, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Dahi Tikhari'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-aloo-do-pyaja', nameEn: 'Aloo do Pyaja', nameHi: 'आलू दो प्याजा', price: 195, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Aloo do Pyaja'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-save-masala', nameEn: 'Save Masala', nameHi: 'सेव मसाला', price: 110, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Save Masala'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-mashroom-masala', nameEn: 'Mashroom Masala', nameHi: 'मशरूम मसाला', price: 195, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mashroom Masala'), isVegetarian: true },
      { id: 'punjab-ka-dhamaka-mathi-malai-matter', nameEn: 'Mathi Malai Matter', nameHi: 'मेथी मलाई मटर', price: 210, category: 'Punjab Ka Dhamaka', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mathi Malai Matter'), isVegetarian: true },
    ]
  },
  {
    id: 'chinese-starters',
    nameEn: 'Chinese Starters',
    nameHi: 'Chinese Starters',
    icon: CATEGORY_ICONS['Chinese Starters'],
    dishes: [
      { id: 'chinese-starters-veg-crispy', nameEn: 'Veg Crispy', nameHi: 'वेज क्रिस्पी', price: 200, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Crispy'), isVegetarian: true },
      { id: 'chinese-starters-paneer-chilly-gravy', nameEn: 'Paneer Chilly Gravy', nameHi: 'पनीर चिली ग्रेवी', price: 250, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Chilly Gravy'), isVegetarian: true },
      { id: 'chinese-starters-paneer-chilly-dry', nameEn: 'Paneer Chilly Dry', nameHi: 'पनीर चिली ड्राय', price: 225, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Chilly Dry'), isVegetarian: true },
      { id: 'chinese-starters-paneer-rocket', nameEn: 'Paneer Rocket', nameHi: 'पनीर रॉकेट', price: 210, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Rocket'), isVegetarian: true },
      { id: 'chinese-starters-paneer-crispy', nameEn: 'Paneer Crispy', nameHi: 'पनीर क्रिस्पी', price: 225, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Crispy'), isVegetarian: true },
      { id: 'chinese-starters-paneer-65', nameEn: 'Paneer 65', nameHi: 'पनीर 65', price: 220, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer 65'), isVegetarian: true },
      { id: 'chinese-starters-veg-65', nameEn: 'Veg 65', nameHi: 'वेज 65', price: 200, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg 65'), isVegetarian: true },
      { id: 'chinese-starters-veg-lollipop', nameEn: 'Veg Lollipop', nameHi: 'वेज लॉलीपॉप', price: 180, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Lollipop'), isVegetarian: true },
      { id: 'chinese-starters-veg-manchurian-dry', nameEn: 'Veg Manchurian Dry', nameHi: 'वेज मंचूरियन ड्राय', price: 155, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Manchurian Dry'), isVegetarian: true },
      { id: 'chinese-starters-manchurian-gravy', nameEn: 'Manchurian Gravy', nameHi: 'मंचूरियन ग्रेवी', price: 155, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Manchurian Gravy'), isVegetarian: true },
      { id: 'chinese-starters-dragon-potato', nameEn: 'Dragon Potato', nameHi: 'ड्रैगन पोटैटो', price: 155, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Dragon Potato'), isVegetarian: true },
      { id: 'chinese-starters-baby-corn-chilly-dry', nameEn: 'Baby Corn Chilly Dry', nameHi: 'बेबी कॉर्न चिली ड्राय', price: 210, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Baby Corn Chilly Dry'), isVegetarian: true },
      { id: 'chinese-starters-mushroom-chilly-dry', nameEn: 'Mushroom Chilly Dry', nameHi: 'मशरूम चिली ड्राय', price: 210, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mushroom Chilly Dry'), isVegetarian: true },
      { id: 'chinese-starters-veg-spring-roll', nameEn: 'Veg Spring Roll', nameHi: 'वेज स्प्रिंग रोल', price: 190, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Spring Roll'), isVegetarian: true },
      { id: 'chinese-starters-veg-chowmein', nameEn: 'Veg Chowmein', nameHi: 'वेज चाउमिन', price: 150, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Chowmein'), isVegetarian: true },
      { id: 'chinese-starters-american-chopsuey-sweet', nameEn: 'American Chopsuey (Sweet)', nameHi: 'अमेरिकन चॉप्सी स्वीट', price: 180, category: 'Chinese Starters', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('American Chopsuey'), isVegetarian: true },
    ]
  },
  {
    id: 'tandoor-starter',
    nameEn: 'Tandoor Starter',
    nameHi: 'Tandoor Starter',
    icon: CATEGORY_ICONS['Tandoor Starter'],
    dishes: [
      { id: 'tandoor-starter-paneer-barah-tikka-dry', nameEn: 'Paneer Barah Tikka Dry', nameHi: 'पनीर बारह टिक्का ड्राय', price: 270, category: 'Tandoor Starter', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Barah Tikka'), isVegetarian: true },
      { id: 'tandoor-starter-paneer-tikka-dry', nameEn: 'Paneer Tikka Dry', nameHi: 'पनीर टिक्का ड्राय', price: 250, category: 'Tandoor Starter', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Tikka Dry'), isVegetarian: true },
      { id: 'tandoor-starter-paneer-haryali-tikka-dry', nameEn: 'Paneer Haryali Tikka Dry', nameHi: 'पनीर हरियाली टिक्का ड्राय', price: 230, category: 'Tandoor Starter', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Haryali Tikka'), isVegetarian: true },
      { id: 'tandoor-starter-harabhara-kabab', nameEn: 'Harabhara Kabab', nameHi: 'हराभरा कबाब', price: 215, category: 'Tandoor Starter', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Harabhara Kabab'), isVegetarian: true },
      { id: 'tandoor-starter-raja-kabab', nameEn: 'Raja Kabab', nameHi: 'राजा कबाब', price: 190, category: 'Tandoor Starter', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Raja Kabab'), isVegetarian: true },
      { id: 'tandoor-starter-achari-tikka-dry', nameEn: 'Achari Tikka Dry', nameHi: 'अचारी टिक्का ड्राय', price: 240, category: 'Tandoor Starter', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Achari Tikka Dry'), isVegetarian: true },
    ]
  },
  {
    id: 'paneer-ka-kamal',
    nameEn: 'Paneer Ka Kamal',
    nameHi: 'Paneer Ka Kamal',
    icon: CATEGORY_ICONS['Paneer Ka Kamal'],
    dishes: [
      { id: 'paneer-ka-kamal-special-paneer-monto', nameEn: 'Special Paneer Monto', nameHi: 'स्पेशल पनीर मोंटो', price: 275, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Special Paneer Monto'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-takatak', nameEn: 'Paneer Takatak', nameHi: 'पनीर टकाटक', price: 225, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Takatak'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-rustom', nameEn: 'Paneer Rustom', nameHi: 'पनीर रुस्तम', price: 225, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Rustom'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-lababdar', nameEn: 'Paneer Lababdar', nameHi: 'पनीर लबाबदार', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Lababdar'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-punjabi', nameEn: 'Paneer Punjabi', nameHi: 'पनीर पंजाबी', price: 215, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Punjabi'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-angara', nameEn: 'Paneer Angara', nameHi: 'पनीर अंगारा', price: 200, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Angara'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-tawa', nameEn: 'Paneer Tawa', nameHi: 'पनीर तवा', price: 200, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Tawa'), isVegetarian: true },
      { id: 'paneer-ka-kamal-matar-paneer', nameEn: 'Matar Paneer', nameHi: 'मटर पनीर', price: 195, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Matar Paneer'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-handi', nameEn: 'Paneer Handi', nameHi: 'पनीर हांडी', price: 195, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Handi'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-kadai', nameEn: 'Paneer Kadai', nameHi: 'पनीर कढ़ाई', price: 205, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Kadai'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-patiala', nameEn: 'Paneer Patiala', nameHi: 'पनीर पटियाला', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Patiala'), isVegetarian: true },
      { id: 'paneer-ka-kamal-shahi-paneer', nameEn: 'Shahi Paneer', nameHi: 'शाही पनीर', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Shahi Paneer'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-chatpata', nameEn: 'Paneer Chatpata', nameHi: 'पनीर चटपटा', price: 200, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Chatpata'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-diwani-handi', nameEn: 'Paneer Diwani Handi', nameHi: 'पनीर दीवानी हांडी', price: 200, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Diwani Handi'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-lasuniya', nameEn: 'Paneer Lasuniya', nameHi: 'पनीर लसनिया', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Lasuniya'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-tikka-masala', nameEn: 'Paneer Tikka Masala', nameHi: 'पनीर टिक्का मसाला', price: 220, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Tikka Masala'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-bhurji', nameEn: 'Paneer Bhurji', nameHi: 'पनीर भुर्जी', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Bhurji'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-toofani', nameEn: 'Paneer Toofani', nameHi: 'पनीर तूफानी', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Toofani'), isVegetarian: true },
      { id: 'paneer-ka-kamal-palak-paneer', nameEn: 'Palak Paneer', nameHi: 'पालक पनीर', price: 175, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Palak Paneer'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-kurma', nameEn: 'Paneer Kurma', nameHi: 'पनीर कूर्मा', price: 195, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Kurma'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-butter-masala', nameEn: 'Paneer Butter Masala', nameHi: 'पनीर बटर मसाला', price: 220, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Butter Masala'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-kkt', nameEn: 'Paneer K.K.T', nameHi: 'पनीर के.के.टी.', price: 270, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer K.K.T'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-bahubali', nameEn: 'Paneer Bahubali', nameHi: 'पनीर बाहुबली', price: 190, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Bahubali'), isVegetarian: true },
      { id: 'paneer-ka-kamal-chula-paneer', nameEn: 'Chula Paneer', nameHi: 'चुला पनीर', price: 240, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chula Paneer'), isVegetarian: true },
      { id: 'paneer-ka-kamal-paneer-do-pyaja', nameEn: 'Paneer do Pyaja', nameHi: 'पनीर दो प्याजा', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer do Pyaja'), isVegetarian: true },
      { id: 'paneer-ka-kamal-mashroom-paneer', nameEn: 'Mashroom Paneer', nameHi: 'मशरूम पनीर', price: 210, category: 'Paneer Ka Kamal', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mashroom Paneer'), isVegetarian: true },
    ]
  },
  {
    id: 'kaju-ka-khajana',
    nameEn: 'Kaju Ka Khajana',
    nameHi: 'Kaju Ka Khajana',
    icon: CATEGORY_ICONS['Kaju Ka Khajana'],
    dishes: [
      { id: 'kaju-ka-khajana-fry-kaju-kasturi-methi', nameEn: 'Fry Kaju Kasturi Methi', nameHi: 'फ्राय काजू कसूरी मेथी', price: 225, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Fry Kaju Kasturi Methi'), isVegetarian: true },
      { id: 'kaju-ka-khajana-fry-kaju-handi', nameEn: 'Fry Kaju Handi', nameHi: 'फ्राय काजू हांडी', price: 210, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Fry Kaju Handi'), isVegetarian: true },
      { id: 'kaju-ka-khajana-kaju-cheese-paneer-masala', nameEn: 'Kaju Cheese Paneer Masala', nameHi: 'काजू चीज पनीर मसाला', price: 245, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kaju Cheese Paneer Masala'), isVegetarian: true },
      { id: 'kaju-ka-khajana-kaju-cheese-masala', nameEn: 'Kaju Cheese Masala', nameHi: 'काजू चीज मसाला', price: 210, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kaju Cheese Masala'), isVegetarian: true },
      { id: 'kaju-ka-khajana-kaju-curry', nameEn: 'Kaju Curry', nameHi: 'काजू करी', price: 200, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kaju Curry'), isVegetarian: true },
      { id: 'kaju-ka-khajana-kaju-butter-masala', nameEn: 'Kaju Butter Masala', nameHi: 'काजू बटर मसाला', price: 220, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kaju Butter Masala'), isVegetarian: true },
      { id: 'kaju-ka-khajana-kaju-masala', nameEn: 'Kaju Masala', nameHi: 'काजू मसाला', price: 195, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kaju Masala'), isVegetarian: true },
      { id: 'kaju-ka-khajana-cheese-paneer-masala', nameEn: 'Cheese Paneer Masala', nameHi: 'चीज पनीर मसाला', price: 210, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Paneer Masala'), isVegetarian: true },
      { id: 'kaju-ka-khajana-cheese-butter-masala', nameEn: 'Cheese Butter Masala', nameHi: 'चीज बटर मसाला', price: 220, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Butter Masala'), isVegetarian: true },
      { id: 'kaju-ka-khajana-khaya-kaju', nameEn: 'Khaya Kaju', nameHi: 'खाया काजू', price: 210, category: 'Kaju Ka Khajana', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Khaya Kaju'), isVegetarian: true },
    ]
  },
  {
    id: 'kofta',
    nameEn: 'Kofta',
    nameHi: 'Kofta',
    icon: CATEGORY_ICONS['Kofta'],
    dishes: [
      { id: 'kofta-veg-kofta', nameEn: 'Veg Kofta', nameHi: 'वेज कोफ्ता', price: 175, category: 'Kofta', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Kofta'), isVegetarian: true },
      { id: 'kofta-paneer-kofta', nameEn: 'Paneer Kofta', nameHi: 'पनीर कोफ्ता', price: 195, category: 'Kofta', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Kofta'), isVegetarian: true },
      { id: 'kofta-nargish-kofta', nameEn: 'Nargish Kofta', nameHi: 'नरगिश कोफ्ता', price: 180, category: 'Kofta', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Nargish Kofta'), isVegetarian: true },
      { id: 'kofta-kaju-kofta', nameEn: 'Kaju Kofta', nameHi: 'काजू कोफ्ता', price: 200, category: 'Kofta', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kaju Kofta'), isVegetarian: true },
      { id: 'kofta-tiranga-kofta', nameEn: 'Tiranga Kofta', nameHi: 'तिरंगा कोफ्ता', price: 215, category: 'Kofta', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Tiranga Kofta'), isVegetarian: true },
      { id: 'kofta-malai-kofta', nameEn: 'Malai Kofta', nameHi: 'मलाई कोफ्ता', price: 190, category: 'Kofta', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Malai Kofta'), isVegetarian: true },
      { id: 'kofta-kashmiri-kofta-sweet', nameEn: 'Kashmiri Kofta (Sweet)', nameHi: 'कश्मीरी कोफ्ता', price: 195, category: 'Kofta', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kashmiri Kofta'), isVegetarian: true },
    ]
  },
  {
    id: 'chinese-main-course',
    nameEn: 'Chinese Main Course',
    nameHi: 'Chinese Main Course',
    icon: CATEGORY_ICONS['Chinese Main Course'],
    dishes: [
      { id: 'chinese-main-course-veg-hakka-noodles', nameEn: 'Veg Hakka Noodles', nameHi: 'वेज हक्का नूडल्स', price: 130, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Hakka Noodles'), isVegetarian: true },
      { id: 'chinese-main-course-veg-schezwan-noodles', nameEn: 'Veg Schezwan Noodles', nameHi: 'वेज शेजवान नूडल्स', price: 135, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Schezwan Noodles'), isVegetarian: true },
      { id: 'chinese-main-course-veg-chilli-noodles', nameEn: 'Veg Chilli Noodles', nameHi: 'वेज चिली नूडल्स', price: 135, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Chilli Noodles'), isVegetarian: true },
      { id: 'chinese-main-course-veg-manchurian-rice', nameEn: 'Veg Manchurian Rice', nameHi: 'वेज मंचूरियन राइस', price: 140, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Manchurian Rice'), isVegetarian: true },
      { id: 'chinese-main-course-veg-schezwan-rice', nameEn: 'Veg Schezwan Rice', nameHi: 'वेज शेजवान राइस', price: 140, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Schezwan Rice'), isVegetarian: true },
      { id: 'chinese-main-course-chinese-bhel', nameEn: 'Chinese Bhel', nameHi: 'चाइनीज भेल', price: 105, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chinese Bhel'), isVegetarian: true },
      { id: 'chinese-main-course-triple-fried-rice', nameEn: 'Triple Fried Rice', nameHi: 'ट्रिपल फ्राइड राइस', price: 145, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Triple Fried Rice'), isVegetarian: true },
      { id: 'chinese-main-course-noodles-fried-rice', nameEn: 'Noodles + Fried Rice', nameHi: 'नूडल्स + फ्राइड राइस', price: 140, category: 'Chinese Main Course', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Noodles Fried Rice'), isVegetarian: true },
    ]
  },
  {
    id: 'chinese-sizzler',
    nameEn: 'Chinese Sizzler',
    nameHi: 'Chinese Sizzler',
    icon: CATEGORY_ICONS['Chinese Sizzler'],
    dishes: [
      { id: 'chinese-sizzler-special-noodle-sizzler', nameEn: 'Special Noodle Sizzler', nameHi: 'स्पेशल नूडल सिजलर', price: 500, category: 'Chinese Sizzler', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Special Noodle Sizzler'), isVegetarian: true },
      { id: 'chinese-sizzler-fried-rice-sizzler', nameEn: 'Fried Rice Sizzler', nameHi: 'फ्राइड राइस सिजलर', price: 300, category: 'Chinese Sizzler', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Fried Rice Sizzler'), isVegetarian: true },
      { id: 'chinese-sizzler-veg-sizzler', nameEn: 'Veg Sizzler', nameHi: 'वेज सिजलर', price: 301, category: 'Chinese Sizzler', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Sizzler'), isVegetarian: true },
      { id: 'chinese-sizzler-chinese-sizzler', nameEn: 'Chinese Sizzler', nameHi: 'चाइनीज सिजलर', price: 305, category: 'Chinese Sizzler', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chinese Sizzler'), isVegetarian: true },
    ]
  },
  {
    id: 'mini-starters-pakoda',
    nameEn: 'Mini/Starters Pakoda',
    nameHi: 'Mini/Starters Pakoda',
    icon: CATEGORY_ICONS['Mini/Starters Pakoda'],
    dishes: [
      { id: 'mini-starters-pakoda-crispy-corn', nameEn: 'Crispy Corn', nameHi: 'क्रिस्पी कॉर्न', price: 105, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Crispy Corn'), isVegetarian: true },
      { id: 'mini-starters-pakoda-chana-roast', nameEn: 'Chana Roast', nameHi: 'चना रोस्ट', price: 120, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chana Roast'), isVegetarian: true },
      { id: 'mini-starters-pakoda-french-finger-fry', nameEn: 'French Finger Fry', nameHi: 'फ्रेंच फिंगर फ्राय', price: 120, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('French Finger Fry'), isVegetarian: true },
      { id: 'mini-starters-pakoda-veg-pakoda', nameEn: 'Veg Pakoda', nameHi: 'वेज पकोड़ा', price: 105, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Pakoda'), isVegetarian: true },
      { id: 'mini-starters-pakoda-paneer-pakoda', nameEn: 'Paneer Pakoda', nameHi: 'पनीर पकोड़ा', price: 120, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Paneer Pakoda'), isVegetarian: true },
      { id: 'mini-starters-pakoda-chilli-pakoda', nameEn: 'Chilli Pakoda', nameHi: 'चिली पकोड़ा', price: 110, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chilli Pakoda'), isVegetarian: true },
      { id: 'mini-starters-pakoda-corn-pakoda', nameEn: 'Corn Pakoda', nameHi: 'कॉर्न पकोड़ा', price: 110, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Corn Pakoda'), isVegetarian: true },
      { id: 'mini-starters-pakoda-cheese-pakoda', nameEn: 'Cheese Pakoda', nameHi: 'चीज पकोड़ा', price: 120, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Pakoda'), isVegetarian: true },
      { id: 'mini-starters-pakoda-ex-bhajue', nameEn: 'Ex. Bhajue', nameHi: 'एक्स. भजुए', price: 20, category: 'Mini/Starters Pakoda', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Ex. Bhajue'), isVegetarian: true },
    ]
  },
  {
    id: 'raita',
    nameEn: 'Raita',
    nameHi: 'Raita',
    icon: CATEGORY_ICONS['Raita'],
    dishes: [
      { id: 'raita-fruit-raita', nameEn: 'Fruit Raita', nameHi: 'फ्रूट रायता', price: 75, category: 'Raita', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Fruit Raita'), isVegetarian: true },
      { id: 'raita-pineapple-raita', nameEn: 'Pineapple Raita', nameHi: 'पाइनएप्पल रायता', price: 65, category: 'Raita', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Pineapple Raita'), isVegetarian: true },
      { id: 'raita-veg-boondi-raita', nameEn: 'Veg Boondi Raita', nameHi: 'वेज बूंदी रायता', price: 60, category: 'Raita', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Boondi Raita'), isVegetarian: true },
      { id: 'raita-boondi-raita', nameEn: 'Boondi Raita', nameHi: 'बूंदी रायता', price: 60, category: 'Raita', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Boondi Raita'), isVegetarian: true },
    ]
  },
  {
    id: 'hot-time',
    nameEn: 'Hot Time',
    nameHi: 'Hot Time',
    icon: CATEGORY_ICONS['Hot Time'],
    dishes: [
      { id: 'hot-time-mithi-lassi', nameEn: 'Mithi Lassi', nameHi: 'मीठी लस्सी', price: 88, category: 'Hot Time', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mithi Lassi'), isVegetarian: true },
      { id: 'hot-time-salted-lassi', nameEn: 'Salted Lassi', nameHi: 'नमकीन लस्सी', price: 88, category: 'Hot Time', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Salted Lassi'), isVegetarian: true },
      { id: 'hot-time-butter-milk', nameEn: 'Butter Milk', nameHi: 'मसाला छाछ', price: 60, category: 'Hot Time', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Butter Milk'), isVegetarian: true },
      { id: 'hot-time-ms-milk', nameEn: 'Ms Milk', nameHi: 'एमएस मिल्क', price: 100, category: 'Hot Time', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Ms Milk'), isVegetarian: true },
    ]
  },
  {
    id: 'khane-se-pehele-time-pass',
    nameEn: 'Khane se pehele time pass',
    nameHi: 'Khane se pehele time pass',
    icon: CATEGORY_ICONS['Khane se pehele time pass'],
    dishes: [
      { id: 'khane-se-pehele-time-pass-cheese-masala-papad', nameEn: 'Cheese Masala Papad', nameHi: 'चीज मसाला पापड़', price: 45, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Masala Papad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-roasted-papad', nameEn: 'Roasted Papad', nameHi: 'रॉस्टेड पापड़', price: 20, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Roasted Papad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-roasted-masala-papad', nameEn: 'Roasted Masala Papad', nameHi: 'रॉस्टेड मसाला पापड़', price: 25, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Roasted Masala Papad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-fry-papad', nameEn: 'Fry Papad', nameHi: 'फ्राय पापड़', price: 35, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Fry Papad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-fry-masala-papad', nameEn: 'Fry Masala Papad', nameHi: 'फ्राय मसाला पापड़', price: 45, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Fry Masala Papad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-green-salad', nameEn: 'Green Salad', nameHi: 'ग्रीन सलाद', price: 50, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Green Salad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-tomato-salad', nameEn: 'Tomato Salad', nameHi: 'टमाटर सलाद', price: 50, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Tomato Salad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-cucumber-salad', nameEn: 'Cucumber Salad', nameHi: 'ककड़ी सलाद', price: 55, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cucumber Salad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-cucumber-tomato-salad', nameEn: 'Cucumber Tomato Salad', nameHi: 'ककड़ी टमाटर सलाद', price: 52, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cucumber Tomato Salad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-kachumar-salad', nameEn: 'Kachumar Salad', nameHi: 'कचूमर सलाद', price: 55, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Kachumar Salad'), isVegetarian: true },
      { id: 'khane-se-pehele-time-pass-onion-salad', nameEn: 'Onion Salad', nameHi: 'प्याज सलाद', price: 50, category: 'Khane se pehele time pass', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Onion Salad'), isVegetarian: true },
    ]
  },
  {
    id: 'chinese-hot-soup',
    nameEn: 'Chinese Hot Soup',
    nameHi: 'Chinese Hot Soup',
    icon: CATEGORY_ICONS['Chinese Hot Soup'],
    dishes: [
      { id: 'chinese-hot-soup-veg-hot-sour-soup', nameEn: 'Veg Hot & Sour Soup', nameHi: 'वेज हॉट एंड सॉर सूप', price: 105, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Hot Sour Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-veg-manchow-soup', nameEn: 'Veg Manchow Soup', nameHi: 'वेज मंचौ सूप', price: 103, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Manchow Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-veg-manchurian-soup', nameEn: 'Veg Manchurian Soup', nameHi: 'वेज मंचूरियन सूप', price: 95, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Manchurian Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-lemon-coriander-soup', nameEn: 'Lemon Coriander Soup', nameHi: 'लेमन कोरिएंडर सूप', price: 95, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Lemon Coriander Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-noodles-soup', nameEn: 'Noodles Soup', nameHi: 'नूडल्स सूप', price: 95, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Noodles Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-cheese-corn-tomato-soup', nameEn: 'Cheese Corn Tomato Soup', nameHi: 'चीज कॉर्न टमाटर सूप', price: 92, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cheese Corn Tomato Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-minestrone-soup', nameEn: 'Minestrone Soup', nameHi: 'मिनेस्ट्रोन सूप', price: 95, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Minestrone Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-veg-sweet-corn-soup', nameEn: 'Veg Sweet Corn Soup', nameHi: 'वेज स्वीट कॉर्न सूप', price: 95, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Veg Sweet Corn Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-tomato-soup', nameEn: 'Tomato Soup', nameHi: 'टमाटर सूप', price: 95, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Tomato Soup'), isVegetarian: true },
      { id: 'chinese-hot-soup-green-iceland-soup', nameEn: 'Green Iceland Soup', nameHi: 'ग्रीन आइसलैंड सूप', price: 95, category: 'Chinese Hot Soup', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Green Iceland Soup'), isVegetarian: true },
    ]
  },
  {
    id: 'milk-shake',
    nameEn: 'Milk Shake',
    nameHi: 'Milk Shake',
    icon: CATEGORY_ICONS['Milk Shake'],
    dishes: [
      { id: 'milk-shake-vanilla-milk-shake', nameEn: 'Vanilla Milk Shake', nameHi: 'वनीला मिल्क शेक', price: 80, category: 'Milk Shake', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Vanilla Milk Shake'), isVegetarian: true },
      { id: 'milk-shake-strawberry-milk-shake', nameEn: 'Strawberry Milk Shake', nameHi: 'स्ट्रॉबेरी मिल्क शेक', price: 92, category: 'Milk Shake', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Strawberry Milk Shake'), isVegetarian: true },
      { id: 'milk-shake-mango-milk-shake', nameEn: 'Mango Milk Shake', nameHi: 'मैंगो मिल्क शेक', price: 95, category: 'Milk Shake', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Mango Milk Shake'), isVegetarian: true },
      { id: 'milk-shake-butter-scotch-milk-shake', nameEn: 'Butter Scotch Milk Shake', nameHi: 'बटर स्कॉच मिल्क शेक', price: 90, category: 'Milk Shake', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Butter Scotch Milk Shake'), isVegetarian: true },
      { id: 'milk-shake-chocolate-milk-shake', nameEn: 'Chocolate Milk Shake', nameHi: 'चॉकलेट मिल्क शेक', price: 100, category: 'Milk Shake', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Chocolate Milk Shake'), isVegetarian: true },
      { id: 'milk-shake-oreo-milk-shake', nameEn: 'Oreo Milk Shake', nameHi: 'ओरियो मिल्क शेक', price: 100, category: 'Milk Shake', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Oreo Milk Shake'), isVegetarian: true },
      { id: 'milk-shake-cold-coffee', nameEn: 'Cold Coffee', nameHi: 'कोल्ड कॉफी', price: 80, category: 'Milk Shake', imageUrl: PLACEHOLDER_IMAGE_URL, dataAiHint: generateDataAiHint('Cold Coffee'), isVegetarian: true },
    ]
  },
];


// Find specific dishes for mock orders - ensuring they exist in the new MOCK_MENU_DATA
const findDish = (categoryId: string, dishIdSuffix: string): Dish | undefined => {
  const category = MOCK_MENU_DATA.find(cat => cat.id === categoryId);
  if (!category) return undefined;
  return category.dishes.find(dish => dish.id === `${categoryId}-${dishIdSuffix}`);
};

const mockDish1 = findDish('south-indian-fancy-dosa', 'masala-dosa');
const mockDish2 = findDish('paneer-ka-kamal', 'paneer-butter-masala');
const mockDish3 = findDish('chinese-main-course', 'veg-hakka-noodles');
const mockDish4 = findDish('chinese-hot-soup', 'veg-manchow-soup');
const mockDish5 = findDish('mitti-ki-khushbu-roti', 'butter-naan');


export const MOCK_ORDERS_DATA: OrderType[] = [
  ...(mockDish1 && mockDish2 ? [{
    id: 'order1_new',
    items: [
      { ...mockDish1, quantity: 2 },
      { ...mockDish2, quantity: 1 },
    ],
    totalAmount: (mockDish1.price * 2) + mockDish2.price,
    tableNumber: '3B',
    customerName: 'Ms. Priya',
    status: 'Preparing' as OrderType['status'],
    orderTime: new Date(Date.now() - 15 * 60 * 1000), 
  }] : []),
  ...(mockDish3 && mockDish4 && mockDish5 ? [{
    id: 'order2_new',
    items: [
      { ...mockDish3, quantity: 1 },
      { ...mockDish4, quantity: 1 },
      { ...mockDish5, quantity: 4 },
    ],
    totalAmount: mockDish3.price + mockDish4.price + (mockDish5.price * 4),
    tableNumber: '8A',
    customerName: 'Mr. Rahul',
    status: 'Pending' as OrderType['status'],
    orderTime: new Date(Date.now() - 5 * 60 * 1000), 
  }] : []),
  ...(mockDish1 && mockDish5 ? [{
    id: 'order3_new',
    items: [
      { ...mockDish1, quantity: 1 },
      { ...mockDish5, quantity: 2 },
    ],
    totalAmount: mockDish1.price + (mockDish5.price * 2),
    tableNumber: 'Garden 1',
    customerName: 'Family Verma',
    status: 'Ready' as OrderType['status'],
    orderTime: new Date(Date.now() - 30 * 60 * 1000), 
  }] : []),
];


export const INR_CURRENCY_CODE = 'INR';
export const INR_SYMBOL = '₹';

    
