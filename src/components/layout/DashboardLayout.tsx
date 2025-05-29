
import { Outlet, Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
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

const getNavItems = (role: string): NavItem[] => {
  switch (role) {
    case 'admin':
      return [
        { title: 'Dashboard', href: '/admin', icon: Home },
        { title: 'User Management', href: '/admin/users', icon: Users },
        { title: 'Vendor Approval', href: '/admin/vendors', icon: UserCheck },
        { title: 'Analytics', href: '/admin/analytics', icon: BarChart3 },
        { title: 'Settings', href: '/admin/settings', icon: Settings },
      ];
    case 'vendor':
      return [
        { title: 'Dashboard', href: '/vendor', icon: Home },
        { title: 'Products', href: '/vendor/products', icon: Package },
        { title: 'Orders', href: '/vendor/orders', icon: ShoppingCart },
        { title: 'Analytics', href: '/vendor/analytics', icon: TrendingUp },
      ];
    case 'customer':
      return [
        { title: 'Dashboard', href: '/dashboard', icon: Home },
        { title: 'Orders', href: '/orders', icon: ShoppingCart },
        { title: 'Profile', href: '/profile', icon: Settings },
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

  if (!user) return null;

  const navItems = getNavItems(user.role);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm min-h-screen">
          <nav className="mt-5 px-2">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        location.pathname === item.href
                          ? 'bg-primary text-white'
                          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                      )}
                    >
                      <Icon
                        className={cn(
                          'mr-3 h-5 w-5',
                          location.pathname === item.href
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-gray-500'
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
        <div className="flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
