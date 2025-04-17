import React, { lazy, Suspense } from 'react';
import { Container, Typography, Box } from '@mui/material';

const CertificationTabs = lazy(() => import('@/components/CertificationManagement/CertificationTabs'));

const CertificationManagement = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Certification Management
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Issue, verify, and revoke certifications with ease.
        </Typography>
      </Box>
      <Suspense fallback={<Typography>Loading...</Typography>}>
        <CertificationTabs />
      </Suspense>
    </Container>
  );
};

export default CertificationManagement;
