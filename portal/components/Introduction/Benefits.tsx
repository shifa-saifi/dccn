import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import PublicIcon from '@mui/icons-material/Public';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';

const Benefits = () => {
  const benefitsData = [
    {
      icon: <SecurityIcon fontSize="large" color="primary" />,
      title: "Enhanced Security",
      description:
        "Blockchain technology ensures that each certificate is immutable and cannot be altered, providing an added layer of trust and security.",
    },
    {
      icon: <PublicIcon fontSize="large" color="primary" />,
      title: "Global Recognition",
      description:
        "Our certifications are easily verifiable across the globe, making them universally trusted and recognized in any region.",
    },
    {
      icon: <AccessTimeIcon fontSize="large" color="primary" />,
      title: "Time and Cost Efficiency",
      description:
        "Blockchain reduces the administrative burden on institutions, allowing them to issue and verify certificates more efficiently.",
    },
    {
      icon: <VerifiedIcon fontSize="large" color="primary" />,
      title: "Transparency and Trust",
      description:
        "All transactions are publicly visible on the blockchain, promoting transparency and building trust between issuers and recipients.",
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Benefits of Blockchain-Based Certification
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 5 }}>
        Explore the advantages that blockchain technology brings to the certification process.
      </Typography>
      <Grid container spacing={4}>
        {benefitsData.map((benefit, index) => (
          <Grid item xs={12} md={3} key={index}>
            <Card sx={{ p: 3, textAlign: 'center', height: '100%' }}>
              <CardContent>
                <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
                  {benefit.icon}
                </Box>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {benefit.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {benefit.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Benefits;
