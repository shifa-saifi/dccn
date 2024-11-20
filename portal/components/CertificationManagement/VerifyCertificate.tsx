import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const VerifyCertificate = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Verify Certificate
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Enter the certificate ID to verify its authenticity instantly.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Verification Portal
              </Typography>
              <TextField fullWidth label="Certificate ID" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth startIcon={<CheckCircleOutlineIcon />}>
                Verify Now
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default VerifyCertificate;
