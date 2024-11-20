import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import ReportsTabs from '@/components/ReportsAnalytics/ReportsTabs';

const ReportsAnalytics = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Reports and Analytics
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Access insights and audit trails for certification activities.
        </Typography>
      </Box>
      <ReportsTabs />
    </Container>
  );
};

export default ReportsAnalytics;
