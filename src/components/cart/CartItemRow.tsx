
"use client";

import Image from 'next/image';
import type { CartItemType } from '@/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { IndianRupee, Plus, Minus, Trash2, Leaf, Fish } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { INR_SYMBOL } from '@/lib/constants';

interface CartItemRowProps {
  item: CartItemType;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateItemQuantity, removeItemFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateItemQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-4 border-b">
      <div className="flex items-center space-x-4 mb-4 sm:mb-0">
        {item.imageUrl && (
          <div className="relative w-20 h-20 rounded-md overflow-hidden">
            <Image src={item.imageUrl} alt={item.nameEn} layout="fill" objectFit="cover" data-ai-hint={item.dataAiHint || "food item"}/>
          </div>
        )}
        <div>
          <h3 className="font-semibold text-lg">{item.nameEn}</h3>
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
      </div>

      <div className="flex items-center space-x-2 sm:space-x-4">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity - 1)} disabled={item.quantity <= 1} aria-label={`Decrease quantity of ${item.nameEn}`}>
            <Minus className="h-4 w-4" />
          </Button>
          <Input
            type="number"
            value={item.quantity}
            onChange={(e) => handleQuantityChange(parseInt(e.target.value, 10))}
            className="w-16 text-center"
            min="1"
            aria-label={`Quantity of ${item.nameEn}`}
          />
          <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.quantity + 1)} aria-label={`Increase quantity of ${item.nameEn}`}>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
        <div className="flex items-center font-semibold text-lg w-24 justify-end">
          <IndianRupee className="h-5 w-5 mr-1" />
          {(item.price * item.quantity).toFixed(2)}
        </div>
        <Button variant="ghost" size="icon" onClick={() => removeItemFromCart(item.id)} className="text-destructive hover:text-destructive/80" aria-label={`Remove ${item.nameEn} from cart`}>
          <Trash2 className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
