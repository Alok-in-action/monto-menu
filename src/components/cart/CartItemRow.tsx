"use client";

import type { CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IndianRupee, Plus, Minus, Trash2, Leaf, Fish } from 'lucide-react';
import { useCart } from '@/hooks/useCart';

interface CartItemRowProps {
  item: CartItemType;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateItemQuantity, removeItemFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateItemQuantity(item.id, newQuantity);
  };

  return (
    <div className="py-4">
      {/* Item details & Remove button */}
      <div className="flex justify-between items-start gap-4">
        <div>
          <h3 className="font-semibold text-lg leading-tight">{item.nameEn}</h3>
          <p className="text-sm text-muted-foreground">{item.nameHi}</p>
          <div className="flex items-center text-sm text-primary mt-1">
            <IndianRupee className="h-4 w-4 mr-1" />
            <span>{item.price.toFixed(2)}</span>
            {item.isVegetarian !== undefined && (
              item.isVegetarian ? 
              <Leaf className="h-4 w-4 text-green-500 ml-2" title="Vegetarian" /> : 
              <Fish className="h-4 w-4 text-red-500 ml-2" title="Non-Vegetarian" />
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => removeItemFromCart(item.id)} className="text-destructive hover:text-destructive/80 flex-shrink-0 -mr-2 -mt-1" aria-label={`Remove ${item.nameEn} from cart`}>
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
      
      {/* Quantity Controls & Total Price */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1} aria-label={`Decrease quantity of ${item.nameEn}`}>
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            readOnly
            className="w-16 text-center h-10"
            min="1"
            aria-label={`Quantity of ${item.nameEn}`}
          />
          <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)} aria-label={`Increase quantity of ${item.nameEn}`}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center font-semibold text-lg">
          <IndianRupee className="h-5 w-5 mr-1" />
          {(item.price * item.quantity).toFixed(2)}
        </div>
      </div>
    </div>
  );
}
