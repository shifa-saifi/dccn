import React from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const MyCertificates = () => {
  const certificates = [
    { id: 1, name: "Blockchain Basics", issuedBy: "XYZ University", date: "2023-05-01" },
    { id: 2, name: "Advanced Blockchain", issuedBy: "ABC Institute", date: "2023-08-15" },
    // Add more sample certificates here
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        My Certificates
      </Typography>
      <Grid container spacing={4}>
        {certificates.map((cert, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <CardContent>
                <Box display="flex" alignItems="center" mb={2}>
                  <AssignmentIndIcon fontSize="large" color="primary" sx={{ mr: 2 }} />
                  <Typography variant="h6" fontWeight="bold">
                    {cert.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  Issued by: {cert.issuedBy}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Date: {cert.date}
                </Typography>
                <Button variant="contained" color="primary" fullWidth>
                  View Certificate
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyCertificates;
