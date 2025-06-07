export interface Dish {
  id: string;
  nameEn: string;
  nameHi: string;
  price: number;
  category: string;
  description?: string;
  imageUrl?: string;
  isVegetarian?: boolean;
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

export interface OrderType {
  id: string;
  items: CartItemType[];
  totalAmount: number;
  tableNumber: string;
  customerName: string;
  status: 'Pending' | 'Preparing' | 'Ready' | 'Served';
  orderTime: Date;
}
