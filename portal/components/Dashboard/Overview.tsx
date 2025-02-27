import React from 'react';
import { Grid, Card, CardContent, Typography, Box, LinearProgress } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

const Overview = () => {
  const summaryData = [
    {
      title: "Issued Certificates",
      icon: <AssignmentTurnedInIcon sx={{ color: '#4caf50', fontSize: 50, boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }} />,
      count: 1235,
      progress: 85, // Percentage of goal achieved
      background: 'linear-gradient(135deg, #388e3c, #66bb6a)',
    },
    {
      title: "Verified Certificates",
      icon: <VerifiedIcon sx={{ color: '#4caf50', fontSize: 50, boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }} />,
      count: 1050,
      progress: 75,
      background: 'linear-gradient(135deg, #388e3c,rgb(18, 86, 202))',
    },
    {
      title: "Revoked Certificates",
      icon: <CancelIcon sx={{ color: '#4caf50', fontSize: 50, boxShadow: '0px 4px 10px rgba(0,0,0,0.3)' }} />,
      count: 85,
      progress: 15,
      background: 'linear-gradient(135deg, #388e3c, #66bb6a)',
    },
  ];

  return (
    <Grid container spacing={4} justifyContent="center">
      {summaryData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              bgcolor: item.background,
              color: '#232d2',
              borderRadius: 3,
              boxShadow: '0px 5px 15px rgba(0,0,0,0.2)',
              border: '2px solid transparent',
              backgroundClip: 'padding-box',
              transition: 'transform 0.3s ease-in-out, border 0.3s ease-in-out',
              '&:hover': { 
                transform: 'scale(1.05)',
                border: `2px solid ${item.background.split(',')[1].trim()}`,
              },
            }}
          >
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <Box sx={{ mr: 2 }}>{item.icon}</Box>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="h3" fontWeight="bold" sx={{ mb: 1 }}>
                {item.count}
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                {item.title} progress
              </Typography>
              <LinearProgress
                variant="determinate"
                value={item.progress}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.2)',
                  height: 8,
                  borderRadius: 1,
                  transition: 'width 0.3s ease-in-out',
                  '& .MuiLinearProgress-bar': { backgroundColor: '#232d2' },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Overview;
