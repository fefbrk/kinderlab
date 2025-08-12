import { useState } from 'react';
import AccountLayout from '@/components/AccountLayout';
import Orders from './Orders'; // OrdersContent yerine Orders kullan
import Addresses from './Addresses';
import PaymentMethods from './PaymentMethods';
import SettingsContent from './components/SettingsContent';

const AccountPage = () => {
  const [activeMenu, setActiveMenu] = useState('orders');

  const renderContent = () => {
    switch (activeMenu) {
      case 'orders':
        return <Orders />;
      case 'addresses':
        return <Addresses />;
      case 'payment-methods':
        return <PaymentMethods />;
      case 'settings':
        return <SettingsContent />;
      default:
        return <Orders />;
    }
  };

  return (
    <AccountLayout
      activeMenu={activeMenu}
      onMenuChange={setActiveMenu}
    >
      {renderContent()}
    </AccountLayout>
  );
};

export default AccountPage;
