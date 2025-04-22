'use client';
import { Box, Typography, Container } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        Privacy Policy
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          1. Information Collection
        </Typography>
        <Typography variant="body1">
          We collect personal information such as your name, email address, and usage data to provide and improve our services.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          2. How We Use Your Information
        </Typography>
        <Typography variant="body1">
          Your data is used for account management, certificate processing, service improvement, and communication purposes.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          3. Data Sharing
        </Typography>
        <Typography variant="body1">
          We do not sell or rent your data. We may share it with trusted partners only when necessary for providing our services.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          4. Security
        </Typography>
        <Typography variant="body1">
          We implement appropriate technical and organizational measures to protect your personal data.
        </Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" fontWeight="bold" gutterBottom>
          5. Your Rights
        </Typography>
        <Typography variant="body1">
          You have the right to access, update, or delete your personal data. You may contact us for such requests.
        </Typography>
      </Box>

      <Typography variant="body2" color="text.secondary">
        Last updated: {new Date().toLocaleDateString()}
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
