import React, { lazy, Suspense } from 'react';
import { Container, Typography, Box } from '@mui/material';

const ReportsTabs = lazy(() => import('@/components/ReportsAnalytics/ReportsTabs'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <ReportsTabs />
      </Suspense>
    </Container>
  );
};

export default ReportsAnalytics;
