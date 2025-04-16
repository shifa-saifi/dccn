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
  Divider,
  Typography,
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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [user, setUser] = useState<any>(null);

  const router = useRouter();
  const profileMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const stored = localStorage.getItem('currentUser');
        if (stored) {
          const parsed = JSON.parse(stored);
          setUser(parsed);
        }
      } catch (err) {
        console.error('Failed to load user data:', err);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    router.push('/login');
  };

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileClose = () => {
    setAnchorEl(null);
  };
  const menuLinks = [
    { title: 'Home', path: '/' },
    ...(user?.role === 'Admin'
      ? [
        { title: 'Dashboard', path: '/dashboard' },
        { title: 'Certificate List', path: '/certificates/list' },
      ]
      : user?.role === 'Institution'
        ? [{ title: 'Certification Management', path: '/certification-management' }, { title: 'Certificate List', path: '/certificates/list' },
        ]
        : user?.role === 'Individual'
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
        {user && (
          <ListItemButton onClick={handleLogout}>Logout</ListItemButton>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Logo />

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: 'flex', ml: 'auto', gap: 2 }}>
            {menuLinks.map((link) => (
              <Button
                key={link.title}
                color="inherit"
                component={Link}
                href={link.path}
              >
                {link.title}
              </Button>
            ))}

            {user && (
              <>
                <Tooltip title="User Profile">
                  <IconButton onClick={handleProfileClick}>
                    <Avatar sx={{ bgcolor: 'secondary.main' }}>
                      {user.name?.charAt(0).toUpperCase() || user.role?.charAt(0)}
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
                  <Box sx={{ px: 2, py: 1.5 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                      {user.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {user.email}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Role: {user.role}
                    </Typography>
                  </Box>

                  <Divider sx={{ my: 1 }} />
                  {/* 
                  <MenuItem onClick={() => { handleProfileClose(); router.push('/profile'); }}>
                    View Profile
                  </MenuItem> */}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            )}
          </Box>
        )}

        {/* Mobile Navigation */}
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
