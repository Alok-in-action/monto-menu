
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { IndianRupee } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Separator } from '@/components/ui/separator';
import { INR_SYMBOL } from '@/lib/constants';
import Link from 'next/link';

// Updated tax rates
const CGST_RATE = 0.025; // 2.5%
const SGST_RATE = 0.025; // 2.5%
const PACKING_CHARGE_RATE = 0.05; // 5%

export default function BillSummary() {
  const { getCartTotal, clearCart } = useCart();
  const subtotal = getCartTotal();
  const packingCharges = subtotal * PACKING_CHARGE_RATE;
  const cgstAmount = subtotal * CGST_RATE;
  const sgstAmount = subtotal * SGST_RATE;
  const totalAmount = subtotal + packingCharges + cgstAmount + sgstAmount;

  return (
    <Card className="shadow-lg rounded-lg sticky top-24">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Bill Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="flex items-center"><IndianRupee className="h-4 w-4 mr-1" />{subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Packing Charges ({(PACKING_CHARGE_RATE * 100).toFixed(0)}%)</span>
          <span className="flex items-center"><IndianRupee className="h-4 w-4 mr-1" />{packingCharges.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>CGST ({(CGST_RATE * 100).toFixed(1)}%)</span>
          <span className="flex items-center"><IndianRupee className="h-4 w-4 mr-1" />{cgstAmount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>SGST ({(SGST_RATE * 100).toFixed(1)}%)</span>
          <span className="flex items-center"><IndianRupee className="h-4 w-4 mr-1" />{sgstAmount.toFixed(2)}</span>
        </div>
        <Separator />
        <div className="flex justify-between font-bold text-xl">
          <span>Grand Total</span>
          <span className="flex items-center text-primary"><IndianRupee className="h-5 w-5 mr-1" />{totalAmount.toFixed(2)}</span>
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-3">
        <Button 
            asChild
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" 
            disabled={subtotal === 0}
            aria-label="Proceed to checkout"
        >
          <Link href="/checkout">Proceed to Checkout</Link>
        </Button>
        <Button 
            variant="outline" 
            className="w-full" 
            onClick={clearCart}
            disabled={subtotal === 0}
            aria-label="Clear cart"
        >
            Clear Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
