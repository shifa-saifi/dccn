'use client';
import { useParams } from 'next/navigation';
import { Box, Typography, Container } from '@mui/material';

const mockNews = [
  {
    slug: 'blockchain-certification-universities',
    title: 'Blockchain Certification Gaining Popularity in Universities',
    date: 'October 12, 2023',
    content: `An increasing number of universities are adopting blockchain-based certifications to secure and verify student credentials. This shift is aimed at enhancing the transparency and immutability of academic records.`,
  },
  {
    slug: 'partnership-with-educhain',
    title: 'Our Partnership with EduChain Announced',
    date: 'September 25, 2023',
    content: `We’re excited to partner with EduChain to bring enhanced certification solutions to educational institutions globally. Together, we aim to streamline verification processes and promote global recognition.`,
  },
  {
    slug: 'real-time-verification',
    title: 'New Feature: Real-Time Certificate Verification',
    date: 'September 1, 2023',
    content: `Our latest update allows real-time certificate verification, making it easier for employers to validate credentials instantly. This improves hiring efficiency and builds trust in digital qualifications.`,
  },
  {
    slug: 'ceo-speaks-global-summit',
    title: 'CEO Speaks at Global Education Summit',
    date: 'August 20, 2023',
    content: `Our CEO discussed the future of decentralized certification at the Global Education Summit, highlighting the platform's role in digital transformation in education.`,
  },
];

const NewsDetailsPage = () => {
  const { slug } = useParams();
  const news = mockNews.find((item) => item.slug === slug);

  if (!news) {
    return (
      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold">News Not Found</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom>
        {news.title}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        {news.date}
      </Typography>
      <Typography variant="body1" sx={{ mt: 4 }}>
        {news.content}
      </Typography>
    </Container>
  );
};

export default NewsDetailsPage;
