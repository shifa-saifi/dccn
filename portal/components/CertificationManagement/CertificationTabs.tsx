'use client';
import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import IssueCertificate from './IssueCertificate'; 
import VerifyCertificate from './VerifyCertificate'; 
import RevokeCertificate from './RevokeCertificate'; 

const CertificationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const storedTab = localStorage.getItem('activeCertTab');
    const parsed = parseInt(storedTab || '0');
    if (!isNaN(parsed)) setActiveTab(parsed);
  }, []);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    localStorage.setItem('activeCertTab', newValue.toString());
  };

  const tabContent = () => {
    switch (activeTab) {
      case 0: return <IssueCertificate />;
      case 1: return <VerifyCertificate />;
      case 2: return <RevokeCertificate />;
      default: return null;
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4A90E2, #0074D9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
      }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: 900,
          borderRadius: 4,
          boxShadow: '0px 5px 20px rgba(0,0,0,0.3)',
          background: '#fff',
          p: { xs: 2, md: 4 },
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          sx={{ mb: 4 }}
        >
          <Tab label="Issue Certificate" />
          <Tab label="Verify Certificate" />
          <Tab label="Revoke Certificate" />
        </Tabs>

        <Box sx={{ mt: 3, minHeight: 400 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.35 }}
            >
              {tabContent()}
            </motion.div>
          </AnimatePresence>
        </Box>
      </Paper>
    </Box>
  );
};

export default CertificationTabs;
