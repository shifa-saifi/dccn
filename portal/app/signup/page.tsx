'use client';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  MenuItem,
} from '@mui/material';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userType: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const { name, email, password, userType } = formData;

    if (!name || !email || !password || !userType) {
      alert('Please fill in all fields.');
      return;
    }

    // You could call an API here; for now, store in localStorage
    localStorage.setItem('currentUser', JSON.stringify(formData));

    // Navigate based on user type
    switch (userType) {
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
        break;
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
            variant="outlined"
            type="email"
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
            name="userType"
            variant="outlined"
            sx={{ mb: 3 }}
            value={formData.userType}
            onChange={handleChange}
          >
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Institution">Institution</MenuItem>
            <MenuItem value="Individual">Individual</MenuItem>
          </TextField>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignup}
            sx={{ py: 1.3, fontWeight: 'bold', borderRadius: 2 }}
          >
            Create Account
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SignupPage;
