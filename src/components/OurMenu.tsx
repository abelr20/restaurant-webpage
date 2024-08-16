import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function OurMenu() {
  return (
    <Box
      id='ourmenu'
      sx={{
        pt: { xs: 4, sm: 12 },
      }}>
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 3, sm: 6 },
          maxWidth: 'lg',
        }}>
        <Typography component='h2' variant='h2'>
          Our Menu
        </Typography>
      </Container>
    </Box>
  );
}
