
import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'ar' | 'tr';

interface Translations {
  [key: string]: {
    en: string;
    ar: string;
    tr: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': {
    en: 'Home',
    ar: 'الرئيسية',
    tr: 'Ana Sayfa'
  },
  'nav.products': {
    en: 'Products',
    ar: 'المنتجات',
    tr: 'Ürünler'
  },
  'nav.login': {
    en: 'Login',
    ar: 'تسجيل الدخول',
    tr: 'Giriş'
  },
  'nav.signup': {
    en: 'Sign Up',
    ar: 'التسجيل',
    tr: 'Kayıt Ol'
  },
  'nav.dashboard': {
    en: 'Dashboard',
    ar: 'لوحة التحكم',
    tr: 'Kontrol Paneli'
  },
  'nav.orders': {
    en: 'Orders',
    ar: 'الطلبات',
    tr: 'Siparişler'
  },
  'nav.profile': {
    en: 'Profile',
    ar: 'الملف الشخصي',
    tr: 'Profil'
  },
  'nav.logout': {
    en: 'Logout',
    ar: 'تسجيل الخروج',
    tr: 'Çıkış'
  },

  // Dashboard Common
  'dashboard.title': {
    en: 'Dashboard',
    ar: 'لوحة التحكم',
    tr: 'Kontrol Paneli'
  },
  'dashboard.welcome': {
    en: 'Welcome back',
    ar: 'مرحباً بعودتك',
    tr: 'Tekrar hoş geldiniz'
  },
  'dashboard.analytics': {
    en: 'Analytics',
    ar: 'التحليلات',
    tr: 'Analitik'
  },
  'dashboard.settings': {
    en: 'Settings',
    ar: 'الإعدادات',
    tr: 'Ayarlar'
  },
  'dashboard.recentActivity': {
    en: 'Recent Activity',
    ar: 'النشاط الأخير',
    tr: 'Son Aktivite'
  },
  'dashboard.quickActions': {
    en: 'Quick Actions',
    ar: 'الإجراءات السريعة',
    tr: 'Hızlı İşlemler'
  },

  // Admin Dashboard
  'admin.dashboard': {
    en: 'Admin Dashboard',
    ar: 'لوحة تحكم المدير',
    tr: 'Yönetici Paneli'
  },
  'admin.userManagement': {
    en: 'User Management',
    ar: 'إدارة المستخدمين',
    tr: 'Kullanıcı Yönetimi'
  },
  'admin.vendorApproval': {
    en: 'Vendor Approval',
    ar: 'موافقة الموردين',
    tr: 'Satıcı Onayı'
  },
  'admin.totalUsers': {
    en: 'Total Users',
    ar: 'إجمالي المستخدمين',
    tr: 'Toplam Kullanıcı'
  },
  'admin.totalOrders': {
    en: 'Total Orders',
    ar: 'إجمالي الطلبات',
    tr: 'Toplam Sipariş'
  },
  'admin.revenue': {
    en: 'Revenue',
    ar: 'الإيرادات',
    tr: 'Gelir'
  },
  'admin.growth': {
    en: 'Growth',
    ar: 'النمو',
    tr: 'Büyüme'
  },

  // Vendor Dashboard
  'vendor.dashboard': {
    en: 'Vendor Dashboard',
    ar: 'لوحة تحكم المورد',
    tr: 'Satıcı Paneli'
  },
  'vendor.products': {
    en: 'Products',
    ar: 'المنتجات',
    tr: 'Ürünler'
  },
  'vendor.orders': {
    en: 'Orders',
    ar: 'الطلبات',
    tr: 'Siparişler'
  },
  'vendor.totalProducts': {
    en: 'Total Products',
    ar: 'إجمالي المنتجات',
    tr: 'Toplam Ürün'
  },
  'vendor.conversion': {
    en: 'Conversion',
    ar: 'التحويل',
    tr: 'Dönüşüm'
  },
  'vendor.recentOrders': {
    en: 'Recent Orders',
    ar: 'الطلبات الأخيرة',
    tr: 'Son Siparişler'
  },
  'vendor.topProducts': {
    en: 'Top Products',
    ar: 'أفضل المنتجات',
    tr: 'En İyi Ürünler'
  },
  'vendor.productManagement': {
    en: 'Product Management',
    ar: 'إدارة المنتجات',
    tr: 'Ürün Yönetimi'
  },
  'vendor.addProduct': {
    en: 'Add Product',
    ar: 'إضافة منتج',
    tr: 'Ürün Ekle'
  },
  'vendor.yourProducts': {
    en: 'Your Products',
    ar: 'منتجاتك',
    tr: 'Ürünleriniz'
  },
  'vendor.stock': {
    en: 'Stock',
    ar: 'المخزون',
    tr: 'Stok'
  },
  'vendor.active': {
    en: 'Active',
    ar: 'نشط',
    tr: 'Aktif'
  },
  'vendor.outOfStock': {
    en: 'Out of Stock',
    ar: 'نفد المخزون',
    tr: 'Stokta Yok'
  },

  // Customer Dashboard
  'customer.dashboard': {
    en: 'Customer Dashboard',
    ar: 'لوحة تحكم العميل',
    tr: 'Müşteri Paneli'
  },
  'customer.totalOrders': {
    en: 'Total Orders',
    ar: 'إجمالي الطلبات',
    tr: 'Toplam Sipariş'
  },
  'customer.totalSpent': {
    en: 'Total Spent',
    ar: 'إجمالي المنفق',
    tr: 'Toplam Harcama'
  },
  'customer.wishlistItems': {
    en: 'Wishlist Items',
    ar: 'عناصر المفضلة',
    tr: 'Favori Ürünler'
  },
  'customer.cartItems': {
    en: 'Cart Items',
    ar: 'عناصر السلة',
    tr: 'Sepet Ürünleri'
  },
  'customer.browseProducts': {
    en: 'Browse Products',
    ar: 'تصفح المنتجات',
    tr: 'Ürünleri İncele'
  },
  'customer.viewOrderHistory': {
    en: 'View Order History',
    ar: 'عرض تاريخ الطلبات',
    tr: 'Sipariş Geçmişi'
  },
  'customer.viewCart': {
    en: 'View Cart',
    ar: 'عرض السلة',
    tr: 'Sepeti Görüntüle'
  },

  // Auth
  'auth.signIn': {
    en: 'Sign In',
    ar: 'تسجيل الدخول',
    tr: 'Oturum Aç'
  },
  'auth.signInToAccount': {
    en: 'Sign in to Altava',
    ar: 'تسجيل الدخول إلى ألتافا',
    tr: 'Altava\'ya Giriş Yap'
  },
  'auth.enterEmail': {
    en: 'Enter your email below to sign in to your account',
    ar: 'أدخل بريدك الإلكتروني أدناه لتسجيل الدخول إلى حسابك',
    tr: 'Hesabınıza giriş yapmak için e-postanızı girin'
  },
  'auth.email': {
    en: 'Email',
    ar: 'البريد الإلكتروني',
    tr: 'E-posta'
  },
  'auth.password': {
    en: 'Password',
    ar: 'كلمة المرور',
    tr: 'Şifre'
  },
  'auth.demoCredentials': {
    en: 'Demo Credentials',
    ar: 'بيانات الاختبار',
    tr: 'Demo Giriş Bilgileri'
  },
  'auth.admin': {
    en: 'Admin',
    ar: 'مدير',
    tr: 'Yönetici'
  },
  'auth.vendor': {
    en: 'Vendor',
    ar: 'مورد',
    tr: 'Satıcı'
  },
  'auth.customer': {
    en: 'Customer',
    ar: 'عميل',
    tr: 'Müşteri'
  },
  'auth.dontHaveAccount': {
    en: "Don't have an account?",
    ar: 'ليس لديك حساب؟',
    tr: 'Hesabınız yok mu?'
  },
  'auth.signUp': {
    en: 'Sign up',
    ar: 'سجل',
    tr: 'Kayıt ol'
  },

  // Landing Page
  'landing.welcome': {
    en: 'Welcome to',
    ar: 'مرحباً بك في',
    tr: 'Hoş geldiniz'
  },
  'landing.subtitle': {
    en: 'Your complete e-commerce solution connecting customers, vendors, and administrators in one seamless platform.',
    ar: 'حلولك الكاملة للتجارة الإلكترونية التي تربط العملاء والموردين والمديرين في منصة واحدة سلسة.',
    tr: 'Müşteriler, satıcılar ve yöneticileri tek bir sorunsuz platformda birleştiren eksiksiz e-ticaret çözümünüz.'
  },
  'landing.shopNow': {
    en: 'Shop Now',
    ar: 'تسوق الآن',
    tr: 'Şimdi Alışveriş Yap'
  },
  'landing.becomeVendor': {
    en: 'Become a Vendor',
    ar: 'كن مورداً',
    tr: 'Satıcı Ol'
  },
  'landing.whyChoose': {
    en: 'Why Choose Altava?',
    ar: 'لماذا تختار ألتافا؟',
    tr: 'Neden Altava\'yı Seçmelisiniz?'
  },
  'landing.easyShoppingTitle': {
    en: 'Easy Shopping',
    ar: 'تسوق سهل',
    tr: 'Kolay Alışveriş'
  },
  'landing.easyShoppingDesc': {
    en: 'Browse thousands of products with advanced search and filtering options.',
    ar: 'تصفح آلاف المنتجات مع خيارات البحث والتصفية المتقدمة.',
    tr: 'Gelişmiş arama ve filtreleme seçenekleri ile binlerce ürünü inceleyin.'
  },
  'landing.multiVendorTitle': {
    en: 'Multi-Vendor',
    ar: 'متعدد الموردين',
    tr: 'Çoklu Satıcı'
  },
  'landing.multiVendorDesc': {
    en: 'Connect with verified vendors from around the world.',
    ar: 'تواصل مع موردين معتمدين من جميع أنحاء العالم.',
    tr: 'Dünyanın her yerinden doğrulanmış satıcılarla bağlantı kurun.'
  },
  'landing.analyticsTitle': {
    en: 'Analytics',
    ar: 'التحليلات',
    tr: 'Analitik'
  },
  'landing.analyticsDesc': {
    en: 'Comprehensive analytics and reporting for business insights.',
    ar: 'تحليلات وتقارير شاملة لرؤى الأعمال.',
    tr: 'İş içgörüleri için kapsamlı analitik ve raporlama.'
  },
  'landing.secureTitle': {
    en: 'Secure',
    ar: 'آمن',
    tr: 'Güvenli'
  },
  'landing.secureDesc': {
    en: 'Enterprise-grade security with secure payment processing.',
    ar: 'أمان على مستوى المؤسسات مع معالجة آمنة للمدفوعات.',
    tr: 'Güvenli ödeme işleme ile kurumsal düzeyde güvenlik.'
  },
  'landing.readyTitle': {
    en: 'Ready to Get Started?',
    ar: 'جاهز للبدء؟',
    tr: 'Başlamaya Hazır mısınız?'
  },
  'landing.readyDesc': {
    en: 'Join thousands of customers and vendors already using Altava.',
    ar: 'انضم إلى آلاف العملاء والموردين الذين يستخدمون ألتافا بالفعل.',
    tr: 'Zaten Altava kullanan binlerce müşteri ve satıcıya katılın.'
  },
  'landing.createAccount': {
    en: 'Create Account',
    ar: 'إنشاء حساب',
    tr: 'Hesap Oluştur'
  },
  'landing.signIn': {
    en: 'Sign In',
    ar: 'تسجيل الدخول',
    tr: 'Oturum Aç'
  },
  'landing.footerDesc': {
    en: 'Building the future of e-commerce, one transaction at a time.',
    ar: 'بناء مستقبل التجارة الإلكترونية، معاملة واحدة في كل مرة.',
    tr: 'E-ticaretin geleceğini, her seferinde bir işlemle inşa ediyoruz.'
  },
  'landing.about': {
    en: 'About',
    ar: 'حول',
    tr: 'Hakkında'
  },
  'landing.contact': {
    en: 'Contact',
    ar: 'اتصل',
    tr: 'İletişim'
  },
  'landing.privacy': {
    en: 'Privacy',
    ar: 'الخصوصية',
    tr: 'Gizlilik'
  },
  'landing.terms': {
    en: 'Terms',
    ar: 'الشروط',
    tr: 'Şartlar'
  },

  // Product Catalog
  'products.title': {
    en: 'Product Catalog',
    ar: 'كتالوج المنتجات',
    tr: 'Ürün Katalogu'
  },
  'products.searchPlaceholder': {
    en: 'Search products...',
    ar: 'البحث عن المنتجات...',
    tr: 'Ürün ara...'
  },
  'products.filterCategory': {
    en: 'Filter by Category',
    ar: 'تصفية حسب الفئة',
    tr: 'Kategoriye Göre Filtrele'
  },
  'products.allCategories': {
    en: 'All Categories',
    ar: 'جميع الفئات',
    tr: 'Tüm Kategoriler'
  },
  'products.sortBy': {
    en: 'Sort by',
    ar: 'ترتيب حسب',
    tr: 'Sırala'
  },
  'products.sortNewest': {
    en: 'Newest',
    ar: 'الأحدث',
    tr: 'En Yeni'
  },
  'products.sortPriceLow': {
    en: 'Price: Low to High',
    ar: 'السعر: من الأقل إلى الأعلى',
    tr: 'Fiyat: Düşükten Yükseğe'
  },
  'products.sortPriceHigh': {
    en: 'Price: High to Low',
    ar: 'السعر: من الأعلى إلى الأقل',
    tr: 'Fiyat: Yüksekten Düşüğe'
  },
  'products.sortRating': {
    en: 'Rating',
    ar: 'التقييم',
    tr: 'Değerlendirme'
  },
  'products.addToCart': {
    en: 'Add to Cart',
    ar: 'أضف إلى السلة',
    tr: 'Sepete Ekle'
  },
  'products.viewDetails': {
    en: 'View Details',
    ar: 'عرض التفاصيل',
    tr: 'Detayları Görüntüle'
  },
  'products.reviews': {
    en: 'reviews',
    ar: 'مراجعات',
    tr: 'değerlendirme'
  },
  'products.noProducts': {
    en: 'No products found',
    ar: 'لم يتم العثور على منتجات',
    tr: 'Ürün bulunamadı'
  },
  'products.loading': {
    en: 'Loading products...',
    ar: 'جاري تحميل المنتجات...',
    tr: 'Ürünler yükleniyor...'
  },
  'products.showing': {
    en: 'Showing',
    ar: 'عرض',
    tr: 'Gösteriliyor'
  },
  'products.products': {
    en: 'products',
    ar: 'منتجات',
    tr: 'ürün'
  },
  'products.nameAZ': {
    en: 'Name A-Z',
    ar: 'الاسم أ-ي',
    tr: 'İsim A-Z'
  },
  'products.highestRated': {
    en: 'Highest Rated',
    ar: 'الأعلى تقييماً',
    tr: 'En Yüksek Puanlı'
  },
  'products.category': {
    en: 'Category',
    ar: 'الفئة',
    tr: 'Kategori'
  },
  'products.by': {
    en: 'by',
    ar: 'بواسطة',
    tr: 'satıcı'
  },
  'products.inStock': {
    en: 'in stock',
    ar: 'في المخزون',
    tr: 'stokta'
  },
  'products.outOfStock': {
    en: 'Out of stock',
    ar: 'نفد المخزون',
    tr: 'Stokta yok'
  },

  // Common
  'common.notFound': {
    en: 'Page not found',
    ar: 'الصفحة غير موجودة',
    tr: 'Sayfa bulunamadı'
  },
  'common.goHome': {
    en: 'Go back home',
    ar: 'العودة للرئيسية',
    tr: 'Ana sayfaya dön'
  },
  'common.loading': {
    en: 'Loading...',
    ar: 'جاري التحميل...',
    tr: 'Yükleniyor...'
  },
  'common.error': {
    en: 'Error',
    ar: 'خطأ',
    tr: 'Hata'
  },
  'common.success': {
    en: 'Success',
    ar: 'نجح',
    tr: 'Başarılı'
  },
  'common.cancel': {
    en: 'Cancel',
    ar: 'إلغاء',
    tr: 'İptal'
  },
  'common.save': {
    en: 'Save',
    ar: 'حفظ',
    tr: 'Kaydet'
  },
  'common.delete': {
    en: 'Delete',
    ar: 'حذف',
    tr: 'Sil'
  },
  'common.edit': {
    en: 'Edit',
    ar: 'تعديل',
    tr: 'Düzenle'
  },
  'common.search': {
    en: 'Search',
    ar: 'بحث',
    tr: 'Ara'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div className={isRTL ? 'rtl' : 'ltr'} dir={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
