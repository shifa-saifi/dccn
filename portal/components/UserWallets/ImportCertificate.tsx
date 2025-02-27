import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid, Paper } from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';

const ImportCertificate = () => {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: '#0074D9' }}>
        Import Certificate
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Integrate existing certificates by entering their details.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 4,
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              borderRadius: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.02)' },
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Certificate Information
              </Typography>
              <TextField fullWidth label="Certificate ID" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Recipient Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Issuer Name" variant="outlined" sx={{ mb: 2 }} />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<FileUploadIcon />}
                sx={{ fontSize: '16px', fontWeight: 'bold', py: 1.5, mt: 2 }}
              >
                Import Certificate
              </Button>
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImportCertificate;
