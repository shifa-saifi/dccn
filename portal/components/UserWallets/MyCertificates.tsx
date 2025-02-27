import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button, Paper } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const MyCertificates = () => {
  const certificates = [
    { id: 1, name: "Blockchain Basics", issuedBy: "XYZ University", date: "2023-05-01" },
    { id: 2, name: "Advanced Blockchain", issuedBy: "ABC Institute", date: "2023-08-15" },
    { id: 3, name: "Smart Contracts Mastery", issuedBy: "DEF Academy", date: "2023-10-01" },
  ];

  return (
    <Box sx={{ maxWidth: 1200, mx: 'auto', py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: '#0074D9' }}>
        My Certificates
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Access and manage your blockchain-verified certificates.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {certificates.map((cert, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              sx={{
                p: 3,
                boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
                borderRadius: 3,
                transition: 'transform 0.3s ease-in-out',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <AssignmentIndIcon sx={{ fontSize: 40, color: '#0074D9', mr: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {cert.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  Issued by: <strong>{cert.issuedBy}</strong>
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Date: <strong>{cert.date}</strong>
                </Typography>

                <Button variant="contained" color="primary" fullWidth sx={{ mb: 1 }}>
                  View Certificate
                </Button>
                <Button variant="outlined" color="secondary" fullWidth startIcon={<FileDownloadIcon />}>
                  Download
                </Button>
              </CardContent>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyCertificates;
