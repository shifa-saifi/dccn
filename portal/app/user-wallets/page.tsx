import React, { lazy, Suspense } from 'react';
import { Container, Typography, Box } from '@mui/material';

const UserWalletTabs = lazy(() => import('@/components/UserWallets/UserWalletTabs'));

const UserWallets = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          User Wallets
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage, share, and import your certificates with ease.
        </Typography>
      </Box>
      <Suspense fallback={<div>Loading...</div>}>
        <UserWalletTabs />
      </Suspense>
    </Container>
  );
};

export default UserWallets;
