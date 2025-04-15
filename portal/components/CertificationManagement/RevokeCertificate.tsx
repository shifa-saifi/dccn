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
import CancelIcon from '@mui/icons-material/Cancel';

const RevokeCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRevoke = async () => {
    if (!certificateId.trim()) {
      setFeedback('Please enter a valid Certificate ID.');
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) {
      setFeedback('🔐 You must be logged in to revoke a certificate.');
      return;
    }

    setLoading(true);
    setFeedback('');

    try {
      const res = await fetch('/api/cert/revoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ certificateId: certificateId.trim() }),
      });

      const data = await res.json();

      if (res.ok && data?.success) {
        setFeedback(`✅ Certificate ID ${certificateId} has been successfully revoked.`);
        setCertificateId('');
      } else {
        setFeedback(data?.error || '❌ Failed to revoke certificate.');
      }
    } catch (err) {
      setFeedback('⚠️ Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #FF6B6B, #FF3B3B)',
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
          boxShadow: '0px 5px 20px rgba(0,0,0,0.3)',
          background: '#fff',
          textAlign: 'center',
        }}
      >
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#D32F2F' }}>
            Revoke Certificate
          </Typography>
          <Typography variant="body1" color="textSecondary" sx={{ mb: 3 }}>
            Enter the unique identifier of the certificate you wish to revoke.
          </Typography>

          <TextField
            fullWidth
            label="Certificate ID"
            variant="outlined"
            sx={{ mb: 3, backgroundColor: '#f9f9f9', borderRadius: '5px' }}
            value={certificateId}
            onChange={(e) => setCertificateId(e.target.value)}
          />

          <Button
            variant="contained"
            color="secondary"
            fullWidth
            startIcon={<CancelIcon />}
            sx={{
              py: 1.5,
              fontSize: '16px',
              fontWeight: 'bold',
              borderRadius: '10px',
              transition: 'all 0.3s ease',
              backgroundColor: '#D32F2F',
              '&:hover': { backgroundColor: '#B71C1C' },
            }}
            onClick={handleRevoke}
            disabled={loading}
          >
            {loading ? <CircularProgress size={22} sx={{ color: 'white' }} /> : 'Revoke Certificate'}
          </Button>

          {feedback && (
            <Typography
              variant="body1"
              sx={{ mt: 3, color: feedback.includes('✅') ? 'green' : 'red' }}
            >
              {feedback}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default RevokeCertificate;
