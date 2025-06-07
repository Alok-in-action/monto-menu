
"use client";

import Link from 'next/link';
import Image from 'next/image'; // Import next/image
import { ShoppingCart, ListOrdered } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CartIndicator from '@/components/cart/CartIndicator';
import { APP_NAME } from '@/lib/constants';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu as MenuIcon } from 'lucide-react';
import React from 'react';

const NavLinks = ({ inSheet = false }: { inSheet?: boolean }) => (
  <>
    <Button variant={inSheet ? "ghost" : "link"} asChild className={inSheet ? "w-full justify-start text-lg py-3" : "text-foreground hover:text-primary transition-colors"}>
      <Link href="/">Menu</Link>
    </Button>
    <Button variant={inSheet ? "ghost" : "link"} asChild className={inSheet ? "w-full justify-start text-lg py-3" : "text-foreground hover:text-primary transition-colors"}>
      <Link href="/cart">
        <ShoppingCart className="mr-2 h-4 w-4" /> Cart
      </Link>
    </Button>
    <Button variant={inSheet ? "ghost" : "link"} asChild className={inSheet ? "w-full justify-start text-lg py-3" : "text-foreground hover:text-primary transition-colors"}>
      <Link href="/orders">
        <ListOrdered className="mr-2 h-4 w-4" /> Orders
      </Link>
    </Button>
  </>
);


export default function SiteHeader() {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header 
      data-site-header="true" 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 h-16" // Ensure h-16 is here
    >
      <div className="container flex h-full items-center justify-between"> {/* Use h-full */}
        <Link href="/" className="flex items-center space-x-2 text-primary hover:opacity-80 transition-opacity">
          {/* Replace UtensilsCrossed icon with the Image component */}
          <Image src="/file_0000000023f8622fad01a72af91b53fa.png" alt={`${APP_NAME} Logo`} width={32} height={32} className="h-8 w-8" />
          <span className="font-headline font-bold text-2xl">{APP_NAME}</span>
        </Link>
        
        {isMobile ? (
          <div className="flex items-center gap-2">
            <CartIndicator />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs p-6">
                <div className="flex flex-col space-y-4 mt-6">
                 <NavLinks inSheet={true} />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className="flex items-center space-x-2 md:space-x-4">
            <NavLinks />
            <CartIndicator />
          </nav>
        )}
      </div>
    </header>
  );
}
