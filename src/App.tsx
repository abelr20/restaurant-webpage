import * as React from 'react';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import AutoAwesomeRoundedIcon from '@mui/icons-material/AutoAwesomeRounded';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import getMPTheme from './getMPTheme';
import OurMenu from './components/OurMenu';
import Appetizers from './components/Appetizers';
import Soups from './components/Soups';
import Salads from './components/Salads';
import Curry from './components/Curry';
import Sauteed from './components/Sauteed';
import Noodle from './components/Noodles';
import HouseSpecials from './components/HouseSpecials';
import Desserts from './components/Desserts';
import Sides from './components/Sides';

// import { ImageList } from '@mui/material';

interface ToggleCustomThemeProps {
  showCustomTheme: Boolean;
  toggleCustomTheme: () => void;
}

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }: ToggleCustomThemeProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100dvw',
        position: 'fixed',
        bottom: 24,
      }}>
      {/* <ToggleButtonGroup
        color='primary'
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label='Toggle design language'
        sx={{
          backgroundColor: 'background.default',
          '& .Mui-selected': {
            pointerEvents: 'none',
          },
        }}>
        <ToggleButton value>
          <AutoAwesomeRoundedIcon sx={{ fontSize: '20px', mr: 1 }} />
          Custom theme
        </ToggleButton>
        <ToggleButton data-screenshot='toggle-default-theme' value={false}>
          Material Design 2
        </ToggleButton>
      </ToggleButtonGroup> */}
    </Box>
  );
}

export default function MarketingPage() {
  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const MPTheme = createTheme(getMPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme(prev => !prev);
  };

  return (
    <ThemeProvider theme={showCustomTheme ? MPTheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        {/* <LogoCollection /> */}
        {/* <Features /> */}
        <OurMenu />
        <Appetizers />
        <Divider />
        <Soups />
        <Divider />
        <Salads />
        <Divider />
        <Curry />
        <Divider />
        <Sauteed />
        <Divider />
        <Noodle />
        <Divider />
        <HouseSpecials />
        <Divider />
        <Desserts />
        <Divider />
        <Sides />
        {/* <Testimonials /> 
        <Divider />
        <Highlights />
        <Divider />
        <Pricing /> */}
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </Box>
      <ToggleCustomTheme showCustomTheme={showCustomTheme} toggleCustomTheme={toggleCustomTheme} />
    </ThemeProvider>
  );
}
