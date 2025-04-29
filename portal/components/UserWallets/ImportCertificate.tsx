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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { jsPDF } from 'jspdf';

interface Certificate {
  certificateId: string;
  recipientName: string;
  issuerName: string;
}

const ImportCertificate: React.FC = () => {
  const [certificate, setCertificate] = useState<Certificate>({
    certificateId: '',
    recipientName: '',
    issuerName: '',
  });

  const [importedCertificate, setImportedCertificate] = useState<Certificate | null>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCertificate((prev) => ({ ...prev, [name]: value }));
  };

  const handleImport = () => {
    if (!certificate.certificateId || !certificate.recipientName || !certificate.issuerName) {
      setSnackbarMessage('Please fill all fields before importing.');
      setSnackbarOpen(true);
      return;
    }

    setImportedCertificate(certificate);
    setDialogOpen(true);

    setSnackbarMessage('Certificate imported successfully!');
    setSnackbarOpen(true);

    setCertificate({
      certificateId: '',
      recipientName: '',
      issuerName: '',
    });
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDownload = () => {
    if (!importedCertificate) return;

    const doc = new jsPDF();
    doc.setFont('times', 'bold');
    doc.setFontSize(24);
    doc.text('Certificate of Completion', 60, 40);

    doc.setFont('times', 'normal');
    doc.setFontSize(16);
    doc.text(`This is to certify that`, 80, 60);
    doc.setFontSize(22);
    doc.text(`${importedCertificate.recipientName}`, 70, 75);
    doc.setFontSize(16);
    doc.text(`has successfully completed`, 70, 90);
    doc.setFontSize(18);
    doc.text(`Certification ID: ${importedCertificate.certificateId}`, 70, 105);
    doc.setFontSize(14);
    doc.text(`Issued by: ${importedCertificate.issuerName}`, 70, 120);

    doc.setFontSize(14);
    doc.text(`_______________________       _______________________`, 50, 150);
    doc.text(`Authorized Signatory          Institution Seal`, 70, 160);

    doc.save(`${importedCertificate.recipientName}_certificate.pdf`);
  };

  const handleEmail = () => {
    if (!importedCertificate) return;

    const email = prompt('Enter recipient email:');
    if (email) {
      const subject = encodeURIComponent('Your Imported Certificate is Ready');
      const body = encodeURIComponent(
        `Dear ${importedCertificate.recipientName},\n\nYour certificate has been successfully imported.\nCertificate ID: ${importedCertificate.certificateId}\nIssued by: ${importedCertificate.issuerName}\n\nBest regards,\nCertification Team`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

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
              <TextField
                fullWidth
                label="Certificate ID"
                name="certificateId"
                variant="outlined"
                sx={{ mb: 2 }}
                value={certificate.certificateId}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Recipient Name"
                name="recipientName"
                variant="outlined"
                sx={{ mb: 2 }}
                value={certificate.recipientName}
                onChange={handleChange}
              />
              <TextField
                fullWidth
                label="Issuer Name"
                name="issuerName"
                variant="outlined"
                sx={{ mb: 2 }}
                value={certificate.issuerName}
                onChange={handleChange}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                startIcon={<FileUploadIcon />}
                onClick={handleImport}
              >
                Import Certificate
              </Button>
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

      <Dialog open={dialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="sm">
        <DialogTitle>
          Imported Certificate
          <IconButton
            aria-label="close"
            onClick={handleCloseDialog}
            sx={{ position: 'absolute', right: 10, top: 10 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {importedCertificate && (
            <Box sx={{ textAlign: 'center', p: 3, border: '2px solid #000', borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" fontWeight="bold">
                Certificate of Completion
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                This is to certify that
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                {importedCertificate.recipientName}
              </Typography>
              <Typography variant="body1">has successfully completed the</Typography>
              <Typography variant="h5" fontWeight="bold" color="secondary">
                Certification ID: {importedCertificate.certificateId}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Issued by: <strong>{importedCertificate.issuerName}</strong>
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleDownload} startIcon={<DownloadIcon />}>
            Download
          </Button>
          <Button variant="contained" color="secondary" onClick={handleEmail} startIcon={<EmailIcon />}>
            Email Certificate
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ImportCertificate;
