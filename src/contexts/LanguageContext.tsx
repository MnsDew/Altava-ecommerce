
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
  'common.notFound': {
    en: 'Page not found',
    ar: 'الصفحة غير موجودة',
    tr: 'Sayfa bulunamadı'
  },
  'common.goHome': {
    en: 'Go back home',
    ar: 'العودة للرئيسية',
    tr: 'Ana sayfaya dön'
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
