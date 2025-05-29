
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Edit, Trash2, Plus } from 'lucide-react';
import DashboardLayout from '@/components/layout/DashboardLayout';

const mockVendorProducts = [
  { id: '1', name: 'Wireless Headphones', price: 299.99, stock: 50, status: 'active' },
  { id: '2', name: 'Smart Watch', price: 149.99, stock: 25, status: 'active' },
  { id: '3', name: 'Laptop Stand', price: 79.99, stock: 0, status: 'out_of_stock' }
];

const ProductManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = mockVendorProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Product
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Your Products</CardTitle>
            <div className="flex space-x-4">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{product.name}</h3>
                    <p className="text-sm text-gray-600">Stock: {product.stock}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-medium">${product.price}</p>
                    <Badge variant={product.status === 'active' ? 'default' : 'secondary'}>
                      {product.status === 'active' ? 'Active' : 'Out of Stock'}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
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
