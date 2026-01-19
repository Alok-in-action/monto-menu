
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 bg-card p-6 rounded-lg shadow">
            {cartItems.map((item) => (
              <CartItemRow key={item.id} item={item} />
            ))}
          </div>
          <div className="lg:col-span-1">
             <Card className="shadow-lg rounded-lg sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Your Bill</CardTitle>
                </CardHeader>
                <CardContent>
                    <BillSummary />
                </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
