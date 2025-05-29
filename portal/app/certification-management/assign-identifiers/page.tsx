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
  Snackbar,
  Alert,
} from '@mui/material';

const AssignIdentifiersPage = () => {
  const [formData, setFormData] = useState({
    recipientName: '',
    studentEmail: '',
    course: '',
    dateIssued: '',
    certificateId: '',
  });

  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, severity: 'success', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAssign = async () => {
    const { recipientName, course, certificateId, dateIssued, studentEmail } = formData;

    if (!recipientName || !course || !certificateId || !dateIssued || !studentEmail) {
      setAlert({ open: true, severity: 'error', message: 'Please fill all fields.' });
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem('token');

      const res = await fetch('/api/certificates/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to assign identifier');

      setAlert({ open: true, severity: 'success', message: 'Identifier assigned successfully.' });
      setFormData({
        recipientName: '',
        studentEmail: '',
        course: '',
        dateIssued: '',
        certificateId: '',
      });
    } catch (err: any) {
      setAlert({ open: true, severity: 'error', message: err.message || 'Error occurred' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 700, mx: 'auto', py: 6 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Assign Certificate Identifiers
      </Typography>
      <Typography align="center" color="text.secondary" sx={{ mb: 4 }}>
        Assign unique identifiers to students before certificate issuance.
      </Typography>

      <Card>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Recipient Name"
                name="recipientName"
                value={formData.recipientName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Recipient Email"
                name="studentEmail"
                value={formData.studentEmail}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Course/Program"
                name="course"
                value={formData.course}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Date Issued"
                name="dateIssued"
                type="date"
                InputLabelProps={{ shrink: true }}
                value={formData.dateIssued}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Unique Certificate ID"
                name="certificateId"
                value={formData.certificateId}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disabled={loading}
                onClick={handleAssign}
              >
                {loading ? 'Assigning...' : 'Assign Identifier'}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Snackbar
        open={alert.open}
        autoHideDuration={5000}
        onClose={() => setAlert({ ...alert, open: false })}
      >
        <Alert
          onClose={() => setAlert({ ...alert, open: false })}
          severity={alert.severity as any}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default AssignIdentifiersPage;
