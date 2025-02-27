'use client';
import React, { useState } from 'react';
import { Box, Tabs, Tab, Paper } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import IssueCertificate from './IssueCertificate';
import VerifyCertificate from './VerifyCertificate';
import RevokeCertificate from './RevokeCertificate';

const CertificationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to right, #4A90E2, #0074D9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <Paper
        sx={{
          width: '100%',
          maxWidth: 900,
          borderRadius: 4,
          boxShadow: '0px 5px 20px rgba(0,0,0,0.3)',
          background: '#fff',
          p: 3,
        }}
      >
        {/* Tabs Navigation */}
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          indicatorColor="primary"
          textColor="primary"
          sx={{ mb: 4 }}
        >
          <Tab label="Issue Certificate" />
          <Tab label="Verify Certificate" />
          <Tab label="Revoke Certificate" />
        </Tabs>

        {/* Tab Content with Smooth Transitions */}
        <Box sx={{ mt: 3 }}>
          <AnimatePresence mode="wait">
            {activeTab === 0 && (
              <motion.div key="issue" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <IssueCertificate />
              </motion.div>
            )}
            {activeTab === 1 && (
              <motion.div key="verify" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <VerifyCertificate />
              </motion.div>
            )}
            {activeTab === 2 && (
              <motion.div key="revoke" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                <RevokeCertificate />
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Paper>
    </Box>
  );
};

export default CertificationTabs;
