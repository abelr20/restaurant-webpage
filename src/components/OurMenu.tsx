import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function OurMenu() {
  return (
    <Box
      id='ourmenu'
      sx={{
        pt: { xs: 5, sm: 10 },
      }}>
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-start' }, // Centering on mobile
          textAlign: { xs: 'center', sm: 'left' }, // Centering text on mobile
          gap: { xs: 3, sm: 6 },
          maxWidth: 'lg',
          pt: 5,
        }}>
        <Typography component='h2' variant='h2'>
          Our Menu
        </Typography>
      </Container>
    </Box>
  );
}
