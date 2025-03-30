'use client';
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from '@mui/material';
import { useRouter } from 'next/navigation';

const CallToAction = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setOpen(true);
  };

  const handleNavigate = (path: string) => {
    setOpen(false);
    router.push(path);
  };

  return (
    <Box
      sx={{
        py: 6,
        backgroundColor: '#1976d2',
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ready to Join the Future of Certification?
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        Sign up today and experience the security, efficiency, and transparency of blockchain-based certification.
      </Typography>

      <Button
        variant="contained"
        onClick={handleGetStarted}
        sx={{
          background: 'linear-gradient(45deg, #8e24aa, #7b1fa2)',
          color: 'white',
          fontWeight: 'bold',
          px: 4,
          py: 1.5,
          borderRadius: '8px',
          boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)',
          '&:hover': {
            background: 'linear-gradient(45deg, #7b1fa2, #6a1b9a)',
          },
        }}
      >
        GET STARTED
      </Button>

      {/* Dialog */}
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Welcome to DCN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please choose how you'd like to get started with the platform.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button
            variant="outlined"
            onClick={() => handleNavigate('/login')}
          >
            Login
          </Button>
          <Button
            variant="contained"
            onClick={() => handleNavigate('/signup')}
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CallToAction;
