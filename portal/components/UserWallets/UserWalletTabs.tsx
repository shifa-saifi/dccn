'use client';
import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import MyCertificates from './MyCertificates';
import ShareCertificate from './ShareCertificate';
import ImportCertificate from './ImportCertificate';

const UserWalletTabs = () => {
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
        <Tab label="My Certificates" />
        <Tab label="Share Certificate" />
        <Tab label="Import Certificate" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <MyCertificates />}
        {activeTab === 1 && <ShareCertificate />}
        {activeTab === 2 && <ImportCertificate />}
      </Box>
    </Box>
  );
};

export default UserWalletTabs;
