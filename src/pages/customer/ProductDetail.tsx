
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowLeft, Plus, Minus } from 'lucide-react';
import Header from '@/components/layout/Header';
import { mockProducts } from '@/services/mockData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { t } = useLanguage();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-2xl font-bold text-gray-900">{t('common.notFound')}</h1>
            <Link to="/products" className="text-primary hover:underline mt-4 inline-block transform hover:-translate-y-1 transition-all duration-300">
              {t('nav.products')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-gray-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-2 h-2 bg-orange-400 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-orange-500 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-orange-600 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <div className="animate-slide-in-left">
          <Link to="/products" className="flex items-center text-primary hover:underline mb-6 transform hover:-translate-y-1 transition-all duration-300">
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('nav.products')}
          </Link>
        </div>

        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8 animate-fade-in-up">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="animate-slide-in-left">
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden shadow-lg">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 transform hover:scale-105 ${
                      selectedImage === index ? 'border-primary shadow-lg' : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-slide-in-right">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-700">{product.rating}</span>
                  <span className="ml-1 text-gray-500">({product.reviewCount} {t('products.reviews')})</span>
                </div>
                <Badge variant="outline" className="animate-float">{product.category}</Badge>
              </div>

              <p className="text-4xl font-bold text-primary mb-6 animate-pulse">${product.price}</p>

              <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>

              <div className="mb-6 space-y-4">
                <div className="animate-fade-in-up animation-delay-200">
                  <h3 className="font-medium text-gray-900 mb-2">Vendor</h3>
                  <p className="text-gray-700">{product.vendorName}</p>
                </div>

                <div className="animate-fade-in-up animation-delay-400">
                  <h3 className="font-medium text-gray-900 mb-2">Stock</h3>
                  <p className="text-gray-700">{product.stock} available</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-6 animate-fade-in-up animation-delay-600">
                <div className="flex items-center border rounded-lg shadow-sm">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart} 
                className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in-up animation-delay-800"
                disabled={product.stock === 0}
              >
                {t('products.addToCart')}
              </Button>

              <div className="mt-6 animate-fade-in-up animation-delay-1000">
                <h3 className="font-medium text-gray-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="animate-float" style={{animationDelay: `${index * 0.1}s`}}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
