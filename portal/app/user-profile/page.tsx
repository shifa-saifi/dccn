import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserProfileTabs from '@/components/UserProfile/UserProfileTabs';

const UserProfile = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          User Profile
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage your account information and notification preferences.
        </Typography>
      </Box>
      <UserProfileTabs />
    </Container>
  );
};

export default UserProfile;
