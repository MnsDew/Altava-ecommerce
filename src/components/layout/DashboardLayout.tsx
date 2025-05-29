
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import {
  Home,
  Users,
  Package,
  ShoppingCart,
  BarChart3,
  Settings,
  UserCheck,
  TrendingUp,
} from 'lucide-react';
import Header from './Header';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const getNavItems = (role: string, t: (key: string) => string): NavItem[] => {
  switch (role) {
    case 'admin':
      return [
        { title: t('dashboard.title'), href: '/admin', icon: Home },
        { title: t('admin.userManagement'), href: '/admin/users', icon: Users },
        { title: t('admin.vendorApproval'), href: '/admin/vendors', icon: UserCheck },
        { title: t('dashboard.analytics'), href: '/admin/analytics', icon: BarChart3 },
        { title: t('dashboard.settings'), href: '/admin/settings', icon: Settings },
      ];
    case 'vendor':
      return [
        { title: t('dashboard.title'), href: '/vendor', icon: Home },
        { title: t('vendor.products'), href: '/vendor/products', icon: Package },
        { title: t('vendor.orders'), href: '/vendor/orders', icon: ShoppingCart },
        { title: t('dashboard.analytics'), href: '/vendor/analytics', icon: TrendingUp },
      ];
    case 'customer':
      return [
        { title: t('dashboard.title'), href: '/dashboard', icon: Home },
        { title: t('nav.orders'), href: '/orders', icon: ShoppingCart },
        { title: t('nav.profile'), href: '/profile', icon: Settings },
      ];
    default:
      return [];
  }
};

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const { t, isRTL } = useLanguage();

  if (!user) return null;

  const navItems = getNavItems(user.role, t);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className={`${isRTL ? 'mr-0 ml-auto' : 'ml-0 mr-auto'} w-64 bg-white/80 backdrop-blur-sm shadow-lg min-h-screen relative z-10`}>
          <nav className="mt-5 px-2">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-all duration-300 transform hover:scale-105',
                        location.pathname === item.href
                          ? 'bg-orange-500 text-white shadow-md'
                          : 'text-gray-700 hover:bg-orange-50 hover:text-orange-700'
                      )}
                    >
                      <Icon
                        className={cn(
                          'mr-3 h-5 w-5',
                          location.pathname === item.href
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-orange-500'
                        )}
                      />
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8 relative z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
