'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Snackbar,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const CustomerSupport = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, email, message } = form;
    if (!name || !email || !message) {
      setAlert({ open: true, message: 'All fields are required.', severity: 'error' });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/support/message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong');

      setAlert({ open: true, message: 'Message sent successfully!', severity: 'success' });
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      setAlert({ open: true, message: (err as Error).message || 'Failed to send.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

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
              <TextField
                fullWidth
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Your Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                sx={{ mb: 2 }}
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? 'Sending...' : 'SEND MESSAGE'}
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
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Email" secondary="support@dcn.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Phone" secondary="+1 234 567 8900" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SupportAgentIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Live Chat Support: Coming Soon!" />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Snackbar
        open={alert.open}
        autoHideDuration={4000}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert severity={alert.severity as any} variant="filled" onClose={() => setAlert({ ...alert, open: false })}>
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CustomerSupport;
