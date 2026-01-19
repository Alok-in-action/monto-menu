"use client";

import type { Dish } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, Leaf, Fish, PlusCircle, Check } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { cn } from '@/lib/utils';

interface MenuItemCardProps {
  dish: Dish;
}

export default function MenuItemCard({ dish }: MenuItemCardProps) {
  const { addItemToCart, isItemInCart } = useCart();
  const isInCart = isItemInCart(dish.id);

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <CardHeader className="pb-2 pt-4">
        <CardTitle className="font-headline text-xl md:text-2xl">{dish.nameEn}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">{dish.nameHi}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {dish.description && <p className="text-sm text-muted-foreground mb-2">{dish.description}</p>}
        <div className="flex items-center justify-between text-lg font-semibold text-primary">
          <div className="flex items-center">
            <IndianRupee className="h-5 w-5 mr-1" />
            <span>{dish.price.toFixed(2)}</span>
          </div>
          {dish.isVegetarian !== undefined && (
            dish.isVegetarian ? 
            <Leaf className="h-5 w-5 text-green-600" title="Vegetarian" /> : 
            <Fish className="h-5 w-5 text-red-600" title="Non-Vegetarian" />
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant={isInCart ? "secondary" : "default"}
          className={cn("w-full", !isInCart && "bg-accent hover:bg-accent/90 text-accent-foreground")}
          onClick={() => addItemToCart(dish)}
          disabled={isInCart}
          aria-label={isInCart ? `${dish.nameEn} is in your cart` : `Add ${dish.nameEn} to cart`}
        >
          {isInCart ? <Check className="mr-2 h-5 w-5" /> : <PlusCircle className="mr-2 h-5 w-5" />}
          {isInCart ? 'Added' : 'Add'}
        </Button>
      </CardFooter>
    </Card>
  );
}
