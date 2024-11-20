import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';
import DashboardTabs from '@/components/Dashboard/DashboradTabs';

const Dashboard = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Welcome to Your Dashboard
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Get insights on issued, verified, and revoked certificates, and keep track of recent activities.
        </Typography>
      </Box>
      <Divider sx={{ mb: 4 }} />
      <DashboardTabs />
    </Container>
  );
};

export default Dashboard;
