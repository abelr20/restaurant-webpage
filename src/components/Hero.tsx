import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Hero() {
  return (
    <Box
      id='hero'
      sx={{
        position: 'relative',
        width: '100%',
        paddingBottom: '10px',
        overflow: 'hidden', // Ensures the video doesn't overflow the box
      }}>
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: 1, // Behind the content
        }}>
        <source src='src/assets/cooking.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>

      <Container
        sx={{
          position: 'relative',
          zIndex: 2, // Ensures content is above the video
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}>
        <Stack spacing={2} useFlexGap sx={{ alignItems: 'center', width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant='h1'
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3rem, 10vw, 3.5rem)',
            }}>
            Thai Love NY
          </Typography>
          <Typography
            variant='h5'
            sx={{
              textAlign: 'center',
              color: 'text.primary',
              width: { sm: '100%', md: '80%' },
            }}>
            Authentic Thai Cuisine
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} useFlexGap sx={{ pt: 2, width: { xs: '100%', sm: 'auto' } }}>
            <Button variant='contained' size='large' color='success' onClick={() => (document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d')}>
              ORDER NOW
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
