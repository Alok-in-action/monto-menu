"use client";

import CheckoutForm from '@/components/checkout/CheckoutForm';
import BillSummary from '@/components/cart/BillSummary';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Checkout</h1>
        <p className="text-lg text-muted-foreground mt-2">Please provide your details to complete the order.</p>
      </header>

      <div className="mb-6 flex justify-between items-center">
          <Button asChild variant="link" className="text-muted-foreground hover:text-primary px-0">
              <Link href="/"><ArrowLeft className="mr-2 h-4 w-4" />Back to Menu</Link>
          </Button>
           <Button asChild variant="link" className="text-muted-foreground hover:text-primary px-0">
              <Link href="/cart">Back to Cart<ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
           <CheckoutForm />
        </div>
        <div className="md:col-span-1">
            <BillSummary isCheckoutPage={true} />
        </div>
      </div>
    </div>
  );
}
