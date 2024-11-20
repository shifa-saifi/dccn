'use client';
import React, { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import AssessmentIcon from '@mui/icons-material/Assessment';
import FeedIcon from '@mui/icons-material/Feed';
import Overview from './Overview';
import ActivityFeed from './ActivityFeed';

const DashboardTabs = () => {
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
        <Tab icon={<AssessmentIcon />} iconPosition="start" label="Overview" />
        <Tab icon={<FeedIcon />} iconPosition="start" label="Activity Feed" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <Overview />}
        {activeTab === 1 && <ActivityFeed />}
      </Box>
    </Box>
  );
};

export default DashboardTabs;
