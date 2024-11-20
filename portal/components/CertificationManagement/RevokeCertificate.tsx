import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';

const RevokeCertificate = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Revoke Certificate
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Enter the unique identifier of the certificate you wish to revoke.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revoke Certificate
              </Typography>
              <TextField fullWidth label="Certificate ID" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="secondary" fullWidth startIcon={<CancelIcon />}>
                Revoke Certificate
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RevokeCertificate;
