
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import DashboardLayout from '@/components/layout/DashboardLayout';

const PlatformSettings = () => {
  return (
    <DashboardLayout>
      <div className="max-w-2xl">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Platform Settings</h1>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="platformName">Platform Name</Label>
                <Input id="platformName" defaultValue="Altava" />
              </div>
              <div>
                <Label htmlFor="adminEmail">Admin Email</Label>
                <Input id="adminEmail" type="email" defaultValue="admin@altava.com" />
              </div>
              <div>
                <Label htmlFor="supportEmail">Support Email</Label>
                <Input id="supportEmail" type="email" defaultValue="support@altava.com" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Feature Toggles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="autoApproveVendors">Auto-approve vendors</Label>
                <Switch id="autoApproveVendors" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="enableNotifications">Enable notifications</Label>
                <Switch id="enableNotifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="maintenanceMode">Maintenance mode</Label>
                <Switch id="maintenanceMode" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="stripeKey">Stripe Public Key</Label>
                <Input id="stripeKey" placeholder="pk_test_..." />
              </div>
              <div>
                <Label htmlFor="commissionRate">Commission Rate (%)</Label>
                <Input id="commissionRate" type="number" defaultValue="5" />
              </div>
            </CardContent>
          </Card>

          <Button className="w-full">Save Settings</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PlatformSettings;
