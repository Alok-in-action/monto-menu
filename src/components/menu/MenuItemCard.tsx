
"use client";

import type { Dish } from '@/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, Leaf, Fish, PlusCircle } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { INR_SYMBOL, PLACEHOLDER_IMAGE_URL } from '@/lib/constants';
import Image from 'next/image';

interface MenuItemCardProps {
  dish: Dish;
}

export default function MenuItemCard({ dish }: MenuItemCardProps) {
  const { addItemToCart } = useCart();

  return (
    <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
      <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
        <Image
          src={dish.imageUrl || PLACEHOLDER_IMAGE_URL}
          alt={dish.nameEn}
          layout="fill"
          objectFit="cover"
          data-ai-hint={dish.dataAiHint || "food item"}
        />
      </div>
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
          variant="default" 
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
          onClick={() => addItemToCart(dish)}
          aria-label={`Add ${dish.nameEn} to cart`}
        >
          <PlusCircle className="mr-2 h-5 w-5" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
}
