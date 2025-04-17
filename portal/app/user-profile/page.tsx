import React, { lazy, Suspense } from 'react';
import { Container, Typography, Box } from '@mui/material';

const UserProfileTabs = lazy(() => import('@/components/UserProfile/UserProfileTabs'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfileTabs />
      </Suspense>
    </Container>
  );
};

export default UserProfile;
