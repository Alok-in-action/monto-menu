
"use client";

import type { OrderType } from '@/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { IndianRupee, User, Table, CalendarDays, RefreshCw, CheckCircle, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { INR_SYMBOL } from '@/lib/constants';
import { format } from 'date-fns';

interface OrderCardProps {
  order: OrderType;
}

const statusIcons: { [key in OrderType['status']]: React.ElementType } = {
  Pending: AlertTriangle,
  Preparing: RefreshCw,
  Ready: CheckCircle,
  Served: CheckCircle,
};

const statusColors: { [key in OrderType['status']]: string } = {
  Pending: 'bg-yellow-500',
  Preparing: 'bg-blue-500 animate-spin', // Added animate-spin for Preparing
  Ready: 'bg-green-500',
  Served: 'bg-gray-500',
};


export default function OrderCard({ order }: OrderCardProps) {
  const StatusIcon = statusIcons[order.status];
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <CardHeader className="bg-muted/50 p-4">
        <div className="flex justify-between items-center">
          <CardTitle className="font-headline text-xl text-primary">Order #{order.id.slice(-6).toUpperCase()}</CardTitle>
          <Badge variant="outline" className={`text-white ${statusColors[order.status]}`}>
            <StatusIcon className="h-4 w-4 mr-2" />
            {order.status}
          </Badge>
        </div>
        <CardDescription className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs mt-1">
          <span className="flex items-center"><User className="h-3 w-3 mr-1" />{order.customerName}</span>
          <span className="flex items-center"><Table className="h-3 w-3 mr-1" />Table: {order.tableNumber}</span>
          <span className="flex items-center"><CalendarDays className="h-3 w-3 mr-1" />{format(new Date(order.orderTime), "PPpp")}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <h4 className="font-semibold mb-2">Items:</h4>
        <ul className="space-y-1 text-sm list-disc list-inside text-muted-foreground">
          {order.items.map((item) => (
            <li key={item.id}>
              {item.nameEn} (x{item.quantity}) - <span className="flex items-center inline-flex"><IndianRupee className="h-3 w-3 mr-0.5" />{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="bg-muted/50 p-4">
        <div className="flex justify-between items-center w-full">
          <span className="font-semibold text-lg">Total:</span>
          <span className="font-bold text-xl text-primary flex items-center">
            <IndianRupee className="h-5 w-5 mr-1" />
            {order.totalAmount.toFixed(2)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
