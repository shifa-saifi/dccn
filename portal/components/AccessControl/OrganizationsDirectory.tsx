import React from 'react';
import { Box, Typography, Card, CardContent, Grid, List, ListItem, ListItemText, Avatar } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';

const OrganizationsDirectory = () => {
  const organizations = [
    { name: "XYZ University", contact: "contact@xyz.edu" },
    { name: "ABC Corporation", contact: "info@abc.com" },
    { name: "Global Edu", contact: "support@globaledu.org" },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Participating Organizations
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        View the list of organizations participating in the network.
      </Typography>

      <Grid container spacing={4}>
        {organizations.map((org, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ p: 3, boxShadow: 3 }}>
              <CardContent>
                <List>
                  <ListItem>
                    <Avatar sx={{ bgcolor: 'primary.main', mr: 2 }}>
                      <BusinessIcon />
                    </Avatar>
                    <ListItemText primary={org.name} secondary={`Contact: ${org.contact}`} />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OrganizationsDirectory;
