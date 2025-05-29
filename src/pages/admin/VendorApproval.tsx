
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/layout/DashboardLayout';

const mockPendingVendors = [
  {
    id: '1',
    name: 'TechStore Inc.',
    email: 'contact@techstore.com',
    businessName: 'TechStore Inc.',
    description: 'Electronics and gadgets retailer',
    appliedDate: '2024-01-15'
  },
  {
    id: '2',
    name: 'Fashion Hub',
    email: 'info@fashionhub.com',
    businessName: 'Fashion Hub LLC',
    description: 'Clothing and accessories',
    appliedDate: '2024-01-18'
  }
];

const VendorApproval = () => {
  const handleApprove = (vendorId: string) => {
    console.log('Approving vendor:', vendorId);
  };

  const handleReject = (vendorId: string) => {
    console.log('Rejecting vendor:', vendorId);
  };

  return (
    <DashboardLayout>
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Vendor Approval</h1>

        <Card>
          <CardHeader>
            <CardTitle>Pending Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {mockPendingVendors.map((vendor) => (
                <div key={vendor.id} className="border rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium">{vendor.businessName}</h3>
                      <p className="text-gray-600">{vendor.email}</p>
                      <p className="text-sm text-gray-500">Applied on {vendor.appliedDate}</p>
                    </div>
                    <Badge variant="secondary">Pending</Badge>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{vendor.description}</p>
                  
                  <div className="flex space-x-4">
                    <Button 
                      onClick={() => handleApprove(vendor.id)}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Approve
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => handleReject(vendor.id)}
                    >
                      Reject
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

export default VendorApproval;
