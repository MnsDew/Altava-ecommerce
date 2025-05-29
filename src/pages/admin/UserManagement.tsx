
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import DashboardLayout from '@/components/layout/DashboardLayout';

const mockUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'customer', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'vendor', status: 'pending' },
  { id: '3', name: 'Bob Johnson', email: 'bob@example.com', role: 'customer', status: 'active' }
];

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers = mockUsers.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">User Management</h1>

        <Card>
          <CardHeader>
            <CardTitle>All Users</CardTitle>
            <div className="flex space-x-4">
              <Input
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm"
              />
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Badge variant="outline">{user.role}</Badge>
                    <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
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

export default UserManagement;
