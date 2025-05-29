
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

// Public pages
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import LandingPage from "@/pages/LandingPage";

// Customer pages
import CustomerDashboard from "@/pages/customer/Dashboard";
import ProductCatalog from "@/pages/customer/ProductCatalog";
import ProductDetail from "@/pages/customer/ProductDetail";
import Cart from "@/pages/customer/Cart";
import Checkout from "@/pages/customer/Checkout";
import OrderHistory from "@/pages/customer/OrderHistory";
import Profile from "@/pages/customer/Profile";

// Admin pages
import AdminDashboard from "@/pages/admin/Dashboard";
import UserManagement from "@/pages/admin/UserManagement";
import VendorApproval from "@/pages/admin/VendorApproval";
import Analytics from "@/pages/admin/Analytics";
import PlatformSettings from "@/pages/admin/PlatformSettings";

// Vendor pages
import VendorDashboard from "@/pages/vendor/Dashboard";
import ProductManagement from "@/pages/vendor/ProductManagement";
import OrderManagement from "@/pages/vendor/OrderManagement";
import VendorAnalytics from "@/pages/vendor/Analytics";

import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<ProductCatalog />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              
              {/* Customer routes */}
              <Route path="/dashboard" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <CustomerDashboard />
                </ProtectedRoute>
              } />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <Checkout />
                </ProtectedRoute>
              } />
              <Route path="/orders" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <OrderHistory />
                </ProtectedRoute>
              } />
              <Route path="/profile" element={
                <ProtectedRoute allowedRoles={['customer']}>
                  <Profile />
                </ProtectedRoute>
              } />
              
              {/* Admin routes */}
              <Route path="/admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/users" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <UserManagement />
                </ProtectedRoute>
              } />
              <Route path="/admin/vendors" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <VendorApproval />
                </ProtectedRoute>
              } />
              <Route path="/admin/analytics" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <Analytics />
                </ProtectedRoute>
              } />
              <Route path="/admin/settings" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <PlatformSettings />
                </ProtectedRoute>
              } />
              
              {/* Vendor routes */}
              <Route path="/vendor" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <VendorDashboard />
                </ProtectedRoute>
              } />
              <Route path="/vendor/products" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <ProductManagement />
                </ProtectedRoute>
              } />
              <Route path="/vendor/orders" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <OrderManagement />
                </ProtectedRoute>
              } />
              <Route path="/vendor/analytics" element={
                <ProtectedRoute allowedRoles={['vendor']}>
                  <VendorAnalytics />
                </ProtectedRoute>
              } />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
