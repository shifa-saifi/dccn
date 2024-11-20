import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LinkIcon from '@mui/icons-material/Link';

const ShareCertificate = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Share Certificate
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Securely share your certificate using a QR code or a unique link.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Generate Shareable Link
              </Typography>
              <TextField fullWidth label="Certificate ID" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth startIcon={<LinkIcon />}>
                Generate Link
              </Button>
            </CardContent>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Generate QR Code
              </Typography>
              <TextField fullWidth label="Certificate ID" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="secondary" fullWidth startIcon={<QrCodeIcon />}>
                Generate QR Code
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShareCertificate;
