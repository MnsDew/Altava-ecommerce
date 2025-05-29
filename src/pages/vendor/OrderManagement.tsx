
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';

const mockVendorOrders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    product: 'Wireless Headphones',
    quantity: 1,
    total: 299.99,
    status: 'pending',
    date: '2024-01-20'
  },
  {
    id: 'ORD-002',
    customer: 'Jane Smith',
    product: 'Smart Watch',
    quantity: 2,
    total: 299.98,
    status: 'shipped',
    date: '2024-01-18'
  }
];

const OrderManagement = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    console.log('Updating order', orderId, 'to', newStatus);
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Order Management</h1>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockVendorOrders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-medium">Order {order.id}</h3>
                      <p className="text-sm text-gray-600">Customer: {order.customer}</p>
                      <p className="text-sm text-gray-600">Date: {order.date}</p>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(order.status)}>
                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                      </Badge>
                      <p className="text-lg font-bold mt-1">${order.total}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="font-medium">{order.product}</p>
                    <p className="text-sm text-gray-600">Quantity: {order.quantity}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    {order.status === 'pending' && (
                      <Button 
                        size="sm"
                        onClick={() => handleUpdateStatus(order.id, 'shipped')}
                      >
                        Mark as Shipped
                      </Button>
                    )}
                    {order.status === 'shipped' && (
                      <Button 
                        size="sm"
                        onClick={() => handleUpdateStatus(order.id, 'delivered')}
                      >
                        Mark as Delivered
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default OrderManagement;
