'use client';
import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import IssueCertificate from './IssueCertificate';
import VerifyCertificate from './VerifyCertificate';
import RevokeCertificate from './RevokeCertificate';

const CertificationTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3, p: 3 }}>
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

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <IssueCertificate />}
        {activeTab === 1 && <VerifyCertificate />}
        {activeTab === 2 && <RevokeCertificate />}
      </Box>
    </Box>
  );
};

export default CertificationTabs;
