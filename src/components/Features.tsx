import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';

const items = [
  {
    title: 'A1. Thai Love Shrimp',
    description: 'Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541', // Replace with appropriate image URLs
  },
  {
    title: 'Built to last',
    description: 'Experience unmatched durability that goes above and beyond with lasting investment.',
    image: 'https://via.placeholder.com/300x200', // Replace with appropriate image URLs
  },
  {
    title: 'Great user experience',
    description: 'Integrate our product into your routine with an intuitive and easy-to-use interface.',
    image: 'https://via.placeholder.com/300x200', // Replace with appropriate image URLs
  },
];

export default function Highlights() {
  return (
    <Box
      id='highlights'
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: 'hsl(220, 30%, 2%)',
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
        <Box
          sx={{
            width: { sm: '100%', md: '60%' },
            textAlign: 'center',
          }}>
          <Typography component='h2' variant='h4'>
            Highlights
          </Typography>
          <Typography variant='body1' sx={{ color: 'grey.400' }}>
            Explore why our product stands out: adaptability, durability, user-friendly design, and innovation. Enjoy reliable customer support and precision in every detail.
          </Typography>
        </Box>
        <Grid
          container
          spacing={2.5}
          justifyContent='center'
          columns={{ xs: 4, sm: 8, md: 12 }} // Grid v2 column configuration
        >
          {items.map((item, index) => (
            <Grid
              key={index}
              // item
              size={{ xs: 4, sm: 4, md: 4 }} // Adjust size based on the breakpoint
              display='flex'
              justifyContent='center'>
              <Card sx={{ maxWidth: 345, backgroundColor: 'grey.900', color: 'white', border: '1px solid hsla(220, 25%, 25%, .3)' }}>
                <CardActionArea>
                  <CardMedia component='img' height='140' image={item.image} alt={item.title} />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {item.title}
                    </Typography>
                    <Typography variant='body2' sx={{ color: 'grey.400' }}>
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
