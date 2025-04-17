'use client';
import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  MenuItem,
  CircularProgress,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    const { name, email, password, role } = formData;

    if (!name || !email || !password || !role) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.');
        return;
      }

      // Save JWT & user info
      localStorage.setItem('token', data.token);
      localStorage.setItem('currentUser', JSON.stringify(data.user));

      // Redirect based on role
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
      setError('⚠️ Server error. Try again later.');
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
        p: 2,
      }}
    >
      <Card sx={{ maxWidth: 450, width: '100%', p: 3, borderRadius: 3, boxShadow: 5 }}>
        <CardContent>
          <Typography variant="h4" fontWeight="bold" align="center" gutterBottom color="primary">
            Sign Up
          </Typography>

          <TextField
            fullWidth
            label="Full Name"
            name="name"
            variant="outlined"
            sx={{ mb: 2 }}
            onChange={handleChange}
          />
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
          <TextField
            fullWidth
            select
            label="User Type"
            name="role"
            variant="outlined"
            sx={{ mb: 3 }}
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Institution">Institution</MenuItem>
            <MenuItem value="Individual">Individual</MenuItem>
          </TextField>

          {error && (
            <Typography variant="body2" color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
            sx={{ py: 1.3, fontWeight: 'bold', borderRadius: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Create Account'}
          </Button>

          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{' '}
            <Button size="small" onClick={() => router.push('/login')}>
              Log In
            </Button>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupPage;
