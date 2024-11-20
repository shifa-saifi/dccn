import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button, Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

const CustomerSupport = () => {
  const supportChannels = [
    { icon: <EmailIcon color="primary" />, label: "Email", contact: "support@dcn.com" },
    { icon: <PhoneIcon color="primary" />, label: "Phone", contact: "+1 234 567 8900" },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Customer Support
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Reach out to us through our contact form or via available support channels.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Form
              </Typography>
              <TextField fullWidth label="Your Name" variant="outlined" sx={{ mb: 2 }} />
              <TextField fullWidth label="Your Email" type="email" variant="outlined" sx={{ mb: 2 }} />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button variant="contained" color="primary" fullWidth>
                Send Message
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Support Channels */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Support Channels
              </Typography>
              <List>
                {supportChannels.map((channel, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>{channel.icon}</ListItemIcon>
                    <ListItemText primary={channel.label} secondary={channel.contact} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerSupport;
