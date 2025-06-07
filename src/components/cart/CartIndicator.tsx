
"use client";

import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function CartIndicator() {
  const { getCartItemCount } = useCart();
  const itemCount = getCartItemCount();

  return (
    <Link href="/cart" className="relative flex items-center p-2 text-foreground hover:text-primary transition-colors" aria-label={`View cart with ${itemCount} items`}>
      <ShoppingCart className="h-6 w-6" />
      {itemCount > 0 && (
        <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs rounded-full bg-accent text-accent-foreground">
          {itemCount}
        </Badge>
      )}
    </Link>
  );
}
