'use client'
import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import UsageReports from './UsageReports';
import AuditTrails from './AuditTrails';

const ReportsTabs = () => {
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
        <Tab label="Usage Reports" />
        <Tab label="Audit Trails" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <UsageReports />}
        {activeTab === 1 && <AuditTrails />}
      </Box>
    </Box>
  );
};

export default ReportsTabs;
