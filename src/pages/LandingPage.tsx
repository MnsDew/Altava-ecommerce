
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingBag, Users, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/layout/Header';

const LandingPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-orange-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-orange-600 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-orange-400 rounded-full animate-float" style={{animationDelay: '3s'}}></div>
      </div>

      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-down">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('landing.welcome')} <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient">Altava</span>
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('landing.subtitle')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button size="lg" asChild className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4">
              <Link to="/products">{t('landing.shopNow')}</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4">
              <Link to="/register">{t('landing.becomeVendor')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/80 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              {t('landing.whyChoose')}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="animate-slide-in-left animation-delay-200">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ShoppingBag className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{t('landing.easyShoppingTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {t('landing.easyShoppingDesc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-left animation-delay-400">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{t('landing.multiVendorTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {t('landing.multiVendorDesc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-right animation-delay-400">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{t('landing.analyticsTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {t('landing.analyticsDesc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            <div className="animate-slide-in-right animation-delay-200">
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">{t('landing.secureTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {t('landing.secureDesc')}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold mb-4">{t('landing.readyTitle')}</h2>
            <p className="text-xl mb-8 text-orange-100">
              {t('landing.readyDesc')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-300">
            <Button size="lg" variant="secondary" asChild className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl px-8 py-4 transform hover:-translate-y-1 transition-all duration-300">
              <Link to="/register">{t('landing.createAccount')}</Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 shadow-xl px-8 py-4 transform hover:-translate-y-1 transition-all duration-300" asChild>
              <Link to="/login">{t('landing.signIn')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">Altava</h3>
            <p className="text-gray-400 mb-8 text-lg">
              {t('landing.footerDesc')}
            </p>
          </div>
          <div className="flex justify-center space-x-8 animate-fade-in-up animation-delay-300">
            <Link to="/about" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 transform hover:-translate-y-1">{t('landing.about')}</Link>
            <Link to="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 transform hover:-translate-y-1">{t('landing.contact')}</Link>
            <Link to="/privacy" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 transform hover:-translate-y-1">{t('landing.privacy')}</Link>
            <Link to="/terms" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 transform hover:-translate-y-1">{t('landing.terms')}</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
