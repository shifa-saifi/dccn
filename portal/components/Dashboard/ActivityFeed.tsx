import React from 'react';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Card, CardContent, Box } from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

const ActivityFeed = () => {
  const activities = [
    { date: "2023-11-01", action: "Issued certificate to John Doe", icon: <AssignmentTurnedInIcon /> },
    { date: "2023-10-28", action: "Verified certificate for Jane Smith", icon: <VerifiedIcon /> },
    { date: "2023-10-26", action: "Revoked certificate for Mark Johnson", icon: <CancelIcon /> },
    { date: "2023-10-24", action: "Verified certificate for Anna Lee", icon: <VerifiedIcon /> },
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Activity Feed
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <Card key={index} sx={{ mb: 2, boxShadow: 3 }}>
            <CardContent>
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    {activity.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={activity.action}
                  secondary={activity.date}
                  primaryTypographyProps={{ fontWeight: 'bold' }}
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
