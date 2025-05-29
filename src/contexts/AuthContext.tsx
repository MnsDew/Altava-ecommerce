
import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '@/types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: Partial<User> & { password: string }) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth token and validate
    const storedUser = localStorage.getItem('altava_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Mock authentication - in real app, this would call your backend
      const mockUsers = [
        { id: '1', email: 'admin@altava.com', name: 'Admin User', role: 'admin' as const },
        { id: '2', email: 'vendor@altava.com', name: 'Vendor User', role: 'vendor' as const, isApproved: true },
        { id: '3', email: 'customer@altava.com', name: 'Customer User', role: 'customer' as const },
      ];

      const foundUser = mockUsers.find(u => u.email === email);
      if (foundUser && password === 'password') {
        const userData = {
          ...foundUser,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${foundUser.name}`,
          createdAt: new Date().toISOString(),
        };
        setUser(userData);
        localStorage.setItem('altava_user', JSON.stringify(userData));
      } else {
        throw new Error('Invalid credentials');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (userData: Partial<User> & { password: string }) => {
    setIsLoading(true);
    try {
      // Mock registration
      const newUser: User = {
        id: Date.now().toString(),
        email: userData.email!,
        name: userData.name!,
        role: userData.role || 'customer',
        avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.name}`,
        createdAt: new Date().toISOString(),
        isApproved: userData.role === 'vendor' ? false : true,
      };
      setUser(newUser);
      localStorage.setItem('altava_user', JSON.stringify(newUser));
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('altava_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
