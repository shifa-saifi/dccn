'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import { jsPDF } from 'jspdf';
interface Certificate {
  certificateId: string;
  recipientName: string;
  courseName: string;
  issuerName: string;
  date?: string;
}

const MyCertificates = () => {
  const [open, setOpen] = useState(false);
    const [selectedCert, setSelectedCert] = useState<Certificate>({
      certificateId: '',
      recipientName: '',
      courseName: '',
      issuerName: '',
      date: '',
    });

  const certificates = [
    {
      id: 1,
      name: 'Blockchain Basics',
      issuedBy: 'XYZ University',
      date: '2023-05-01',
      recipient: 'John Doe',
      certificateId: 'CERT12345XYZ',
    },
    {
      id: 2,
      name: 'Advanced Blockchain',
      issuedBy: 'ABC Institute',
      date: '2023-08-15',
      recipient: 'Jane Smith',
      certificateId: 'CERT67890ABC',
    },
    {
      id: 3,
      name: 'Smart Contracts Mastery',
      issuedBy: 'DEF Academy',
      date: '2023-10-01',
      recipient: 'Alice Johnson',
      certificateId: 'CERT11122DEF',
    },
  ];

  // Open dialog and set selected certificate
  const handleOpen = (cert:any) => {
    setSelectedCert(cert);
    setOpen(true);
  };

  // Close dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Download certificate as PDF
  const handleDownload = () => {
    if (!selectedCert) return;
    const doc = new jsPDF();

    doc.setFont('times', 'bold');
    doc.setFontSize(24);
    doc.text('Certificate of Completion', 60, 40);

    doc.setFont('times', 'normal');
    doc.setFontSize(16);
    doc.text(`This is to certify that`, 80, 60);
    doc.setFontSize(22);
    doc.text(`${selectedCert.recipientName}`, 70, 75);
    doc.setFontSize(16);
    doc.text(`has successfully completed the`, 70, 90);
    doc.setFontSize(18);
    doc.text(`${selectedCert.courseName}`, 85, 105);
    doc.setFontSize(14);
    doc.text(`Issued by: ${selectedCert.issuerName}`, 70, 120);
    doc.text(`Date Issued: ${selectedCert.date}`, 70, 135);
    doc.text(`Certificate ID: ${selectedCert.certificateId}`, 70, 150);

    doc.setFontSize(14);
    doc.text(`_______________________       _______________________`, 50, 170);
    doc.text(`Authorized Signatory          Institution Seal`, 70, 180);

    doc.save(`${selectedCert.recipientName}_certificate.pdf`);
  };

  // Share certificate via email
  const handleEmail = () => {
    if (!selectedCert) return;
    const email = prompt('Enter recipient email:');
    if (email) {
      const subject = encodeURIComponent('Your Certificate is Ready');
      const body = encodeURIComponent(
        `Dear ${selectedCert.recipientName},\n\nYour certificate for "${selectedCert.courseName}" has been issued.\nCertificate ID: ${selectedCert.certificateId}\nIssued by: ${selectedCert.issuerName}\nDate: ${selectedCert.date}\n\nBest regards,\nCertification Team`
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        My Certificates
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Access and manage your blockchain-verified certificates.
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <AssignmentIndIcon fontSize="large" color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {cert.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  <strong>Issued by:</strong> {cert.issuedBy}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  <strong>Date:</strong> {cert.date}
                </Typography>
                <Button variant="contained" color="primary" fullWidth onClick={() => handleOpen(cert)}>
                  View Certificate
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  fullWidth
                  startIcon={<DownloadIcon />}
                  sx={{ mt: 1 }}
                  onClick={handleDownload}
                >
                  Download
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Certificate Dialog Box */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>
          Certificate Details
          <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', right: 10, top: 10 }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {selectedCert && (
            <Box sx={{ textAlign: 'center', p: 3, border: '2px solid #000', borderRadius: 2, boxShadow: 3 }}>
              <Typography variant="h5" fontWeight="bold">
                Certificate of Completion
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                This is to certify that
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="primary">
                {selectedCert.recipientName}
              </Typography>
              <Typography variant="body1">has successfully completed the</Typography>
              <Typography variant="h5" fontWeight="bold" color="secondary">
                {selectedCert.courseName}
              </Typography>
              <Typography variant="body2" sx={{ mt: 2 }}>
                Issued by: <strong>{selectedCert.issuerName}</strong>
              </Typography>
              <Typography variant="body2">
                Date Issued: <strong>{selectedCert.date}</strong>
              </Typography>
              <Typography variant="body2">
                Certificate ID: <strong>{selectedCert.certificateId}</strong>
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="primary" onClick={handleDownload}>
            Download
          </Button>
          <Button variant="contained" color="secondary" onClick={handleEmail}>
            Email Certificate
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MyCertificates;
