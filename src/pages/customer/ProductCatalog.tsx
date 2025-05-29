
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockProducts } from '@/services/mockData';
import { Product } from '@/types';
import { Search, ShoppingCart, Star } from 'lucide-react';
import Header from '@/components/layout/Header';

const ProductCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const categories = useMemo(() => {
    const cats = Array.from(new Set(mockProducts.map(p => p.category)));
    return ['all', ...cats];
  }, []);

  const filteredProducts = useMemo(() => {
    let products = mockProducts;

    // Filter by search term
    if (searchTerm) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      products = products.filter(product => product.category === selectedCategory);
    }

    // Sort products
    products.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return products;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="mb-8 animate-fade-in-up">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{t('products.title')}</h1>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t('products.searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('products.category')} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? t('products.allCategories') : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder={t('products.sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">{t('products.nameAZ')}</SelectItem>
                <SelectItem value="price-low">{t('products.sortPriceLow')}</SelectItem>
                <SelectItem value="price-high">{t('products.sortPriceHigh')}</SelectItem>
                <SelectItem value="rating">{t('products.highestRated')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-gray-600 animate-fade-in-up animation-delay-200">
            {t('products.showing')} {filteredProducts.length} {t('products.products')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="secondary">{product.category}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                    <span className="text-sm text-gray-400">({product.reviewCount} {t('products.reviews')})</span>
                  </div>
                </div>
                <CardTitle className="text-lg">
                  <Link 
                    to={`/product/${product.id}`}
                    className="hover:text-orange-600 transition-colors"
                  >
                    {product.name}
                  </Link>
                </CardTitle>
                <CardDescription className="line-clamp-2">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-2xl font-bold text-orange-600">${product.price}</span>
                    <p className="text-sm text-gray-500">{t('products.by')} {product.vendorName}</p>
                  </div>
                  <Badge variant={product.stock > 10 ? "default" : "destructive"}>
                    {product.stock > 0 ? `${product.stock} ${t('products.inStock')}` : t('products.outOfStock')}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button 
                    asChild
                    variant="outline" 
                    className="flex-1 border-orange-200 text-orange-700 hover:bg-orange-50"
                  >
                    <Link to={`/product/${product.id}`}>
                      {t('products.viewDetails')}
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t('products.addToCart')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12 animate-fade-in-up">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{t('products.noProducts')}</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
