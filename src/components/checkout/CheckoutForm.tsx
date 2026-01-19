
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { INR_SYMBOL } from '@/lib/constants';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  phone: z.string().regex(/^\d{10}$/, { message: 'Please enter a valid 10-digit phone number.' }),
  address: z.string().min(10, { message: 'Address must be at least 10 characters.' }),
  landmark: z.string().optional(),
  specialInstructions: z.string().optional(),
  paymentMethod: z.enum(['cod', 'online'], { required_error: 'Please select a payment method.' }),
});

type CheckoutFormValues = z.infer<typeof formSchema>;

// Tax rates
const CGST_RATE = 0.025;
const SGST_RATE = 0.025;
const PACKING_CHARGE_RATE = 0.05; // 5%

export default function CheckoutForm() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      address: '',
      landmark: '',
      specialInstructions: '',
      paymentMethod: 'cod',
    },
  });

  const paymentMethod = form.watch('paymentMethod');

  const onSubmit = (data: CheckoutFormValues) => {
    setIsSubmitting(true);

    const subtotal = getCartTotal();
    if (subtotal === 0) {
      toast({
        variant: 'destructive',
        title: 'Your cart is empty',
        description: 'Please add items to your cart before placing an order.',
      });
      setIsSubmitting(false);
      return;
    }
    const packingCharges = subtotal * PACKING_CHARGE_RATE;
    const cgstAmount = subtotal * CGST_RATE;
    const sgstAmount = subtotal * SGST_RATE;
    const totalAmount = subtotal + packingCharges + cgstAmount + sgstAmount;

    // 1. Format order items
    const orderItemsText = cartItems
      .map(
        (item) =>
          `- ${item.nameEn} (${item.quantity} x ${INR_SYMBOL}${item.price.toFixed(2)}) = ${INR_SYMBOL}${(
            item.quantity * item.price
          ).toFixed(2)}`
      )
      .join('\n');

    // 2. Construct the full message
    const message = `🎉 *New Online Order from Website!* 🎉

*Customer Details:*
👤 *Name:* ${data.name}
📞 *Phone:* ${data.phone}
🏠 *Address:* ${data.address}
📍 *Landmark:* ${data.landmark || 'Not provided'}
📝 *Instructions:* ${data.specialInstructions || 'None'}

---

*Order Summary:*
${orderItemsText}

---

*Bill Details:*
Subtotal: ${INR_SYMBOL}${subtotal.toFixed(2)}
Packing Charges (5%): ${INR_SYMBOL}${packingCharges.toFixed(2)}
CGST (2.5%): ${INR_SYMBOL}${cgstAmount.toFixed(2)}
SGST (2.5%): ${INR_SYMBOL}${sgstAmount.toFixed(2)}
*Grand Total: ${INR_SYMBOL}${totalAmount.toFixed(2)}*

---

*Payment Method:*
💳 ${data.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Online (QR)'}
`;

    // 3. Encode and create WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '917770888407'; // Ensure country code is present
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // 4. Open WhatsApp and give feedback
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Redirecting to WhatsApp...',
      description: "Your order details are ready. Please send the message in WhatsApp to confirm.",
    });

    // 5. Clear cart and reset form after a short delay
    setTimeout(() => {
      clearCart();
      form.reset();
      setIsSubmitting(false);
       toast({
        title: 'Order Submitted!',
        description: "We will contact you shortly to confirm your order.",
      });
    }, 3000);
  };

  return (
    <Card className="shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary">Delivery & Payment</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-4">
               <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>10-digit Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="9876543210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Address</FormLabel>
                    <FormControl>
                      <Textarea placeholder="123, Main Street, Your City, 123456" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="landmark"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Landmark (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Near the old post office" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <FormField
                control={form.control}
                name="specialInstructions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Special Instructions (Optional)</FormLabel>
                    <FormControl>
                      <Textarea placeholder="e.g., Make it extra spicy, no onions" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-lg font-semibold">Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-2"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 has-[:checked]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="cod" />
                        </FormControl>
                        <FormLabel className="font-normal w-full cursor-pointer">
                          Cash on Delivery
                        </FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0 rounded-md border p-4 has-[:checked]:border-primary">
                        <FormControl>
                          <RadioGroupItem value="online" />
                        </FormControl>
                         <FormLabel className="font-normal w-full cursor-pointer">
                          Pay Online (via QR Code)
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {paymentMethod === 'online' && (
              <div className="p-4 border-2 border-dashed rounded-lg text-center bg-muted/50">
                <h3 className="font-semibold mb-2">Scan to Pay</h3>
                <p className="text-sm text-muted-foreground mb-4">Please scan the QR code with your UPI app, and send us a screenshot on WhatsApp along with the order message.</p>
                <Image
                  src="https://placehold.co/250x250.png?text=Scan+to+Pay"
                  alt="Payment QR Code"
                  width={250}
                  height={250}
                  className="mx-auto rounded-md shadow"
                />
              </div>
            )}
            
            <Button type="submit" disabled={isSubmitting || cartItems.length === 0} className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              {isSubmitting ? 'Placing Order...' : 'Place Order & Send on WhatsApp'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
