'use client';
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Link from 'next/link';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuLinks = [
    { title: 'Home', path: '/' },
    { title: 'Dashboard', path: '/dashboard' },
    { title: 'Certification Management', path: '/certification-management' },
    { title: 'User Wallets', path: '/user-wallets' },
    { title: 'Help & Support', path: '/help-support' },
  ];

  const drawerContent = (
    <Box onClick={() => setDrawerOpen(false)} sx={{ width: 250, py: 2 }}>
      <Logo />
      <List>
        {menuLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton
              component={Link}
              href={link.path}
              sx={{
                fontSize: '16px',
                fontWeight: 'bold',
                '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.1)' },
              }}
            >
              {link.title}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" sx={{ bgcolor: '#0074D9', boxShadow: '0px 4px 10px rgba(0,0,0,0.2)' }}>
      <Toolbar>
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        {!isMobile && (
          <Box sx={{ display: 'flex', ml: 'auto' }}>
            {menuLinks.map((link) => (
              <Button
                key={link.title}
                color="inherit"
                component={Link}
                href={link.path}
                sx={{
                  fontSize: '16px',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  mx: 1.5,
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
                }}
              >
                {link.title}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Menu Icon */}
        {isMobile && (
          <>
            <IconButton edge="end" color="inherit" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
              {drawerContent}
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
