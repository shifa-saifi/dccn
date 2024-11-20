import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import CertificationTabs from '@/components/CertificationManagement/CertificationTabs';

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
      <CertificationTabs />
    </Container>
  );
};

export default CertificationManagement;
