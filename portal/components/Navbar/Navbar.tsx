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
  Menu,
  MenuItem,
  Avatar,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '../Logo/Logo';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    setUserRole(user.userType || null);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUserRole(null);
    router.push('/signup');
  };

  const profileMenuOpen = Boolean(anchorEl);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };

  const menuLinks = [
    { title: 'Home', path: '/' },
    ...(userRole === 'Admin'
      ? [{ title: 'Dashboard', path: '/dashboard' }]
      : userRole === 'Institution'
      ? [{ title: 'Certification Management', path: '/certification-management' }]
      : userRole === 'Individual'
      ? [{ title: 'User Wallets', path: '/user-wallets' }]
      : []),
    { title: 'Help & Support', path: '/help-support' },
  ];

  const drawerContent = (
    <Box onClick={() => setDrawerOpen(false)} sx={{ width: 250 }}>
      <List>
        {menuLinks.map((link) => (
          <ListItem key={link.title} disablePadding>
            <ListItemButton component={Link} href={link.path}>
              {link.title}
            </ListItemButton>
          </ListItem>
        ))}
        {userRole && (
          <ListItemButton onClick={handleLogout}>Logout</ListItemButton>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Logo />

        {!isMobile && (
          <Box sx={{ display: 'flex', ml: 'auto', gap: 2 }}>
            {menuLinks.map((link) => (
              <Button key={link.title} color="inherit" component={Link} href={link.path}>
                {link.title}
              </Button>
            ))}

            {userRole && (
              <>
                <Tooltip title="Account">
                  <IconButton onClick={handleProfileClick}>
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                      {userRole.charAt(0)}
                    </Avatar>
                  </IconButton>
                </Tooltip>

                <Menu
                  anchorEl={anchorEl}
                  open={profileMenuOpen}
                  onClose={handleProfileClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                >
                  <MenuItem disabled>{userRole} User</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>
        )}

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
