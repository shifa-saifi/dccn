import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';

const RoleBasedAccess = () => {
  const roles = ["Admin", "Editor", "Viewer"]; // Example roles
  const permissions = ["Read", "Write", "Delete"]; // Example permissions

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Manage Roles & Permissions
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Assign roles and permissions to control access.
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Role Assignment
              </Typography>
              <TextField fullWidth label="User Email" variant="outlined" sx={{ mb: 2 }} />
              <Select fullWidth defaultValue="" displayEmpty variant="outlined" sx={{ mb: 2 }}>
                <MenuItem value="" disabled>
                  Select Role
                </MenuItem>
                {roles.map((role, index) => (
                  <MenuItem key={index} value={role}>
                    {role}
                  </MenuItem>
                ))}
              </Select>
              <Select fullWidth defaultValue="" displayEmpty variant="outlined" sx={{ mb: 2 }}>
                <MenuItem value="" disabled>
                  Select Permission
                </MenuItem>
                {permissions.map((perm, index) => (
                  <MenuItem key={index} value={perm}>
                    {perm}
                  </MenuItem>
                ))}
              </Select>
              <Button variant="contained" color="primary" fullWidth startIcon={<SecurityIcon />}>
                Assign Role
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RoleBasedAccess;
