import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import HelpSupportTabs from '@/components/HelpSupport/HelpSupportTabs';

const HelpSupport = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Box textAlign="center" mb={4}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Help & Support
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Find answers to common questions or get in touch with our support team.
        </Typography>
      </Box>
      <HelpSupportTabs />
    </Container>
  );
};

export default HelpSupport;
