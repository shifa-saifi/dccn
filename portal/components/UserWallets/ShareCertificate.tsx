'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Snackbar,
} from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LinkIcon from '@mui/icons-material/Link';
import { QRCodeCanvas } from 'qrcode.react';

const ShareCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [shareableLink, setShareableLink] = useState('');
  const [qrCodeData, setQrCodeData] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleGenerateLink = () => {
    if (!certificateId) {
      setSnackbarMessage('Please enter a Certificate ID');
      setSnackbarOpen(true);
      return;
    }
    const generatedLink = `${window.location.origin}/certificate/view/${certificateId}`;
    setShareableLink(generatedLink);
    navigator.clipboard.writeText(generatedLink);
    setSnackbarMessage('Link generated and copied to clipboard!');
    setSnackbarOpen(true);
  };

  const handleGenerateQRCode = () => {
    if (!certificateId) {
      setSnackbarMessage('Please enter a Certificate ID');
      setSnackbarOpen(true);
      return;
    }
    const qrData = `${window.location.origin}/certificate/view/${certificateId}`;
    setQrCodeData(qrData);
  };

  return (
    <Box sx={{ p: 4 }}>
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
              <TextField
                fullWidth
                label="Certificate ID"
                variant="outlined"
                sx={{ mb: 2 }}
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<LinkIcon />}
                onClick={handleGenerateLink}
              >
                Generate Link
              </Button>
              {shareableLink && (
                <Typography variant="body2" sx={{ mt: 2, wordBreak: 'break-all' }}>
                  <strong>Link:</strong> <a href={shareableLink} target="_blank" rel="noopener noreferrer">{shareableLink}</a>
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Generate QR Code
              </Typography>
              <TextField
                fullWidth
                label="Certificate ID"
                variant="outlined"
                sx={{ mb: 2 }}
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
              />
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                startIcon={<QrCodeIcon />}
                onClick={handleGenerateQRCode}
              >
                Generate QR Code
              </Button>
              {qrCodeData && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <QRCodeCanvas value={qrCodeData} size={150} />
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default ShareCertificate;
