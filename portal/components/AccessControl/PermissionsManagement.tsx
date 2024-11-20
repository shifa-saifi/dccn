import React from 'react';
import { Box, Typography, Card, CardContent, Button, Grid, List, ListItem, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

const PermissionsManagement = () => {
  const requests = [
    { id: 1, organization: "ABC Corporation", access: "Read Access" },
    { id: 2, organization: "XYZ University", access: "Write Access" },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Manage Permissions
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Approve or revoke third-party access to the platform.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {requests.map((request, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <CardContent>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={request.organization}
                      secondary={`Requested Access: ${request.access}`}
                    />
                  </ListItem>
                </List>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      startIcon={<CheckCircleIcon />}
                    >
                      Approve
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      startIcon={<CancelIcon />}
                    >
                      Revoke
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PermissionsManagement;
