import { Box, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';

const NewsUpdates = () => {
  const newsData = [
    {
      title: "Blockchain Certification Gaining Popularity in Universities",
      date: "October 12, 2023",
      description:
        "An increasing number of universities are adopting blockchain-based certifications to secure and verify student credentials.",
      imageUrl: "/gainingPopularity.webp",
    },
    {
      title: "Our Partnership with EduChain Announced",
      date: "September 25, 2023",
      description:
        "We're excited to partner with EduChain to bring enhanced certification solutions to educational institutions globally.",
      imageUrl: "/partnershipwitheduchain.webp",
    },
    {
      title: "New Feature: Real-Time Certificate Verification",
      date: "September 1, 2023",
      description:
        "Our latest update allows real-time certificate verification, making it easier for employers to validate credentials.",
      imageUrl: "/realtimecertveri.webp",
    },
    {
      title: "CEO Speaks at Global Education Summit",
      date: "August 20, 2023",
      description:
        "Our CEO discussed the future of decentralized certification at the Global Education Summit.",
      imageUrl: "/ceospeaking.webp",
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        News & Updates
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 5 }}>
        Stay informed with the latest news and updates from our platform.
      </Typography>
      <Grid container spacing={4}>
        {newsData.map((news, index) => (
          <Grid item xs={12} md={6} lg={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="140"
                image={news.imageUrl}
                alt={news.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  {news.date}
                </Typography>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  {news.description}
                </Typography>
                <Button variant="text" color="primary">
                  Read More
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsUpdates;
