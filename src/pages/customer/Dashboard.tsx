
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Package, ShoppingCart, Heart, TrendingUp } from 'lucide-react';

const CustomerDashboard = () => {
  const { user } = useAuth();
  const { t } = useLanguage();

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in-up">
        <div className="animate-slide-in-left">
          <h1 className="text-3xl font-bold text-gray-900">{t('dashboard.welcome')}, {user?.name}!</h1>
          <p className="text-gray-600">Here's what's happening with your account today.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="animate-slide-in-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{animationDelay: '0.1s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{t('customer.totalOrders')}</CardTitle>
              <Package className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">12</div>
              <p className="text-xs text-green-600">+2 from last month</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{animationDelay: '0.2s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{t('customer.totalSpent')}</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">$1,234</div>
              <p className="text-xs text-green-600">+15% from last month</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{animationDelay: '0.3s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{t('customer.wishlistItems')}</CardTitle>
              <Heart className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">8</div>
              <p className="text-xs text-orange-600">3 items on sale</p>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-left hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{animationDelay: '0.4s'}}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{t('customer.cartItems')}</CardTitle>
              <ShoppingCart className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">3</div>
              <p className="text-xs text-orange-600">Ready to checkout</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="animate-slide-in-left animation-delay-600 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900">{t('dashboard.quickActions')}</CardTitle>
              <CardDescription>Common tasks you might want to do</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                <Link to="/products">{t('customer.browseProducts')}</Link>
              </Button>
              <Button variant="outline" asChild className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 transition-all duration-300">
                <Link to="/orders">{t('customer.viewOrderHistory')}</Link>
              </Button>
              <Button variant="outline" asChild className="w-full border-orange-200 text-orange-700 hover:bg-orange-50 transition-all duration-300">
                <Link to="/cart">{t('customer.viewCart')}</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="animate-slide-in-right animation-delay-800 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-gray-900">{t('dashboard.recentActivity')}</CardTitle>
              <CardDescription>Your latest interactions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Order #1234 delivered</p>
                    <p className="text-xs text-gray-600">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Added 2 items to cart</p>
                    <p className="text-xs text-gray-600">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-orange-50 transition-colors">
                  <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Order #1233 shipped</p>
                    <p className="text-xs text-gray-600">3 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CustomerDashboard;
