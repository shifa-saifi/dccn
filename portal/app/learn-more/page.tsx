'use client';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Link from 'next/link';

const LearnMorePage = () => {
  return (
    <Box sx={{ pt: 10, backgroundColor: '#f9f9f9' }}>
      {/* Hero Section */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          background: 'linear-gradient(to right, #1e3c72, #2a5298)',
          color: 'white',
        }}
      >
        <Container>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Unlock the Power of Verified Credentials
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: 700, margin: 'auto', mb: 3 }}>
            Our platform uses blockchain to ensure your certificates are secure,
            verifiable, and globally trusted. Learn how we're changing the game.
          </Typography>
          <Link href="/signup">
            <Button
              variant="contained"
              color="secondary"
              size="large"
              sx={{ borderRadius: '25px', px: 4 }}
            >
              Get Started
            </Button>
          </Link>
        </Container>
      </Box>

      {/* Vision Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Our Vision
        </Typography>
        <Typography variant="body1" align="center" sx={{ maxWidth: 800, mx: 'auto', mb: 6 }}>
          We believe everyone deserves to own and share their credentials without
          fear of forgery or delays. By leveraging blockchain, we enable instant,
          tamper-proof certificate management for institutions and learners alike.
        </Typography>

        {/* Features Grid */}
        <Grid container spacing={4}>
          {[
            {
              icon: <VerifiedIcon fontSize="large" color="primary" />,
              title: 'Blockchain Verification',
              description:
                'Every certificate issued is stored on an immutable ledger, accessible and verifiable worldwide.',
            },
            {
              icon: <SecurityIcon fontSize="large" color="primary" />,
              title: 'Advanced Security',
              description:
                'Sensitive data is encrypted and stored securely, ensuring user and institutional trust.',
            },
            {
              icon: <PublicIcon fontSize="large" color="primary" />,
              title: 'Global Recognition',
              description:
                'Certificates issued are valid across borders, promoting international academic and professional mobility.',
            },
            {
              icon: <AccessTimeIcon fontSize="large" color="primary" />,
              title: 'Real-Time Access',
              description:
                'Recipients and verifiers can instantly access credentials using QR codes or secure links.',
            },
          ].map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <CardContent>
                  <Box mb={2}>{feature.icon}</Box>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          py: 6,
          backgroundColor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Join the Future of Certification?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Sign up now and explore secure, efficient, and trustworthy credential solutions.
          </Typography>
          <Link href="/signup">
            <Button variant="contained" color="secondary" size="large">
              Sign Up Free
            </Button>
          </Link>
        </Container>
      </Box>
    </Box>
  );
};

export default LearnMorePage;
