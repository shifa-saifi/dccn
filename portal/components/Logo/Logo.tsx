import { Box, Typography } from '@mui/material';
import Image from 'next/image';

const Logo = () => {
  return (
    <Box display="flex" alignItems="center">
      {/* Logo Image */}
      <Image src="/dcnlogo.webp" alt="Decentralized Certification Network Logo" width={50} height={50} />

      {/* Logo Text */}
      <Typography
        variant="h5"
        sx={{
          ml: 2,
          fontWeight: 'bold',
          color: 'darkorange', // Main color for the logo text
          fontFamily: 'Roboto, sans-serif',
        }}
      >
        Decentralized Certification Network
      </Typography>
    </Box>
  );
};

export default Logo;
