import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Card, CardContent, Box } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

const ActivityFeed = () => {
  const activities = [
    { date: "2023-11-01", action: "Issued certificate to John Doe", icon: <AssignmentTurnedInIcon />, color: '#4CAF50' },
    { date: "2023-10-28", action: "Verified certificate for Jane Smith", icon: <VerifiedIcon />, color: '#2196F3' },
    { date: "2023-10-26", action: "Revoked certificate for Mark Johnson", icon: <CancelIcon />, color: '#F44336' },
    { date: "2023-10-24", action: "Verified certificate for Anna Lee", icon: <VerifiedIcon />, color: '#2196F3' },
  ];

  return (
    <Box sx={{ maxWidth: '600px', mx: 'auto', py: 4 }}>
      <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 4, color: '#333' }}>
        Activity Feed
      </Typography>

      <List sx={{ width: '100%' }}>
        {activities.map((activity, index) => (
          <Card
            key={index}
            sx={{
              mb: 2,
              boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
              borderRadius: '10px',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': { transform: 'scale(1.02)' },
            }}
          >
            <CardContent>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: activity.color }}>{activity.icon}</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={activity.action}
                  secondary={activity.date}
                  primaryTypographyProps={{ fontWeight: 'bold', fontSize: '16px' }}
                  secondaryTypographyProps={{ color: 'textSecondary' }}
                />
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </Box>
  );
};

export default ActivityFeed;
