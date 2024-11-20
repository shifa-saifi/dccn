import React from 'react';
import { Box, Typography, Card, CardContent, List, ListItem, ListItemText, Divider } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';

const AuditTrails = () => {
  const logs = [
    { date: "2023-11-01 10:00 AM", action: "Certificate #1234 issued to John Doe" },
    { date: "2023-10-28 3:45 PM", action: "Certificate #5678 verified by Company ABC" },
    { date: "2023-10-26 11:30 AM", action: "Certificate #91011 revoked due to invalid data" },
    { date: "2023-10-24 9:15 AM", action: "Certificate #121314 verified by University XYZ" },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Audit Trails
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        View detailed logs of system interactions for auditing purposes.
      </Typography>

      <Card sx={{ p: 3, boxShadow: 3 }}>
        <CardContent>
          <Box display="flex" alignItems="center" mb={2}>
            <HistoryIcon color="primary" fontSize="large" sx={{ mr: 2 }} />
            <Typography variant="h6" fontWeight="bold">
              Detailed Interaction Logs
            </Typography>
          </Box>

          <List>
            {logs.map((log, index) => (
              <React.Fragment key={index}>
                <ListItem>
                  <ListItemText primary={log.action} secondary={log.date} />
                </ListItem>
                {index < logs.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AuditTrails;
