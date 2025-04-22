'use client';

import React, { useEffect, useState } from 'react';
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Chip,
} from '@mui/material';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import VerifiedIcon from '@mui/icons-material/Verified';
import CancelIcon from '@mui/icons-material/Cancel';

interface Certificate {
  id: string;
  recipientName: string;
  course: string;
  dateIssued: string;
  issuerName: string;
  approvedByAdmin: boolean;
  approvedByInstitute: boolean;
  rejected: boolean;
  status: string;
  createdAt: string;
}

const ActivityFeed = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    fetch('/api/certificates/list')
      .then((res) => res.json())
      .then((data) => {
        const certs: Certificate[] = data || [];
        setCertificates(certs.sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleApprove = async () => {
    if (!selected) return;
    await fetch('/api/certificates/certStatus', {
      method: 'POST',
      body: JSON.stringify({ id: selected.id, action: 'approve', approver: 'admin' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    window.location.reload();
  };

  const handleReject = async () => {
    if (!selected) return;
    await fetch('/api/certificates/certStatus', {
      method: 'POST',
      body: JSON.stringify({ id: selected.id, action: 'reject', approver: 'admin' }),
      headers: {
        'Content-Type': 'application/json',
      },    });
    window.location.reload();
  };

  const getType = (cert: Certificate) => {
    if (cert.rejected) return 'revoked';
    if (cert.approvedByAdmin && cert.approvedByInstitute) return 'verified';
    return 'issued';
  };

  const getIconAndColor = (type: string) => {
    switch (type) {
      case 'issued':
        return { icon: <AssignmentTurnedInIcon />, color: '#4CAF50' };
      case 'verified':
        return { icon: <VerifiedIcon />, color: '#2196F3' };
      case 'revoked':
        return { icon: <CancelIcon />, color: '#F44336' };
      default:
        return { icon: <AssignmentTurnedInIcon />, color: '#9E9E9E' };
    }
  };

  return (
    <Box sx={{ maxWidth: '700px', mx: 'auto', py: 4 }}>
      <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 4, color: '#333' }}>
        Activity Feed
      </Typography>

      {loading ? (
        <Box display="flex" justifyContent="center" py={5}>
          <CircularProgress />
        </Box>
      ) : certificates.length === 0 ? (
        <Typography align="center" color="text.secondary">
          No activity found.
        </Typography>
      ) : (
        <List>
          {certificates.map((cert, index) => {
            const type = getType(cert);
            const { icon, color } = getIconAndColor(type);
            const action =
              type === 'revoked'
                ? `Revoked certificate for ${cert.recipientName}`
                : type === 'verified'
                ? `Verified certificate for ${cert.recipientName}`
                : `Issued certificate to ${cert.recipientName}`;

            return (
              <Card
                key={index}
                sx={{
                  mb: 2,
                  boxShadow: '0px 5px 15px rgba(0,0,0,0.1)',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  '&:hover': { transform: 'scale(1.02)', transition: '0.2s' },
                }}
                onClick={() => setSelected(cert)}
              >
                <CardContent>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: color }}>{icon}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={action}
                      secondary={new Date(cert.createdAt).toLocaleDateString()}
                      primaryTypographyProps={{ fontWeight: 'bold', fontSize: '16px' }}
                      secondaryTypographyProps={{ color: 'textSecondary' }}
                    />
                  </ListItem>
                </CardContent>
              </Card>
            );
          })}
        </List>
      )}

      {/* Certificate Details Modal */}
      <Dialog open={!!selected} onClose={() => setSelected(null)} maxWidth="sm" fullWidth>
        <DialogTitle>Certificate Details</DialogTitle>
        <DialogContent dividers>
          {selected && (
            <Box>
              <Typography><strong>Recipient:</strong> {selected.recipientName}</Typography>
              <Typography><strong>Course:</strong> {selected.course}</Typography>
              <Typography><strong>Issued By:</strong> {selected.issuerName}</Typography>
              <Typography><strong>Date Issued:</strong> {selected.dateIssued}</Typography>
              <Typography><strong>Certificate ID:</strong> {selected.id}</Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Status:</strong>{' '}
                <Chip
                  label={selected.rejected ? 'Rejected' : selected.approvedByAdmin && selected.approvedByInstitute ? 'Verified' : 'Pending'}
                  color={
                    selected.rejected
                      ? 'error'
                      : selected.approvedByAdmin && selected.approvedByInstitute
                      ? 'success'
                      : 'warning'
                  }
                />
              </Typography>
            </Box>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelected(null)}>Close</Button>
          {!selected?.rejected && !selected?.approvedByAdmin && (
            <>
              <Button color="error" variant="outlined" onClick={handleReject}>
                Reject
              </Button>
              <Button color="primary" variant="contained" onClick={handleApprove}>
                Approve
              </Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ActivityFeed;
