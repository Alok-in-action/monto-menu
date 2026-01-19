"use client";

import CheckoutForm from '@/components/checkout/CheckoutForm';
import BillSummary from '@/components/cart/BillSummary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Checkout</h1>
        <p className="text-lg text-muted-foreground mt-2">Please provide your details to complete the order.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
           <CheckoutForm />
        </div>
        <div className="lg:col-span-1">
            <Card className="shadow-lg rounded-lg sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl text-primary">Your Final Bill</CardTitle>
                </CardHeader>
                <CardContent>
                    <BillSummary />
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
