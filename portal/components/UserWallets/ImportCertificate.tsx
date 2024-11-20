import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const ImportCertificate = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Import Certificate
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Integrate existing certificates by entering their details.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Certificate Information
              </Typography>
              <TextField fullWidth label="Certificate ID" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Recipient Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Issuer Name" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth startIcon={<FileUploadIcon />}>
                Import Certificate
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImportCertificate;
