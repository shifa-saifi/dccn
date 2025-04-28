'use client';

import React, { useState, useEffect } from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Button, Box, Typography, Chip
} from '@mui/material';

// your Certificate type/interface
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

const CertificateModal = ({
  selectedCert,
  onClose,
  onApprove,
  onReject
}: {
  selectedCert: Certificate | null;
  onClose: () => void;
  onApprove: () => void;
  onReject: () => void;
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ confirm client hydration
  }, []);

  if (!isClient) return null; // ❌ don't render Dialog before client hydration

  return (
    <Dialog open={!!selectedCert} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Certificate Details</DialogTitle>
      <DialogContent dividers>
        {selectedCert && (
          <Box>
            <Typography><strong>Recipient:</strong> {selectedCert.recipientName}</Typography>
            <Typography><strong>Course:</strong> {selectedCert.course}</Typography>
            <Typography><strong>Issuer:</strong> {selectedCert.issuerName}</Typography>
            <Typography><strong>Date Issued:</strong> {new Date(selectedCert.dateIssued).toLocaleDateString()}</Typography>
            <Typography><strong>Certificate ID:</strong> {selectedCert.id}</Typography>

            <Typography sx={{ mt: 2 }}>
              <strong>Status:</strong>{' '}
              <Chip
                label={
                  selectedCert.rejected
                    ? 'Rejected'
                    : selectedCert.approvedByAdmin && selectedCert.approvedByInstitute
                    ? 'Verified'
                    : 'Pending'
                }
                color={
                  selectedCert.rejected
                    ? 'error'
                    : selectedCert.approvedByAdmin && selectedCert.approvedByInstitute
                    ? 'success'
                    : 'warning'
                }
              />
            </Typography>
          </Box>
        )}
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Close</Button>
        {!selectedCert?.rejected && !selectedCert?.approvedByAdmin && (
          <>
            <Button variant="outlined" color="error" onClick={onReject}>
              Reject
            </Button>
            <Button variant="contained" color="primary" onClick={onApprove}>
              Approve
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default CertificateModal;
