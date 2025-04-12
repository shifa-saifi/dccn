'use client';
import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Typography,
  CardContent,
  Avatar,
  Divider,
} from '@mui/material';

const ProfilePage = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  if (!user) return null;

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 4,
        background: 'linear-gradient(to right, #2196f3, #21cbf3)',
      }}
    >
      <Card sx={{ width: 400, p: 3, boxShadow: 5 }}>
        <Box display="flex" justifyContent="center" mb={2}>
          <Avatar sx={{ bgcolor: 'primary.main', width: 64, height: 64 }}>
            {user.name?.charAt(0)}
          </Avatar>
        </Box>
        <CardContent>
          <Typography variant="h5" textAlign="center" fontWeight="bold">
            {user.name}
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            {user.email}
          </Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body2" textAlign="center">
            <strong>Role:</strong> {user.userType}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProfilePage;
