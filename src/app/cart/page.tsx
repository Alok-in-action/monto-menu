
"use client";

import { useCart } from '@/hooks/useCart';
import CartItemRow from '@/components/cart/CartItemRow';
import BillSummary from '@/components/cart/BillSummary';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Your Shopping Cart</h1>
      </header>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
          <p className="text-xl text-muted-foreground mb-4">Your cart is empty.</p>
          <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/">Start Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <Card className="lg:col-span-2 shadow-lg rounded-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Your Items</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y">
                        {cartItems.map((item) => (
                            <div className="px-6" key={item.id}>
                                <CartItemRow item={item} />
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="lg:col-span-1">
                <BillSummary />
            </div>
        </div>
      )}
    </div>
  );
}
