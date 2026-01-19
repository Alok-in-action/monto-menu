
export interface Dish {
  id: string;
  nameEn: string;
  nameHi: string;
  price: number;
  category: string;
  description?: string;
  imageUrl?: string;
  isVegetarian?: boolean;
  dataAiHint?: string; // Added for AI image hints
}

export interface MenuCategory {
  id: string;
  nameEn: string;
  nameHi: string;
  dishes: Dish[];
  icon?: React.ElementType;
}

export interface CartItemType extends Dish {
  quantity: number;
}
