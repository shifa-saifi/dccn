import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

const UsageReports = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Usage Reports
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Get insights on certificate usage and verification rates.
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <BarChartIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h6" fontWeight="bold">
                  Certificate Usage Insights
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Detailed information on how certificates are being used.
              </Typography>
              {/* Placeholder for chart or visualization */}
              <Box sx={{ height: 200, bgcolor: '#f5f5f5', mt: 2, borderRadius: 2 }}>
                {/* Replace this Box with a chart component */}
                <Typography align="center" sx={{ pt: 8 }}>
                  Certificate Usage Chart
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <DonutLargeIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h6" fontWeight="bold">
                  Verification Rates
                </Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                See how often certificates are verified by third parties.
              </Typography>
              {/* Placeholder for chart or visualization */}
              <Box sx={{ height: 200, bgcolor: '#f5f5f5', mt: 2, borderRadius: 2 }}>
                {/* Replace this Box with a chart component */}
                <Typography align="center" sx={{ pt: 8 }}>
                  Verification Rates Chart
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UsageReports;
