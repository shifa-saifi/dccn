import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import AccessControlTabs from '@/components/AccessControl/AccessControlTabs';

const AccessControl = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Access Control
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Manage roles, permissions, and organization access in the network.
        </Typography>
      </Box>
      <AccessControlTabs />
    </Container>
  );
};

export default AccessControl;
