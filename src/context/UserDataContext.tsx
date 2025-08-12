import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';
import { useAuth } from './AuthContext';
import apiService from '@/services/apiService';

// --- TYPES ---
export type OrderStatus = 'placed' | 'received' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface Address {
  id: string;
  title: string;
  type: 'home' | 'office';
  name: string;
  phone: string;
  email?: string;
  address: string;
  district: string;
  city: string;
  postalCode: string;
  province?: string;
  country?: string;
  isDefault: boolean;
}

export interface PaymentMethod {
  id: string;
  type: 'card' | 'paypal';
  title: string;
  cardNumber?: string;
  expiryDate?: string;
  cardName?: string;
  cvv?: string;
  isDefault: boolean;
}

export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  date: string;
  status: OrderStatus;
  total: number;
  subtotal: number;
  discount: number;
  items: OrderItem[];
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  orderNotes?: string;
}

export interface ProfileInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName?: string;
}

interface UserDataContextType {
  addresses: Address[];
  paymentMethods: PaymentMethod[];
  orders: Order[];
  profileInfo: ProfileInfo | null;
  isLoading: boolean;
  addAddress: (address: Omit<Address, 'id'>) => Promise<string>;
  updateAddress: (id: string, address: Partial<Address>) => Promise<void>;
  deleteAddress: (id: string) => Promise<void>;
  setDefaultAddress: (id: string) => Promise<void>;
  addPaymentMethod: (paymentMethod: Omit<PaymentMethod, 'id'>) => Promise<string>;
  updatePaymentMethod: (id: string, paymentMethod: Partial<PaymentMethod>) => Promise<void>;
  deletePaymentMethod: (id: string) => Promise<void>;
  setDefaultPaymentMethod: (id: string) => Promise<void>;
  addOrder: (order: Omit<Order, 'id' | 'date'>) => string;
  cancelOrder: (orderId: string) => void;
  updateProfileInfo: (profileInfo: ProfileInfo) => void;
  getDefaultAddress: () => Address | null;
  getDefaultPaymentMethod: () => PaymentMethod | null;
}

const UserDataContext = createContext<UserDataContextType | undefined>(undefined);

// Helper function to load data from localStorage
const loadFromLocalStorage = <T,>(key: string, defaultValue: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : defaultValue;
  } catch (error) {
    console.error(`Error loading ${key} from localStorage`, error);
    return defaultValue;
  }
};

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [orders, setOrders] = useState<Order[]>(() => loadFromLocalStorage('user_orders', []));
  const [profileInfo, setProfileInfo] = useState<ProfileInfo | null>(() => loadFromLocalStorage('user_profile_info', null));
  const [isLoading, setIsLoading] = useState(false);

  // Kullanıcı değiştiğinde verileri yükle
  useEffect(() => {
    if (user?.id) {
      loadUserData();
    } else {
      // Kullanıcı çıkış yaptığında verileri temizle
      setAddresses([]);
      setPaymentMethods([]);
    }
  }, [user?.id]);

  const loadUserData = async () => {
    if (!user?.id) return;
    
    setIsLoading(true);
    try {
      const [addressesData, paymentMethodsData] = await Promise.all([
        apiService.getUserAddresses(user.id),
        apiService.getUserPaymentMethods(user.id)
      ]);
      
      // Backend verilerini frontend formatına çevir
      const formattedAddresses: Address[] = addressesData.map((addr: any) => ({
        id: addr.id,
        title: addr.title,
        type: (addr.type === 'delivery' ? 'home' : 'office') as 'home' | 'office',
        name: user.name,
        phone: '',
        email: user.email,
        address: addr.address,
        district: addr.district,
        city: addr.city,
        postalCode: addr.postal_code,
        province: addr.province,
        country: addr.country,
        isDefault: Boolean(addr.is_default)
      }));

      const formattedPaymentMethods = paymentMethodsData.map((pm: any) => ({
        id: pm.id,
        type: 'card' as const,
        title: pm.card_title,
        cardNumber: `**** **** **** ${pm.card_last_four}`,
        expiryDate: `${pm.expiry_month}/${pm.expiry_year}`,
        cardName: pm.holder_name,
        isDefault: Boolean(pm.is_default)
      }));

      setAddresses(formattedAddresses);
      setPaymentMethods(formattedPaymentMethods);
    } catch (error) {
      console.error('Kullanıcı verileri yüklenirken hata:', error);
      toast.error('Veriler yüklenirken bir hata oluştu');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    localStorage.setItem('user_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('user_profile_info', JSON.stringify(profileInfo));
  }, [profileInfo]);

  const addAddress = async (address: Omit<Address, 'id'>): Promise<string> => {
    if (!user?.id) {
      toast.error('Kullanıcı girişi yapmalısınız');
      return '';
    }

    try {
      const backendAddress = {
        userId: user.id,
        title: address.title,
        type: address.type === 'home' ? 'delivery' : 'billing',
        address: address.address,
        apartment: '',
        district: address.district,
        city: address.city,
        postalCode: address.postalCode,
        province: address.province || '',
        country: address.country || 'Turkey',
        isDefault: address.isDefault
      };

      const result = await apiService.createUserAddress(backendAddress);
      await loadUserData(); // Verileri yeniden yükle
      toast.success('Adres başarıyla eklendi');
      return result.id;
    } catch (error) {
      console.error('Adres eklenirken hata:', error);
      toast.error('Adres eklenirken bir hata oluştu');
      return '';
    }
  };

  const updateAddress = async (id: string, updatedAddress: Partial<Address>) => {
    if (!user?.id) {
      toast.error('Kullanıcı girişi yapmalısınız');
      return;
    }

    try {
      const backendAddress = {
        title: updatedAddress.title,
        type: updatedAddress.type === 'home' ? 'delivery' : 'billing',
        address: updatedAddress.address,
        apartment: '',
        district: updatedAddress.district,
        city: updatedAddress.city,
        postalCode: updatedAddress.postalCode,
        province: updatedAddress.province || '',
        country: updatedAddress.country || 'Turkey',
        isDefault: updatedAddress.isDefault
      };

      await apiService.updateUserAddress(id, backendAddress);
      await loadUserData(); // Verileri yeniden yükle
      toast.success('Adres başarıyla güncellendi');
    } catch (error) {
      console.error('Adres güncellenirken hata:', error);
      toast.error('Adres güncellenirken bir hata oluştu');
    }
  };

  const deleteAddress = async (id: string) => {
    if (!user?.id) {
      toast.error('Kullanıcı girişi yapmalısınız');
      return;
    }

    try {
      await apiService.deleteUserAddress(id);
      await loadUserData(); // Verileri yeniden yükle
      toast.success('Adres başarıyla silindi');
    } catch (error) {
      console.error('Adres silinirken hata:', error);
      toast.error('Adres silinirken bir hata oluştu');
    }
  };

  const setDefaultAddress = async (id: string) => {
    const address = addresses.find(addr => addr.id === id);
    if (address) {
      await updateAddress(id, { ...address, isDefault: true });
    }
  };

  const addPaymentMethod = async (paymentMethod: Omit<PaymentMethod, 'id'>): Promise<string> => {
    if (!user?.id) {
      toast.error('Kullanıcı girişi yapmalısınız');
      return '';
    }

    try {
      // Kart numarasından son 4 hanesi al
      const cardNumber = paymentMethod.cardNumber?.replace(/\s/g, '') || '';
      const [month, year] = paymentMethod.expiryDate?.split('/') || ['', ''];

      const backendPaymentMethod = {
        userId: user.id,
        cardTitle: paymentMethod.title,
        cardNumber: cardNumber,
        expiryMonth: month,
        expiryYear: year,
        holderName: paymentMethod.cardName || '',
        isDefault: paymentMethod.isDefault
      };

      const result = await apiService.createUserPaymentMethod(backendPaymentMethod);
      await loadUserData(); // Verileri yeniden yükle
      toast.success('Ödeme yöntemi başarıyla eklendi');
      return result.id;
    } catch (error) {
      console.error('Ödeme yöntemi eklenirken hata:', error);
      toast.error('Ödeme yöntemi eklenirken bir hata oluştu');
      return '';
    }
  };

  const updatePaymentMethod = async (id: string, updatedPaymentMethod: Partial<PaymentMethod>): Promise<void> => {
    if (!user?.id) {
      toast.error('Kullanıcı girişi yapmalısınız');
      return;
    }

    try {
      const cardNumber = updatedPaymentMethod.cardNumber?.replace(/\s/g, '') || '';
      const [month, year] = updatedPaymentMethod.expiryDate?.split('/') || ['', ''];

      const backendPaymentMethod = {
        cardTitle: updatedPaymentMethod.title,
        cardNumber: cardNumber,
        expiryMonth: month,
        expiryYear: year,
        holderName: updatedPaymentMethod.cardName || '',
        isDefault: updatedPaymentMethod.isDefault
      };

      await apiService.updateUserPaymentMethod(id, backendPaymentMethod);
      await loadUserData(); // Verileri yeniden yükle
      toast.success('Ödeme yöntemi başarıyla güncellendi');
    } catch (error) {
      console.error('Ödeme yöntemi güncellenirken hata:', error);
      toast.error('Ödeme yöntemi güncellenirken bir hata oluştu');
    }
  };

  const deletePaymentMethod = async (id: string): Promise<void> => {
    if (!user?.id) {
      toast.error('Kullanıcı girişi yapmalısınız');
      return;
    }

    try {
      await apiService.deleteUserPaymentMethod(id);
      await loadUserData(); // Verileri yeniden yükle
      toast.success('Ödeme yöntemi başarıyla silindi');
    } catch (error) {
      console.error('Ödeme yöntemi silinirken hata:', error);
      toast.error('Ödeme yöntemi silinirken bir hata oluştu');
    }
  };

  const setDefaultPaymentMethod = async (id: string): Promise<void> => {
    const paymentMethod = paymentMethods.find(pm => pm.id === id);
    if (paymentMethod) {
      await updatePaymentMethod(id, { ...paymentMethod, isDefault: true });
    }
  };

  const addOrder = (order: Omit<Order, 'id' | 'date'>): string => {
    const id = `ORD-${Date.now().toString().slice(-6)}`;
    const date = new Date().toISOString();
    // Set initial status to 'placed'
    const newOrder = { ...order, id, date, status: 'placed' as OrderStatus };
    setOrders(prev => [newOrder, ...prev]);
    return id;
  };

  // New function to cancel an order
  const cancelOrder = (orderId: string) => {
    setOrders(prev =>
      prev.map(order =>
        order.id === orderId ? { ...order, status: 'cancelled' as OrderStatus } : order
      )
    );
    toast.success('Order cancelled successfully.');
  };

  const getDefaultAddress = useCallback((): Address | null => {
    return addresses.find(addr => addr.isDefault) || (addresses.length > 0 ? addresses[0] : null);
  }, [addresses]);

  const getDefaultPaymentMethod = useCallback((): PaymentMethod | null => {
    return paymentMethods.find(pm => pm.isDefault) || (paymentMethods.length > 0 ? paymentMethods[0] : null);
  }, [paymentMethods]);

  const updateProfileInfo = (newProfileInfo: ProfileInfo) => {
    setProfileInfo(newProfileInfo);
  };

  const value: UserDataContextType = {
    addresses,
    paymentMethods,
    orders,
    profileInfo,
    isLoading,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    addPaymentMethod,
    updatePaymentMethod,
    deletePaymentMethod,
    setDefaultPaymentMethod,
    addOrder,
    cancelOrder,
    updateProfileInfo,
    getDefaultAddress,
    getDefaultPaymentMethod,
  };

  return (
    <UserDataContext.Provider value={value}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserData = () => {
  const context = useContext(UserDataContext);
  if (context === undefined) {
    throw new Error('useUserData must be used within a UserDataProvider');
  }
  return context;
};
