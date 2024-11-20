import React from 'react';
import { Box, Typography, Card, CardContent, FormControlLabel, Checkbox, Button, Grid } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const NotificationPreferences = () => {
  const preferences = [
    { label: "Email Notifications", defaultChecked: true },
    { label: "SMS Notifications", defaultChecked: false },
    { label: "Push Notifications", defaultChecked: true },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Notification Preferences
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Set your preferences for receiving updates and notifications.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <NotificationsIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h6" fontWeight="bold">
                  Preferences
                </Typography>
              </Box>
              {preferences.map((pref, index) => (
                <FormControlLabel
                  key={index}
                  control={<Checkbox defaultChecked={pref.defaultChecked} color="primary" />}
                  label={pref.label}
                  sx={{ mb: 2 }}
                />
              ))}
              <Button variant="contained" color="primary" fullWidth>
                Save Preferences
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default NotificationPreferences;
