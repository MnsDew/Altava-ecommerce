
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Product Catalog</h1>
          
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                    <span className="text-sm text-gray-400">({product.reviewCount})</span>
                  </div>
                </div>
                <CardTitle className="text-lg">
                  <Link 
                    to={`/product/${product.id}`}
                    className="hover:text-primary transition-colors"
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
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <p className="text-sm text-gray-500">by {product.vendorName}</p>
                  </div>
                  <Badge variant={product.stock > 10 ? "default" : "destructive"}>
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button 
                    asChild
                    variant="outline" 
                    className="flex-1"
                  >
                    <Link to={`/product/${product.id}`}>
                      View Details
                    </Link>
                  </Button>
                  <Button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock === 0}
                    className="flex-1"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
