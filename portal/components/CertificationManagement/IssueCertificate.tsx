'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CircularProgress,
} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext'; // assuming context exists

const IssueCertificate = () => {
  const router = useRouter();
  const { user } = useAuth() || {};
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [certificate, setCertificate] = useState({
    recipientName: '',
    recipientEmail: '',
    course: '',
    dateIssued: '',
    uniqueId: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCertificate({ ...certificate, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    const { recipientName, recipientEmail, course, dateIssued, uniqueId } = certificate;

    if (!recipientName || !recipientEmail || !course || !dateIssued || !uniqueId) {
      setErrorMsg('Please fill all fields before issuing the certificate.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setErrorMsg('You must be logged in to issue a certificate.');
      return;
    }

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/cert/issue', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          recipientName,
          recipientEmail,
          course,
          issueDate: dateIssued,
          certId: uniqueId,
          issuerEmail: user?.email, // mapping issuer to certificate
        }),
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        alert('Certificate issued successfully!');
        router.push('/certificates/list');
      } else {
        setErrorMsg(data?.error || 'Something went wrong. Try again.');
      }
    } catch (error) {
      console.error('Error issuing certificate:', error);
      setErrorMsg('Server error. Try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4A90E2, #0074D9)',
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

          <TextField
            fullWidth
            label="Recipient Name"
            name="recipientName"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9' }}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Recipient Email"
            name="recipientEmail"
            type="email"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9' }}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Course/Program"
            name="course"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9' }}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Date Issued"
            name="dateIssued"
            type="date"
            InputLabelProps={{ shrink: true }}
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9' }}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Unique Identifier"
            name="uniqueId"
            variant="outlined"
            sx={{ mb: 2, backgroundColor: '#f9f9f9' }}
            onChange={handleChange}
          />

          {errorMsg && (
            <Typography color="error" sx={{ mb: 2 }}>
              {errorMsg}
            </Typography>
          )}

          <Button
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
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
            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Issue Certificate'}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IssueCertificate;
