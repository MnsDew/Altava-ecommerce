
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
