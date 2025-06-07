
import OrderCard from '@/components/orders/OrderCard';
import { MOCK_ORDERS_DATA } from '@/lib/constants';
import type { OrderType } from '@/types';
import { ListOrdered } from 'lucide-react';

export default function OrdersPage() {
  // In a real app, this data would be fetched from a backend
  const orders: OrderType[] = MOCK_ORDERS_DATA.sort((a, b) => new Date(b.orderTime).getTime() - new Date(a.orderTime).getTime());

  return (
    <div className="container mx-auto py-8">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">Order Tracking</h1>
        <p className="text-lg text-muted-foreground mt-2">Current status of all orders</p>
      </header>

      {orders.length === 0 ? (
        <div className="text-center py-12">
          <ListOrdered className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
          <p className="text-xl text-muted-foreground">No active orders at the moment.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
}
