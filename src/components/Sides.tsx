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
    title: 'S1. Rice',
    description: 'Steamed jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/Side%20steam%20rice.jpg/:/cr=t:11.32%25,l:24.65%25,w:39.61%25,h:70.42%25/rs=w:720,h:720,cg=true,m',
    price: '$3.00',
  },
  {
    title: 'S2. Thin Noodles',
    description: 'Steamed thin rice noodles.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/thin%20noodles.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$3.50',
  },
  {
    title: 'S3. Flat Noodles',
    description: 'Steamed flat rice noodles.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/flat%20noodles.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$3.50',
  },
  {
    title: 'S4. Egg Noodles',
    description: 'Steamed egg noodles.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/egg%20noodles.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$4.00',
  },
  {
    title: 'S5. Sticky Rice',
    description: 'Steamed sticky rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/sticky%20rice.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$3.00',
  },
];

export default function Sides() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='sides'
      sx={{
        pt: 2,
        pb: 4,
      }}>
      <Container
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-start' }, // Centering on mobile
          gap: { xs: 3, sm: 6 },
          maxWidth: 'lg',
        }}>
        <Box
          sx={{
            width: { sm: '100%', md: '90%' }, // Increased width to allow more space for the text
            maxWidth: '1000px',
            textAlign: 'center',
          }}>
          <Typography component='h2' variant='h4'>
            Sides
          </Typography>
        </Box>
        <Grid container spacing={2.5} justifyContent='center' columns={{ xs: 4, sm: 8, md: 12 }}>
          {items.map((item, index) => (
            <Grid size={4} key={index} display='flex' justifyContent='center'>
              <Card
                sx={{
                  flexGrow: 1, // Allow the card to grow and match the width of others in the grid
                  border: '1px solid hsla(220, 25%, 25%, .3)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
                onClick={onlineOrder}>
                <CardActionArea
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start', // Align items to the left
                    justifyContent: 'left',
                  }}>
                  <CardMedia component='img' height='220' image={item.image} alt={item.title} />
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      width: '100%', // Ensure the content takes up full width
                      textAlign: 'left', // Align text to the left
                    }}>
                    <Typography gutterBottom variant='h5' component='div'>
                      {item.title}
                    </Typography>
                    <Typography variant='h6'>{item.description}</Typography>
                    <Typography variant='h6' color='text.secondary'>
                      {item.price}
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
