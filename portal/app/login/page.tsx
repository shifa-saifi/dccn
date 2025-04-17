'use client';
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    const { email, password } = credentials;
  
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
  
    setLoading(true);
    setError('');
  
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await res.json();
  
      if (!res.ok || data.error || !data.token) {
        setError(data.error || 'Login failed. Please try again.');
        return;
      }
  
      // ✅ Store login details
      localStorage.setItem('token', data.token);
      localStorage.setItem('currentUser', JSON.stringify(data.user));
  
      // ✅ Notify app (e.g. Navbar) of login
      window.dispatchEvent(new Event('userChanged'));
  
      // ✅ Redirect based on user role
      switch (data.user.role) {
        case 'Admin':
          router.push('/dashboard');
          break;
        case 'Institution':
          router.push('/certification-management');
          break;
        case 'Individual':
          router.push('/user-wallets');
          break;
        default:
          router.push('/');
      }
    } catch (err) {
      console.error('Login failed:', err);
      setError('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #42a5f5, #1e88e5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 3,
      }}
    >
      <Card sx={{ maxWidth: 450, width: '100%', p: 4, borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom color="primary">
            Login
          </Typography>

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            sx={{ mb: 2 }}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            sx={{ mb: 2 }}
            onChange={handleChange}
          />

          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{ py: 1.3, fontWeight: 'bold', borderRadius: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Log In'}
          </Button>

          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don&apos;t have an account?{' '}
            <Button size="small" onClick={() => router.push('/signup')}>
              Sign Up
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
