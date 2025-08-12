import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';
import apiService, { User } from '@/services/apiService';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  isInitializing: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  // Check for existing session on app load
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('auth_user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        // isAdmin değerini boolean'a çevir
        const processedUser = {
          ...parsedUser,
          isAdmin: Boolean(parsedUser.isAdmin)
        };
        setUser(processedUser);
      }
    } catch (error) {
      console.error('Error loading user from localStorage:', error);
      localStorage.removeItem('auth_user');
    } finally {
      setIsInitializing(false);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Backend API login endpoint'ini kullan
      const userData = await apiService.login(email, password);
      
      // isAdmin değerini boolean'a çevir
      const processedUserData = {
        ...userData,
        isAdmin: Boolean(userData.isAdmin)
      };
      
      setUser(processedUserData);
      localStorage.setItem('auth_user', JSON.stringify(processedUserData));
      toast({ title: 'Login successful', description: 'You are now logged in.' });
      setIsLoading(false);
      return true;
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Login failed', description: error.message || 'Login failed!' });
      setIsLoading(false);
      return false;
    }
  };

  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Önce mevcut kullanıcıları kontrol et
      const users = await apiService.getAllUsers();
      const existingUser = users.find(u => u.email === email);
      
      if (existingUser) {
        throw new Error('This email address is already in use');
      }
      
      // Yeni kullanıcı oluştur
      const userData = await apiService.createUser({ email, password, name, isAdmin: false });
      
      // isAdmin değerini boolean'a çevir
      const processedUserData = {
        ...userData,
        isAdmin: Boolean(userData.isAdmin)
      };
      
      setUser(processedUserData);
      localStorage.setItem('auth_user', JSON.stringify(processedUserData));
      toast({ title: 'Registration successful', description: 'Your account has been created.' });
      setIsLoading(false);
      return true;
    } catch (error: any) {
      toast({ variant: 'destructive', title: 'Registration failed', description: error.message || 'Registration failed!' });
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('auth_user');
    toast({ title: 'Logged out', description: 'You have been logged out.' });
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading, isInitializing }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};