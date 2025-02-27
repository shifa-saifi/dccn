'use client';
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';

const IssueCertificate = () => {
  const router = useRouter();
  const [certificate, setCertificate] = useState({
    recipientName: '',
    course: '',
    dateIssued: '',
    uniqueId: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCertificate({ ...certificate, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    if (!certificate.recipientName || !certificate.course || !certificate.dateIssued || !certificate.uniqueId) {
      alert('Please fill all fields before issuing the certificate.');
      return;
    }

    // Navigate to the created certificate page with certificate details
    const query = new URLSearchParams(certificate).toString();
    router.push(`/certificates/view?${query}`);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4A90E2, #0074D9)', // Modern gradient background
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Card
        sx={{
          maxWidth: 500,
          width: '100%',
          p: 4,
          borderRadius: '15px',
          boxShadow: '0px 5px 20px rgba(0,0,0,0.2)',
          background: '#fff',
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#0074D9' }}>
            Issue New Certificate
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Fill in the details to issue a new certificate and assign a unique identifier.
          </Typography>

          {/* Form Fields */}
          <TextField
            fullWidth
            label="Recipient Name"
            name="recipientName"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9', borderRadius: '5px' }}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Course/Program"
            name="course"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9', borderRadius: '5px' }}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Date Issued"
            name="dateIssued"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9', borderRadius: '5px' }}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Unique Identifier"
            name="uniqueId"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9', borderRadius: '5px' }}
            onChange={handleChange}
          />

          {/* Issue Certificate Button */}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
              '&:hover': { backgroundColor: '#005bb5' },
            }}
            onClick={handleSubmit}
          >
            Issue Certificate
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IssueCertificate;
