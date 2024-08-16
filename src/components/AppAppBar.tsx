import * as React from 'react';
import { PaletteMode } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ToggleColorMode from './ToggleColorMode';
import Logo from './LogoIcon';

interface AppAppBarProps {
  mode: PaletteMode;
  toggleColorMode: () => void;
}

export default function AppAppBar({ mode, toggleColorMode }: AppAppBarProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      setOpen(false);
    }
  };

  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <AppBar position='fixed' sx={{ boxShadow: 0, bgcolor: 'transparent', backgroundImage: 'none', mt: 2 }}>
      <Container maxWidth='lg'>
        <Toolbar
          variant='regular'
          sx={theme => ({
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexShrink: 0,
            borderRadius: '12px',
            backdropFilter: 'blur(24px)',
            maxHeight: 40,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'hsla(220, 60%, 99%, 0.6)',
            boxShadow: '0 1px 2px hsla(210, 0%, 0%, 0.05), 0 2px 12px hsla(210, 100%, 80%, 0.5)',
            ...theme.applyStyles('dark', {
              bgcolor: 'hsla(220, 0%, 0%, 0.7)',
              boxShadow: '0 1px 2px hsla(210, 0%, 0%, 0.5), 0 2px 12px hsla(210, 100%, 25%, 0.3)',
            }),
          })}>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            <Logo />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('hero')}>
                Order
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('appetizers')}>
                Appetizers
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('soups')}>
                Soups
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('salads')}>
                Salads
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('curry')}>
                Curry
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('sauteed')}>
                Sauteed
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('noodles')}>
                Noodles
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('housespecials')}>
                House Specials
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('desserts')}>
                Desserts
              </Button>
              <Button variant='text' color='info' size='large' onClick={() => scrollToSection('sides')}>
                Sides
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}>
            <Button variant='text' color='info' size='large' onClick={() => scrollToSection('faq')} sx={{ minWidth: 0 }}>
              FAQ
            </Button>
            {/* <Button color='info' variant='text' size='large' onClick={onlineOrder}>
              ORDER NOW
            </Button> */}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}>
            <ToggleColorMode data-screenshot='toggle-mode' mode={mode} toggleColorMode={toggleColorMode} />
            {/* <Button color='info' variant='text' size='large' onClick={onlineOrder}>
              Order
            </Button> */}
            {/* <Button color='primary' variant='contained' size='small'>
              Sign up
            </Button> */}
          </Box>
          <Box sx={{ display: { sm: 'flex', md: 'none' } }}>
            <IconButton aria-label='Menu button' onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
              <Box sx={{ p: 2, backgroundColor: 'background.default' }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <Divider sx={{ my: 3 }} />
                <MenuItem onClick={() => scrollToSection('hero')}>Order</MenuItem>
                <MenuItem onClick={() => scrollToSection('appetizers')}>Appetizers</MenuItem>
                <MenuItem onClick={() => scrollToSection('soups')}>Soups</MenuItem>
                <MenuItem onClick={() => scrollToSection('salads')}>Salads</MenuItem>
                <MenuItem onClick={() => scrollToSection('curry')}>Curry</MenuItem>
                <MenuItem onClick={() => scrollToSection('sauteed')}>Sauteed</MenuItem>
                <MenuItem onClick={() => scrollToSection('noodles')}>Noodles</MenuItem>
                <MenuItem onClick={() => scrollToSection('housespecials')}>House Specials</MenuItem>
                <MenuItem onClick={() => scrollToSection('desserts')}>Desserts</MenuItem>
                <MenuItem onClick={() => scrollToSection('sides')}>Sides</MenuItem>
                <MenuItem onClick={() => scrollToSection('faq')}>FAQ</MenuItem>
                <MenuItem onClick={onlineOrder}>ORDER</MenuItem>

                {/* <MenuItem>
                  <Button color='primary' variant='contained' fullWidth>
                    Sign up
                  </Button>
                </MenuItem>
                <MenuItem>
                  <Button color='primary' variant='outlined' fullWidth>
                    Sign in
                  </Button>
                </MenuItem> */}
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
