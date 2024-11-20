import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';

const IssueCertificate = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Issue New Certificate
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Fill in the details to issue a new certificate and assign a unique identifier.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Certificate Details
              </Typography>
              <TextField fullWidth label="Recipient Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Course/Program" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Date Issued" type="date" InputLabelProps={{ shrink: true }} variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Unique Identifier" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth>
                Issue Certificate
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default IssueCertificate;
