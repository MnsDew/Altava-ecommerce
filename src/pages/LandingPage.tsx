
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Users, TrendingUp, Shield } from 'lucide-react';
import Header from '@/components/layout/Header';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary">Altava</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your complete e-commerce solution connecting customers, vendors, and administrators 
            in one seamless platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/products">Shop Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/register">Become a Vendor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Altava?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <ShoppingBag className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-center">Easy Shopping</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Browse thousands of products with advanced search and filtering options.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-center">Multi-Vendor</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Connect with verified vendors from around the world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-center">Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Comprehensive analytics and reporting for business insights.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto" />
                <CardTitle className="text-center">Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Enterprise-grade security with secure payment processing.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of customers and vendors already using Altava.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/register">Create Account</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Altava</h3>
          <p className="text-gray-400 mb-4">
            Building the future of e-commerce, one transaction at a time.
          </p>
          <div className="flex justify-center space-x-6">
            <Link to="/about" className="text-gray-400 hover:text-white">About</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-white">Privacy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
