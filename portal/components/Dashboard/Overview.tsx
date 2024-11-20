import React from 'react';
import { Grid, Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

const Overview = () => {
  const summaryData = [
    {
      title: "Issued Certificates",
      icon: <AssignmentTurnedInIcon sx={{ color: '#fff', fontSize: 40 }} />,
      count: 1235,
      progress: 85, // Assume percentage of goal achieved
      background: 'linear-gradient(135deg, #6a1b9a, #ab47bc)',
    },
    {
      title: "Verified Certificates",
      icon: <VerifiedIcon sx={{ color: '#fff', fontSize: 40 }} />,
      count: 1050,
      progress: 75,
      background: 'linear-gradient(135deg, #0277bd, #29b6f6)',
    },
    {
      title: "Revoked Certificates",
      icon: <CancelIcon sx={{ color: '#fff', fontSize: 40 }} />,
      count: 85,
      progress: 15,
      background: 'linear-gradient(135deg, #d32f2f, #ef5350)',
    },
  ];

  return (
    <Grid container spacing={4}>
      {summaryData.map((item, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ bgcolor: item.background, color: '#51c50d', borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Box sx={{ mr: 2 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="h3" fontWeight="bold">
                {item.count}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {item.title} progress
              </Typography>
              <LinearProgress variant="determinate" value={item.progress} sx={{ bgcolor: '#fff3', height: 8, borderRadius: 1 }} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Overview;
