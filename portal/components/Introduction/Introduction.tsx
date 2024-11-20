import { Box, Typography, Grid, Card, CardContent, Button, Container } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SecurityIcon from '@mui/icons-material/Security';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import Benefits from './Benefits';
import NewsUpdates from '../NewsAndFeeds/News';

const PlatformIntroduction = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '70vh',
          backgroundImage: `url(/backgrounddcn.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'yellow',
          textAlign: 'center',
          width: '100%', // Ensure it fits the screen width
          mt: 400, // Offset the navbar height
        }}
      >
        <Container>
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to the Decentralized Certification Network
          </Typography>
          <Typography variant="h6">
            Empowering individuals and institutions with secure, verifiable, and tamper-proof certifications powered by blockchain technology.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{ mt: 4 }}
            size="large"
          >
            Learn More
          </Button>
        </Container>
      </Box>

      {/* Benefits Component */}
      <Benefits />

      {/* Features Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Platform Features
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
          Our platform offers a comprehensive suite of features designed for educational institutions, employers, and individuals.
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              icon: <VerifiedIcon fontSize="large" color="primary" />,
              title: "Blockchain-Based Verification",
              description:
                "Each certificate is stored on a decentralized blockchain, ensuring that it’s verifiable and cannot be tampered with.",
            },
            {
              icon: <SecurityIcon fontSize="large" color="primary" />,
              title: "Data Privacy & Security",
              description:
                "Our platform prioritizes user privacy, keeping all personal data secure with state-of-the-art encryption.",
            },
            {
              icon: <SchoolIcon fontSize="large" color="primary" />,
              title: "Educational Institution Integrations",
              description:
                "Easily integrate with universities, colleges, and certification bodies to streamline issuing and verifying credentials.",
            },
            {
              icon: <AccessTimeIcon fontSize="large" color="primary" />,
              title: "Real-Time Verification",
              description:
                "Verify the authenticity of any certification in real-time with our quick verification portal.",
            },
          ].map((feature, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    {feature.icon}
                    <Typography variant="h6" fontWeight="bold" sx={{ ml: 2 }}>
                      {feature.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works Section */}
      <Box sx={{ py: 6, backgroundColor: '#f7f7f7' }}>
        <Container>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 5 }}>
            Discover the seamless process of issuing, managing, and verifying certifications on our platform.
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                step: "1",
                title: "Certificate Issuance",
                description:
                  "Institutions generate a unique, tamper-proof certificate and store it on the blockchain for secure access.",
              },
              {
                step: "2",
                title: "User Wallet Storage",
                description:
                  "Users receive their certifications directly in their digital wallet, accessible anytime, anywhere.",
              },
              {
                step: "3",
                title: "Real-Time Verification",
                description:
                  "Employers and other institutions can verify the authenticity of certificates in real-time.",
              },
            ].map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ textAlign: 'center', p: 3 }}>
                  <Typography variant="h3" color="primary" fontWeight="bold">
                    {item.step}
                  </Typography>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2">
                    {item.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Additional Benefits Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
          Why Choose Us?
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 5 }}>
          Our platform brings a new level of trust and transparency to the certification process.
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Enhanced Security",
              description:
                "Blockchain technology ensures that each certificate is immutable and cannot be altered.",
            },
            {
              title: "Global Recognition",
              description:
                "Our certifications are easily verifiable across the globe, making them universally trusted.",
            },
            {
              title: "Time and Cost Efficiency",
              description:
                "Reduces the administrative burden on institutions, saving both time and resources.",
            },
          ].map((benefit, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ p: 3, textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2">
                    {benefit.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action Section */}
      <Box sx={{ py: 6, backgroundColor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Container>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Ready to Join the Future of Certification?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Sign up today and experience the security, efficiency, and transparency of blockchain-based certification.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started
          </Button>
        </Container>
      </Box>

      {/* News & Updates Section */}
      <NewsUpdates />
    </Box>
  );
};

export default PlatformIntroduction;
