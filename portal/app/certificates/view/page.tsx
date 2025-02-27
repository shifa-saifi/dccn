'use client';

import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Paper, Grid, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';

const CertificateView = () => {
    const searchParams = useSearchParams();
    const [certificate, setCertificate] = useState({
        recipientName: '',
        course: '',
        dateIssued: '',
        uniqueId: '',
    });

    const [emailDialogOpen, setEmailDialogOpen] = useState(false);
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (searchParams) {
            setCertificate({
                recipientName: searchParams.get('recipientName') || '',
                course: searchParams.get('course') || '',
                dateIssued: searchParams.get('dateIssued') || '',
                uniqueId: searchParams.get('uniqueId') || '',
            });
        }
    }, [searchParams]);

    const downloadPDF = async () => {
        const certificateElement = document.getElementById('certificate-content');
        if (!certificateElement) return;

        const canvas = await html2canvas(certificateElement, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('landscape', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 10, 10, 270, 180);
        pdf.save(`${certificate.recipientName}_certificate.pdf`);
    };

    const handlePrint = async () => {
        const certificateElement = document.getElementById('certificate-content');
        if (!certificateElement) return;

        const canvas = await html2canvas(certificateElement, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const newWindow = window.open('', '_blank');
        newWindow.document.write(`<img src="${imgData}" style="width:100%">`);
        newWindow.document.close();
        newWindow.print();
    };

    const handleEmailDialogOpen = () => setEmailDialogOpen(true);

    const handleEmailDialogClose = () => setEmailDialogOpen(false);

    const sendEmail = async () => {
        if (!email) {
            alert('Please enter a valid email address');
            return;
        }

        const certificateElement = document.getElementById('certificate-content');
        if (!certificateElement) return;

        const canvas = await html2canvas(certificateElement, { scale: 2 });
        const imgData = canvas.toDataURL('image/png');

        const emailSubject = encodeURIComponent('Your Certificate is Ready');
        const emailBody = encodeURIComponent(`Dear ${certificate.recipientName},\n\nYour certificate for "${certificate.course}" has been issued.\nCertificate ID: ${certificate.uniqueId}\nDate Issued: ${certificate.dateIssued}\n\nBest regards,\nCertification Team`);
        const mailtoLink = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;
        
        window.location.href = mailtoLink;
        setEmailDialogOpen(false);
    };

    return (
        <Box textAlign="center" sx={{ py: 6, background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)', minHeight: '100vh' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                <Typography variant="h3" fontWeight="bold" color='black' gutterBottom>
                    Certificate of Completion
                </Typography>

                <Paper
                    id="certificate-content"
                    elevation={5}
                    sx={{
                        border: '10px solid transparent',
                        borderImage: 'linear-gradient(to right, #d4af37, #f5c518) 1',
                        padding: '50px',
                        maxWidth: '900px',
                        margin: 'auto',
                        textAlign: 'center',
                        background: 'white',
                        boxShadow: '0px 10px 30px rgba(0,0,0,0.3)',
                        position: 'relative',
                        backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
                        fontFamily: 'Georgia, serif',
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" sx={{ color: '#555', mb: 2 }}>
                        Blockchain Certification Network
                    </Typography>
                    <img src="/logo.png" alt="Institution Logo" width="100px" />

                    <Typography variant="h5" fontWeight="bold" sx={{ mt: 3 }}>
                        This is to certify that
                    </Typography>
                    <Typography variant="h3" fontWeight="bold" color="primary" sx={{ fontFamily: 'Cursive', mt: 2 }}>
                        {certificate.recipientName}
                    </Typography>
                    <Typography variant="h5">has successfully completed the</Typography>
                    <Typography variant="h4" fontWeight="bold" color="secondary" sx={{ fontFamily: 'Serif', mt: 1 }}>
                        {certificate.course}
                    </Typography>

                    <Typography variant="h6" sx={{ mt: 2 }}>
                        Issued on: {certificate.dateIssued}
                    </Typography>
                    <Typography variant="h6">Certificate ID: {certificate.uniqueId}</Typography>

                    <Box sx={{ mt: 4 }}>
                        <Typography variant="h6" sx={{ fontFamily: 'Cursive', fontSize: '20px' }}>
                            _______________________
                        </Typography>
                        <Typography>Authorized Signatory</Typography>
                    </Box>

                    <motion.img
                        src="/gold-seal.png"
                        alt="Certificate Seal"
                        style={{ position: 'absolute', bottom: '-30px', right: '30px', width: '80px' }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2 }}
                    />
                </Paper>

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
                        <Button variant="contained" color="success" onClick={handleEmailDialogOpen}>
                            Send via Email
                        </Button>
                    </Grid>
                </Grid>
            </motion.div>

            <Dialog open={emailDialogOpen} onClose={handleEmailDialogClose}>
                <DialogTitle>Send Certificate via Email</DialogTitle>
                <DialogContent>
                    <TextField autoFocus margin="dense" label="Recipient Email" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEmailDialogClose} color="secondary">Cancel</Button>
                    <Button onClick={sendEmail} color="primary">Send</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CertificateView;
