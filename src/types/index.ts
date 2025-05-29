
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'customer' | 'admin' | 'vendor';
  avatar?: string;
  phone?: string;
  address?: Address;
  createdAt: string;
  isApproved?: boolean; // for vendors
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
  vendorId: string;
  vendorName: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: Address;
  paymentMethod: string;
  trackingNumber?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Vendor {
  id: string;
  name: string;
  email: string;
  businessName: string;
  description: string;
  address: Address;
  phone: string;
  isApproved: boolean;
  rating: number;
  totalProducts: number;
  totalOrders: number;
  createdAt: string;
}

export interface Analytics {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  totalProducts: number;
  userGrowth: number;
  orderGrowth: number;
  revenueGrowth: number;
  topProducts: Product[];
  recentOrders: Order[];
}
