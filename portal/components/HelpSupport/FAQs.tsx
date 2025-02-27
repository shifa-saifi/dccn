import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Paper } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
  const faqs = [
    {
      category: "Common Questions on Certificates",
      questions: [
        { question: "What is a blockchain-based certificate?", answer: "A blockchain-based certificate is a digital credential that is securely stored and verified on the blockchain. This ensures that the certificate is tamper-proof and can be easily authenticated by anyone with access to the blockchain." },
        { question: "How can I verify a certificate?", answer: "Certificates can be verified instantly by entering the certificate ID in the verification portal. This process checks the certificate's authenticity against the blockchain, ensuring that it has not been altered or forged." },
        { question: "Are blockchain-based certificates secure?", answer: "Yes, they are highly secure due to the decentralized and immutable nature of blockchain technology. This means that once a certificate is recorded on the blockchain, it cannot be changed or deleted, providing a high level of security and trust." },
        { question: "Can I share my blockchain-based certificate?", answer: "Yes, you can share your certificate with others by providing them with the certificate ID or a verification link. This allows others to verify the authenticity of your certificate quickly and easily." },
        { question: "What happens if I lose my certificate ID?", answer: "You can retrieve your certificate ID by logging into your account and accessing your certificate details. This ensures that you always have access to your certificate, even if you lose the original ID." },
        { question: "Is there a fee for issuing blockchain-based certificates?", answer: "The fee structure varies depending on the issuing organization. Please check with the issuer for specific details. Some organizations may offer free issuance, while others may charge a nominal fee." },
        { question: "Can I print my blockchain-based certificate?", answer: "Yes, you can print a copy of your certificate, but its authenticity can only be verified digitally. The printed copy serves as a physical representation, but the true verification happens through the blockchain." },
        { question: "How long does it take to issue a blockchain-based certificate?", answer: "The issuance time can vary, but it is typically faster than traditional methods due to the automated nature of blockchain technology. In many cases, certificates can be issued almost instantly." },
        { question: "Can I revoke a blockchain-based certificate?", answer: "Yes, certificates can be revoked by the issuing authority if necessary. This is typically done in cases of fraud or if the certificate holder no longer meets the required criteria." },
        { question: "What information is included in a blockchain-based certificate?", answer: "A blockchain-based certificate typically includes the recipient's name, the issuing authority, the date of issuance, and a unique certificate ID. Additional information may also be included depending on the specific requirements of the issuing organization." },
      ]
    },
    {
      category: "Privacy",
      questions: [
        { question: "How is my data protected?", answer: "Your data is encrypted and securely stored, ensuring that only authorized parties can access it. We use industry-standard encryption algorithms to protect your data both in transit and at rest." },
        { question: "Can I delete my information?", answer: "Yes, you can request data deletion at any time through your account settings. Once your request is processed, your data will be permanently removed from our systems." },
        { question: "Who has access to my data?", answer: "Only authorized personnel and systems have access to your data, and it is protected by strict access controls. We ensure that your data is only accessed by those who need it to provide our services." },
        { question: "How can I update my personal information?", answer: "You can update your personal information by logging into your account and editing your profile details. This allows you to keep your information up-to-date and accurate." },
        { question: "What data is collected during the certificate issuance process?", answer: "The data collected typically includes your name, email address, and any other information required by the issuing authority. This information is used to create and verify your certificate." },
        { question: "Is my data shared with third parties?", answer: "Your data is not shared with third parties without your explicit consent, except as required by law. We take your privacy seriously and only share your data when absolutely necessary." },
        { question: "How long is my data retained?", answer: "Your data is retained for as long as necessary to provide the services and comply with legal obligations. Once it is no longer needed, it will be securely deleted." },
        { question: "Can I request a copy of my data?", answer: "Yes, you can request a copy of your data by contacting customer support. We will provide you with a copy of your data in a commonly used format." },
        { question: "What measures are in place to prevent data breaches?", answer: "We implement robust security measures, including encryption, access controls, and regular security audits, to prevent data breaches. Our goal is to ensure that your data remains secure at all times." },
        { question: "How can I contact support for privacy-related concerns?", answer: "You can contact our support team through the contact form on our website or by emailing support@example.com. We are here to help with any privacy-related questions or concerns you may have." },
      ]
    },
    {
      category: "Account Management",
      questions: [
        { question: "How do I create an account?", answer: "You can create an account by clicking on the 'Sign Up' button and filling out the registration form. Once you have completed the form, you will receive a confirmation email to activate your account." },
        { question: "How do I reset my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link and following the instructions. You will receive an email with a link to reset your password." },
        { question: "How do I change my email address?", answer: "You can change your email address in the account settings section of your profile. Simply update your email address and save the changes." },
        { question: "How do I delete my account?", answer: "You can delete your account by contacting customer support and requesting account deletion. Once your request is processed, your account and all associated data will be permanently deleted." },
        { question: "How do I update my profile information?", answer: "You can update your profile information by logging into your account and editing your profile details. This allows you to keep your information current and accurate." },
      ]
    },
    {
      category: "Technical Support",
      questions: [
        { question: "How do I report a technical issue?", answer: "You can report a technical issue by contacting our support team through the contact form on our website. Please provide as much detail as possible to help us resolve the issue quickly." },
        { question: "What should I do if I encounter an error?", answer: "If you encounter an error, please try refreshing the page or clearing your browser cache. If the issue persists, contact support for further assistance." },
        { question: "How do I update my software?", answer: "You can update your software by following the instructions provided in the software update section of our website. Regular updates ensure that you have the latest features and security improvements." },
        { question: "What are the system requirements?", answer: "The system requirements can be found in the technical specifications section of our website. Please ensure that your system meets these requirements for optimal performance." },
        { question: "How do I install the application?", answer: "You can install the application by downloading the installer from our website and following the installation instructions. If you encounter any issues, please contact support for assistance." },
      ]
    },
    {
      category: "Billing and Payments",
      questions: [
        { question: "What payment methods are accepted?", answer: "We accept various payment methods including credit cards, debit cards, and PayPal. Please check the payment options available during the checkout process." },
        { question: "How do I view my billing history?", answer: "You can view your billing history by logging into your account and navigating to the billing section. This provides a detailed record of all your transactions." },
        { question: "How do I update my payment information?", answer: "You can update your payment information in the billing section of your account settings. Ensure that your payment details are current to avoid any interruptions in service." },
        { question: "What should I do if I have a billing issue?", answer: "If you have a billing issue, please contact our support team for assistance. We will work with you to resolve any discrepancies or concerns." },
        { question: "Are there any additional fees?", answer: "Any additional fees will be clearly outlined during the checkout process. Please review the fee details before completing your purchase." },
      ]
    },
    {
      category: "Product Information",
      questions: [
        { question: "Where can I find product documentation?", answer: "Product documentation can be found in the resources section of our website. This includes user guides, FAQs, and other helpful materials." },
        { question: "How do I request a product demo?", answer: "You can request a product demo by filling out the demo request form on our website. Our team will contact you to schedule a demonstration." },
        { question: "What are the product features?", answer: "A detailed list of product features can be found on the product page of our website. This provides an overview of the capabilities and benefits of our product." },
        { question: "How do I compare different products?", answer: "You can compare different products using the comparison tool available on our website. This helps you make an informed decision based on your specific needs." },
        { question: "How do I get started with the product?", answer: "You can get started with the product by following the getting started guide available in the product documentation. This provides step-by-step instructions to help you begin using the product." },
      ]
    },
    {
      category: "Security",
      questions: [
        { question: "What security measures are in place?", answer: "We implement various security measures including encryption, access controls, and regular security audits. These measures ensure that your data is protected from unauthorized access and breaches." },
        { question: "How do I report a security vulnerability?", answer: "You can report a security vulnerability by contacting our security team through the contact form on our website. Please provide detailed information about the vulnerability to help us address it promptly." },
        { question: "What should I do if I suspect a security breach?", answer: "If you suspect a security breach, please contact our support team immediately. We will investigate the issue and take appropriate action to secure your data." },
        { question: "How is my data encrypted?", answer: "Your data is encrypted using industry-standard encryption algorithms. This ensures that your data is protected both in transit and at rest." },
        { question: "What is your data retention policy?", answer: "Our data retention policy can be found in the privacy policy section of our website. This policy outlines how long we retain your data and the measures we take to protect it." },
      ]
    },
    {
      category: "Integration",
      questions: [
        { question: "How do I integrate with your API?", answer: "You can integrate with our API by following the API documentation available on our website. This documentation provides detailed instructions and examples to help you get started." },
        { question: "What are the API endpoints?", answer: "A list of API endpoints can be found in the API documentation. Each endpoint includes information on the available methods, parameters, and responses." },
        { question: "How do I get API access?", answer: "You can request API access by contacting our support team. We will provide you with the necessary credentials and documentation to begin using the API." },
        { question: "What are the API rate limits?", answer: "API rate limits are outlined in the API documentation. These limits ensure fair usage and prevent abuse of the API." },
        { question: "How do I handle API errors?", answer: "Guidance on handling API errors can be found in the error handling section of the API documentation. This includes information on common error codes and troubleshooting steps." },
      ]
    },
    {
      category: "General",
      questions: [
        { question: "Where can I find the latest news?", answer: "The latest news can be found in the news section of our website. This includes updates on new features, product releases, and company announcements." },
        { question: "How do I subscribe to the newsletter?", answer: "You can subscribe to the newsletter by entering your email address in the subscription form on our website. This ensures that you receive the latest updates and information directly to your inbox." },
        { question: "How do I contact customer support?", answer: "You can contact customer support through the contact form on our website or by emailing support@example.com. Our support team is available to assist you with any questions or issues you may have." },
        { question: "Where can I find the terms of service?", answer: "The terms of service can be found in the legal section of our website. This document outlines the terms and conditions for using our services." },
        { question: "How do I provide feedback?", answer: "You can provide feedback by filling out the feedback form on our website. We value your input and use it to improve our products and services." },
      ]
    }
  ];

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', py: 6 }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom sx={{ color: '#0074D9' }}>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4, color: 'text.secondary' }}>
        Find answers to common questions regarding certificates and privacy.
      </Typography>

      {faqs.map((faqCategory, index) => (
        <Paper key={index} elevation={3} sx={{ p: 3, mb: 4, borderRadius: 3 }}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: '#333' }}>
            {faqCategory.category}
          </Typography>
          {faqCategory.questions.map((faq, idx) => (
            <Accordion key={idx} sx={{ borderRadius: 2, boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ bgcolor: 'rgba(0,0,0,0.05)', '&:hover': { bgcolor: 'rgba(0,0,0,0.08)' } }}>
                <Typography fontWeight="bold">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography color="textSecondary">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      ))}
    </Box>
  );
};

export default FAQs;
