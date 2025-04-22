// For app router: app/terms-of-service/page.tsx
'use client';
import { Box, Typography, Container } from '@mui/material';

const TermsOfService = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Terms of Service
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Please read these terms of service ("terms", "terms of service") carefully before using our platform.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1">
          By accessing or using our service, you agree to be bound by these terms. If you disagree with any part of the terms, then you may not access the service.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. Use of the Platform
        </Typography>
        <Typography variant="body1">
          You agree to use the platform only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Modification of Terms
        </Typography>
        <Typography variant="body1">
          We reserve the right to change or modify these terms at any time. It is your responsibility to review the terms regularly.
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default TermsOfService;
