'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded: any = jwtDecode(token);
        setUser(decoded);
      } catch (error) {
        console.error('Invalid token:', error);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  }, []);

  const login = (token: string) => {
    try {
      const decoded: any = jwtDecode(token);
      localStorage.setItem('token', token);
      setUser(decoded);
    } catch (error) {
      console.error('Login failed: Invalid token');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
