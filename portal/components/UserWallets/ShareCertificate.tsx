import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Grid, Paper } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';
import LinkIcon from '@mui/icons-material/Link';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const ShareCertificate = () => {
  const [certificateId, setCertificateId] = useState('');
  const [shareLink, setShareLink] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateLink = () => {
    if (!certificateId) return alert('Please enter a Certificate ID.');
    const generatedLink = `https://certificates.com/share/${certificateId}`;
    setShareLink(generatedLink);
  };

  const generateQRCode = () => {
    if (!certificateId) return alert('Please enter a Certificate ID.');
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      `https://certificates.com/share/${certificateId}`
    )}`;
    setQrCode(qrCodeUrl);
  };

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: '#0074D9' }}>
        Share Certificate
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Securely share your certificate using a QR code or a unique link.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Generate Shareable Link */}
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
                onClick={generateLink}
              >
                Generate Link
              </Button>

              {shareLink && (
                <Box mt={2} textAlign="center">
                  <Typography variant="body2" sx={{ wordBreak: 'break-word', mb: 1 }}>
                    {shareLink}
                  </Typography>
                  <Button variant="outlined" color="primary" size="small" startIcon={<ContentCopyIcon />} onClick={() => navigator.clipboard.writeText(shareLink)}>
                    Copy Link
                  </Button>
                </Box>
              )}
            </CardContent>
          </Paper>
        </Grid>

        {/* Generate QR Code */}
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
                onClick={generateQRCode}
              >
                Generate QR Code
              </Button>

              {qrCode && (
                <Box mt={2} textAlign="center">
                  <img src={qrCode} alt="QR Code" style={{ width: '150px', height: '150px' }} />
                </Box>
              )}
            </CardContent>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ShareCertificate;
