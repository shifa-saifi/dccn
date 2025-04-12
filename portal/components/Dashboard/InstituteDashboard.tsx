'use client';
import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import CertificateCard from '../Shared/CertificateCard';

const InstituteDashboard = () => {
  const [certificates, setCertificates] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/cert/institute')
      .then((res) => res.json())
      .then((data) => {
        setCertificates(data.certificates || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Institute Dashboard
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Manage certificates issued to your students.
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {certificates.map((cert, idx) => (
            <Grid item xs={12} md={6} lg={4} key={idx}>
              <CertificateCard data={cert} showActions role="institution" />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default InstituteDashboard;
