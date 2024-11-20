import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button, Grid } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SchoolIcon from '@mui/icons-material/School';

const AccountSettings = () => {
  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Account Settings
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Update your personal information and institution details.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <AccountCircleIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h6" fontWeight="bold">
                  Manage User Information
                </Typography>
              </Box>
              <TextField fullWidth label="Full Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Email Address" type="email" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Phone Number" type="tel" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth>
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <SchoolIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
                <Typography variant="h6" fontWeight="bold">
                  Institution Details
                </Typography>
              </Box>
              <TextField fullWidth label="Institution Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Institution Address" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Institution Contact" type="tel" variant="outlined" sx={{ mb: 2 }} />
              <Button variant="contained" color="primary" fullWidth>
                Save Changes
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountSettings;
