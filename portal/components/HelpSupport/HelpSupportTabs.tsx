'use client'
import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import FAQs from './FAQs';
import CustomerSupport from './CustomerSupport';

const HelpSupportTabs = () => {
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
        <Tab label="FAQs" />
        <Tab label="Customer Support" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <FAQs />}
        {activeTab === 1 && <CustomerSupport />}
      </Box>
    </Box>
  );
};

export default HelpSupportTabs;
