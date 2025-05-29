
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Plus } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import DashboardLayout from '@/components/layout/DashboardLayout';

const mockVendorProducts = [
  { id: '1', name: 'Wireless Headphones', price: 299.99, stock: 50, status: 'active' },
  { id: '2', name: 'Smart Watch', price: 149.99, stock: 25, status: 'active' },
  { id: '3', name: 'Laptop Stand', price: 79.99, stock: 0, status: 'out_of_stock' }
];

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  const filteredProducts = mockVendorProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="animate-fade-in-up">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('vendor.productManagement')}</h1>
          <Button className="bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            <Plus className="h-4 w-4 mr-2" />
            {t('vendor.addProduct')}
          </Button>
        </div>

        <Card className="animate-slide-in-up animation-delay-200 shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">{t('vendor.yourProducts')}</CardTitle>
            <div className="flex space-x-4">
              <Input
                placeholder={t('products.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm transition-all duration-200 focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="flex items-center justify-between p-4 border border-orange-100 rounded-lg hover:shadow-md transition-all duration-300 hover:bg-orange-50 animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                  <div>
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-600">{t('vendor.stock')}: {product.stock}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-medium text-gray-900">${product.price}</p>
                    <Badge variant={product.status === 'active' ? 'default' : 'secondary'} className={product.status === 'active' ? 'bg-green-500' : 'bg-red-500'}>
                      {product.status === 'active' ? t('vendor.active') : t('vendor.outOfStock')}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" className="hover:bg-orange-50 hover:border-orange-300 transition-colors">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" className="hover:bg-red-50 hover:border-red-300 transition-colors">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProductManagement;
