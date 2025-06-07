import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/contexts/CartContext';
import SiteHeader from '@/components/layout/SiteHeader';
import { Separator } from '@/components/ui/separator'; // Added for visual separation

export const metadata: Metadata = {
  title: 'MONTO Restaurant',
  description: 'Delicious Indian cuisine, order online.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <CartProvider>
          <SiteHeader />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Toaster />
          <footer className="bg-muted/50 text-muted-foreground py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
              <p className="text-sm mb-2">
                Crafted by ALOK KHAMORA
              </p>
              <Separator className="my-2 w-24 mx-auto bg-border" />
              <p className="text-xs mb-1">
                Services: Web &amp; App Solutions
              </p>
              <p className="text-xs mb-1">
                Contact: <a href="tel:+917000703701" className="hover:text-primary">+91 7000703701</a>
              </p>
              <p className="text-xs">
                Website: Alok Khamora (Details coming soon)
              </p>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
