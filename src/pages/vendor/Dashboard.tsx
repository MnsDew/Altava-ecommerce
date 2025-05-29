
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import DashboardLayout from '@/components/layout/DashboardLayout';

const VendorDashboard = () => {
  const { t } = useLanguage();
  
  const stats = [
    { title: t('vendor.totalProducts'), value: '42', icon: Package, change: '+3 this week' },
    { title: t('vendor.orders'), value: '128', icon: ShoppingBag, change: '+12 this week' },
    { title: t('admin.revenue'), value: '$3,240', icon: DollarSign, change: '+18% this month' },
    { title: t('vendor.conversion'), value: '3.2%', icon: TrendingUp, change: '+0.5% this week' }
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('vendor.dashboard')}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.title} className="animate-slide-in-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-600">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-orange-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-green-600">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="animate-slide-in-left animation-delay-400 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900">{t('vendor.recentOrders')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">Order #ORD-001</p>
                    <p className="text-sm text-gray-600">Wireless Headphones</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$299.99</p>
                    <p className="text-sm text-green-600">Completed</p>
                  </div>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <div>
                    <p className="font-medium text-gray-900">Order #ORD-002</p>
                    <p className="text-sm text-gray-600">Smart Watch</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">$149.99</p>
                    <p className="text-sm text-blue-600">Processing</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-right animation-delay-600 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900">{t('vendor.topProducts')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <span className="text-gray-700">Wireless Headphones</span>
                  <span className="font-medium text-gray-900">23 sold</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <span className="text-gray-700">Smart Watch</span>
                  <span className="font-medium text-gray-900">18 sold</span>
                </div>
                <div className="flex justify-between items-center p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <span className="text-gray-700">Laptop Stand</span>
                  <span className="font-medium text-gray-900">15 sold</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default VendorDashboard;
