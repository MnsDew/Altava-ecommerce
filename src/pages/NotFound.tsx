
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-gray-50">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">404</h1>
        </div>
        <p className="text-2xl text-gray-600 mb-8">{t('common.notFound')}</p>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 px-8 py-4">
          <Link to="/">{t('common.goHome')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
