'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper, Grid } from '@mui/material';
import { jsPDF } from 'jspdf';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

// Enhanced Styles
const certificateStyle = {
  border: '5px solid #d4af37', // Gold border
  padding: '40px',
  maxWidth: '800px',
  margin: 'auto',
  textAlign: 'center',
  background: 'linear-gradient(white, #f9f9f9)', // Soft gradient background
  boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
  position: 'relative',
};

const sealStyle = {
  position: 'absolute',
  bottom: '-30px',
  right: '30px',
  width: '80px',
};

const CertificateView = () => {
  const searchParams = useSearchParams();
  const [certificate, setCertificate] = useState({
    recipientName: '',
    course: '',
    dateIssued: '',
    uniqueId: '',
  });

  useEffect(() => {
    if (searchParams) {
      const recipientName = searchParams.get('recipientName');
      const course = searchParams.get('course');
      const dateIssued = searchParams.get('dateIssued');
      const uniqueId = searchParams.get('uniqueId');

      if (recipientName && course && dateIssued && uniqueId) {
        setCertificate({
          recipientName,
          course,
          dateIssued,
          uniqueId,
        });
      }
    }
  }, [searchParams]);

  // Download Certificate as PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFont('times', 'bold');
    doc.setFontSize(24);
    doc.text('Certificate of Completion', 70, 40);

    doc.setFont('times', 'normal');
    doc.setFontSize(16);
    doc.text(`This is to certify that`, 85, 60);
    doc.setFontSize(22);
    doc.text(`${certificate.recipientName}`, 70, 75);
    doc.setFontSize(16);
    doc.text(`has successfully completed the`, 70, 90);
    doc.setFontSize(18);
    doc.text(`${certificate.course}`, 85, 105);
    doc.setFontSize(14);
    doc.text(`Issued on: ${certificate.dateIssued}`, 70, 120);
    doc.text(`Certificate ID: ${certificate.uniqueId}`, 70, 135);

    doc.setFontSize(14);
    doc.text(`_______________________       _______________________`, 50, 170);
    doc.text(`Authorized Signatory          Institution Seal`, 70, 180);

    doc.save(`${certificate.recipientName}_certificate.pdf`);
  };

  // Print Certificate
  const handlePrint = () => {
    window.print();
  };

  // Share Certificate via Email
  const shareViaEmail = () => {
    const emailSubject = encodeURIComponent('Your Certificate is Ready');
    const emailBody = encodeURIComponent(
      `Dear ${certificate.recipientName},\n\nYour certificate for "${certificate.course}" has been issued.\nCertificate ID: ${certificate.uniqueId}\nDate Issued: ${certificate.dateIssued}\n\nBest regards,\nCertification Team`
    );
    window.location.href = `mailto:?subject=${emailSubject}&body=${emailBody}`;
  };

  return (
    <Box textAlign="center" sx={{ py: 6 }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Certificate of Completion
        </Typography>

        <Paper elevation={5} sx={certificateStyle}>
          {/* Institution Name & Logo */}
          <Typography variant="h6" fontWeight="bold" sx={{ color: '#555', mb: 2 }}>
            Blockchain Certification Network
          </Typography>
          <img src="/logo.png" alt="Institution Logo" width="100px" />

          <Typography variant="h5" fontWeight="bold" sx={{ mt: 3 }}>
            This is to certify that
          </Typography>

          {/* Recipient Name with Fancy Styling */}
          <Typography variant="h3" fontWeight="bold" color="primary" sx={{ fontFamily: 'Cursive', mt: 2 }}>
            {certificate.recipientName}
          </Typography>

          <Typography variant="h5">has successfully completed the</Typography>

          {/* Course Name with Special Font */}
          <Typography variant="h4" fontWeight="bold" color="secondary" sx={{ fontFamily: 'Serif', mt: 1 }}>
            {certificate.course}
          </Typography>

          <Typography variant="h6" sx={{ mt: 2 }}>
            Issued on: {certificate.dateIssued}
          </Typography>
          <Typography variant="h6">Certificate ID: {certificate.uniqueId}</Typography>

          {/* Signatures */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" sx={{ fontFamily: 'Cursive', fontSize: '20px' }}>
              _______________________
            </Typography>
            <Typography>Authorized Signatory</Typography>
          </Box>

          {/* Gold Seal */}
          <motion.img
            src="/gold-seal.png"
            alt="Certificate Seal"
            style={sealStyle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
        </Paper>

        {/* Action Buttons */}
        <Grid container spacing={2} justifyContent="center" sx={{ mt: 4 }}>
          <Grid item>
            <Button variant="contained" color="primary" onClick={downloadPDF}>
              Download PDF
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="secondary" onClick={handlePrint}>
              Print
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="success" onClick={shareViaEmail}>
              Share via Email
            </Button>
          </Grid>
        </Grid>
      </motion.div>
    </Box>
  );
};

export default CertificateView;
