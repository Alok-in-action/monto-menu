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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

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

const TermsAndConditionsAccordion = () => (
    <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="terms-and-conditions" className="border-b-0">
        <AccordionTrigger className="py-3 text-base font-medium text-muted-foreground hover:no-underline hover:text-primary">
            नियम व शर्ते (T&C)
        </AccordionTrigger>
        <AccordionContent>
            <ul className="list-disc space-y-2.5 pl-5 text-sm text-muted-foreground mt-2">
                <li>Food पर 5% GST अलग से रहेगा।</li>
                <li>Food पर Room Service Charge 10% रहेगा।</li>
                <li>बिना GST बिल नही दिया जायेगा।</li>
                <li>रेस्टोरेन्ट स्टॉफ से बदत्तमीजी या अशब्द बोलने पर कानूनी कार्यवाही की जायेगी।</li>
                <li>रेस्टोरेन्ट में शोर मचाना व चिल्लाना सख्त मना है।</li>
                <li>मेन्यु ध्यान से पढ़ें व ऑर्डर देने के बाद ऑर्डर कैंसिल नही होगा।</li>
                <li>ऑर्डर देने के पश्चात 20 मिनीट का समय देना होगा।</li>
                <li>अगर आप रेस्टोरेन्ट सर्विस से संतुष्ठ नही है तो शिकायत करें लेकीन शांति एवं सही तरीके से।</li>
                <li className="font-semibold text-foreground/90 pt-1">धन्यवाद !!</li>
            </ul>
        </AccordionContent>
        </AccordionItem>
  </Accordion>
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
          <Image src="/file_0000000023f8622fad01a72af91b53fa.png" alt={`${APP_NAME} Logo`} width={40} height={40} className="h-10 w-10" />
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
              <SheetContent side="right" className="w-full max-w-xs p-6 flex flex-col">
                <div className="flex flex-col space-y-4 mt-6">
                 <NavLinks inSheet={true} />
                </div>
                <div className="mt-auto">
                    <Separator className="my-4"/>
                    <TermsAndConditionsAccordion />
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
