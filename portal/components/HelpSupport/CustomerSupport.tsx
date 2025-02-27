import React from 'react';
import { Box, Typography, Card, CardContent, TextField, Button, Grid, List, ListItem, ListItemText, ListItemIcon, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const CustomerSupport = () => {
  const supportChannels = [
    { icon: <EmailIcon sx={{ color: '#0074D9' }} />, label: "Email", contact: "support@dcn.com" },
    { icon: <PhoneIcon sx={{ color: '#0074D9' }} />, label: "Phone", contact: "+1 234 567 8900" },
  ];

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: '#0074D9' }}>
        Customer Support
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Reach out to us through our contact form or via available support channels.
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              p: 3,
              boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
              borderRadius: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.02)' },
            }}
          >
            <CardContent>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
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
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ fontSize: '16px', fontWeight: 'bold', py: 1.5 }}
              >
                Send Message
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Support Channels */}
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              p: 3,
              boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
              borderRadius: 3,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': { transform: 'scale(1.02)' },
            }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
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
            <Box display="flex" alignItems="center" mt={2}>
              <SupportAgentIcon sx={{ color: '#0074D9', fontSize: 40, mr: 2 }} />
              <Typography variant="body1" fontWeight="bold">
                Live Chat Support: Coming Soon!
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomerSupport;
