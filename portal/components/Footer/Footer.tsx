'use client';
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';
import Link from 'next/link';
import Logo from '../Logo/Logo';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return alert('Please enter a valid email address.');
    alert(`Subscribed successfully with ${email}`);
    setEmail('');
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1A1A1D',
        color: 'white',
        py: 6,
        borderTop: '5px solid #ff9800',
      }}
    >
      <Container>
        <Grid container spacing={4} justifyContent="center">
          {/* Logo & Description */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Logo />
              <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
                Decentralized Certification Network
              </Typography>
            </Box>
            <Typography variant="body2">
              Secure, verifiable, and tamper-proof blockchain-based certification.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#ff9800' } }}>
                Home
              </Typography>
            </Link>
            <Link href="/dashboard" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#ff9800' } }}>
                Dashboard
              </Typography>
            </Link>
            <Link href="/certification-management" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#ff9800' } }}>
                Certification
              </Typography>
            </Link>
            <Link href="/user-wallets" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#ff9800' } }}>
                User Wallets
              </Typography>
            </Link>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box>
              <IconButton color="inherit" href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" href="https://twitter.com" target="_blank">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" href="https://linkedin.com" target="_blank">
                <LinkedInIcon />
              </IconButton>
              <IconButton color="inherit" href="https://youtube.com" target="_blank">
                <YouTubeIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Newsletter Subscription */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Subscribe to Our Newsletter
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                sx={{ backgroundColor: 'white', borderRadius: 1, mr: 1 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button variant="contained" color="secondary" onClick={handleSubscribe} startIcon={<SendIcon />}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright & Legal Links */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Decentralized Certification Network. All rights reserved.
          </Typography>
          <Box sx={{ mt: 1 }}>
            <Link href="/privacy-policy" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#ff9800' } }}>
                Privacy Policy
              </Typography>
            </Link>
            {' | '}
            <Link href="/terms-of-service" passHref>
              <Typography variant="body2" sx={{ cursor: 'pointer', '&:hover': { color: '#ff9800' } }}>
                Terms of Service
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
