import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserWalletTabs from '@/components/UserWallets/UserWalletTabs';

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
      <UserWalletTabs />
    </Container>
  );
};

export default UserWallets;
