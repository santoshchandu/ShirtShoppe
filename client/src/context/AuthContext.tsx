import React, { createContext, useContext, useState } from 'react';
import { User, MOCK_USERS } from '@/lib/mockData';
import { toast } from '@/hooks/use-toast';
import { useLocation } from 'wouter';

interface AuthContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [, setLocation] = useLocation();

  const login = (email: string) => {
    const foundUser = MOCK_USERS.find(u => u.email === email);
    if (foundUser) {
      setUser(foundUser);
      toast({ title: "Welcome back", description: `Logged in as ${foundUser.name}` });
      if (foundUser.role === 'admin') {
        setLocation('/admin');
      } else {
        setLocation('/');
      }
    } else {
      toast({ title: "Login failed", description: "User not found", variant: "destructive" });
    }
  };

  const logout = () => {
    setUser(null);
    setLocation('/');
    toast({ title: "Logged out" });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAdmin: user?.role === 'admin' }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
