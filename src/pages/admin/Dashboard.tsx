
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, ShoppingBag, TrendingUp, DollarSign } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import DashboardLayout from '@/components/layout/DashboardLayout';

const AdminDashboard = () => {
  const { t } = useLanguage();
  
  const stats = [
    { title: t('admin.totalUsers'), value: '12,345', icon: Users, change: '+12%' },
    { title: t('admin.totalOrders'), value: '8,432', icon: ShoppingBag, change: '+18%' },
    { title: t('admin.revenue'), value: '$125,432', icon: DollarSign, change: '+23%' },
    { title: t('admin.growth'), value: '15.3%', icon: TrendingUp, change: '+5%' }
  ];

  return (
    <DashboardLayout>
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('admin.dashboard')}</h1>

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
                  <p className="text-xs text-green-600">{stat.change} from last month</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="animate-slide-in-left animation-delay-400 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900">{t('dashboard.recentActivity')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-gray-900">New vendor registration</p>
                    <p className="text-sm text-gray-600">TechStore applied to become a vendor</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="font-medium text-gray-900">Order completed</p>
                    <p className="text-sm text-gray-600">Order #ORD-1234 has been delivered</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-right animation-delay-600 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900">{t('dashboard.quickActions')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button className="w-full text-left p-3 hover:bg-orange-50 rounded-lg transition-colors text-gray-700 hover:text-orange-700">
                  Review pending vendor applications
                </button>
                <button className="w-full text-left p-3 hover:bg-orange-50 rounded-lg transition-colors text-gray-700 hover:text-orange-700">
                  View recent orders
                </button>
                <button className="w-full text-left p-3 hover:bg-orange-50 rounded-lg transition-colors text-gray-700 hover:text-orange-700">
                  Generate monthly report
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
