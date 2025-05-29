
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/layout/DashboardLayout';

const VendorAnalytics = () => {
  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Vendor Analytics</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Sales Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-500">
                Sales performance chart would go here
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Product Views</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center text-gray-500">
                Product views chart would go here
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Monthly Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>January 2024</span>
                  <span className="font-medium">$2,850</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>December 2023</span>
                  <span className="font-medium">$3,120</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>November 2023</span>
                  <span className="font-medium">$2,940</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Customer Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Total Customers</span>
                  <span className="font-medium">342</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Repeat Customers</span>
                  <span className="font-medium">126 (37%)</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Avg. Order Value</span>
                  <span className="font-medium">$89.50</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VendorAnalytics;
