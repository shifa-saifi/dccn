import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
  const faqs = [
    {
      category: "Common Questions on Certificates",
      questions: [
        { question: "What is a blockchain-based certificate?", answer: "A blockchain-based certificate is a digital credential that is securely stored and verified on the blockchain." },
        { question: "How can I verify a certificate?", answer: "Certificates can be verified instantly by entering the certificate ID in the verification portal." },
      ]
    },
    {
      category: "Privacy",
      questions: [
        { question: "How is my data protected?", answer: "Your data is encrypted and securely stored, ensuring that only authorized parties can access it." },
        { question: "Can I delete my information?", answer: "Yes, you can request data deletion at any time through your account settings." },
      ]
    }
  ];

  return (
    <Box>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Find answers to common questions regarding certificates and privacy.
      </Typography>

      {faqs.map((faqCategory, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            {faqCategory.category}
          </Typography>
          {faqCategory.questions.map((faq, idx) => (
            <Accordion key={idx}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default FAQs;
