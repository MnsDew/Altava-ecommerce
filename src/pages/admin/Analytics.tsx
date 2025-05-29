
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/layout/DashboardLayout';

const Analytics = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-500">
                Sales chart would go here
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-500">
                User growth chart would go here
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Products</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Wireless Headphones</span>
                  <span className="font-medium">$15,230</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Smart Watch</span>
                  <span className="font-medium">$12,450</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Laptop Stand</span>
                  <span className="font-medium">$8,960</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Product Sales</span>
                  <span className="font-medium">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Shipping Fees</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Other</span>
                  <span className="font-medium">5%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
