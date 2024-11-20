'use client';
import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import RoleBasedAccess from './RoleBasedAccess';
import OrganizationsDirectory from './OrganizationsDirectory';
import PermissionsManagement from './PermissionsManagement';

const AccessControlTabs = () => {
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
        <Tab label="Role-Based Access" />
        <Tab label="Organizations Directory" />
        <Tab label="Permissions Management" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {activeTab === 0 && <RoleBasedAccess />}
        {activeTab === 1 && <OrganizationsDirectory />}
        {activeTab === 2 && <PermissionsManagement />}
      </Box>
    </Box>
  );
};

export default AccessControlTabs;
