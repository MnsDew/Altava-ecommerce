
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, ArrowLeft, Plus, Minus } from 'lucide-react';
import Header from '@/components/layout/Header';
import { mockProducts } from '@/services/mockData';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">Product Not Found</h1>
            <Link to="/products" className="text-primary hover:underline mt-4 inline-block">
              Back to Products
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Link to="/products" className="flex items-center text-primary hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>

        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg mb-4 overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-gray-200'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-700">{product.rating}</span>
                  <span className="ml-1 text-gray-500">({product.reviewCount} reviews)</span>
                </div>
                <Badge variant="outline">{product.category}</Badge>
              </div>

              <p className="text-4xl font-bold text-primary mb-6">${product.price}</p>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Vendor</h3>
                <p className="text-gray-700">{product.vendorName}</p>
              </div>

              <div className="mb-6">
                <h3 className="font-medium text-gray-900 mb-2">Stock</h3>
                <p className="text-gray-700">{product.stock} available</p>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <Button 
                onClick={handleAddToCart} 
                className="w-full md:w-auto"
                disabled={product.stock === 0}
              >
                Add to Cart
              </Button>

              <div className="mt-6">
                <h3 className="font-medium text-gray-900 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary">{tag}</Badge>
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
