import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Chip,
} from '@mui/material';

const CertificateCard = ({
  data,
  showActions = false,
  role = '',
}: {
  data: any;
  showActions?: boolean;
  role?: 'admin' | 'institution' | '';
}) => {
  const { recipient, course, issueDate, certId, status } = data;

  const handleApprove = async () => {
    await fetch(`/api/cert/approve`, {
      method: 'POST',
      body: JSON.stringify({ certId }),
    });
    window.location.reload();
  };

  const handleReject = async () => {
    await fetch(`/api/cert/reject`, {
      method: 'POST',
      body: JSON.stringify({ certId }),
    });
    window.location.reload();
  };

  return (
    <Card sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">
          {course}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary">
          Issued To: {recipient}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
          Date: {issueDate}
        </Typography>

        <Box sx={{ mb: 2 }}>
          <Chip
            label={status}
            color={status === 'approved' ? 'success' : status === 'pending' ? 'warning' : 'error'}
            variant="outlined"
          />
        </Box>

        {showActions && (
          <Box display="flex" gap={2}>
            <Button
              size="small"
              variant="contained"
              color="success"
              onClick={handleApprove}
              disabled={status === 'approved'}
            >
              Approve
            </Button>
            <Button
              size="small"
              variant="outlined"
              color="error"
              onClick={handleReject}
              disabled={status === 'rejected'}
            >
              Reject
            </Button>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default CertificateCard;
