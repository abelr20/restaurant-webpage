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
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
  },
  {
    title: 'C2. Green Curry (Gang Kiew Wan)',
    description: 'Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
  },
  {
    title: 'A1. Thai Love Shrimp',
    description: 'Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
  },
  {
    title: 'A1. Thai Love Shrimp',
    description: 'Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce. Crispy fried shrimp. Served with spicy cream sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
  },
];

export default function Appetizers() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='appetizers'
      sx={{
        pt: { xs: 4, sm: 4 },
        pb: { xs: 8, sm: 16 },
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
            textAlign: { sm: 'left', md: 'center' },
          }}>
          <Typography component='h2' variant='h4'>
            Appetizers
          </Typography>
        </Box>
        <Grid container spacing={2.5} justifyContent='center' columns={{ xs: 4, sm: 8, md: 12 }}>
          {items.map((item, index) => (
            <Grid size={4} key={index} display='flex' justifyContent='center'>
              <Card sx={{ maxWidth: 400, border: '1px solid hsla(220, 25%, 25%, .3)' }} onClick={onlineOrder}>
                <CardActionArea>
                  <CardMedia component='img' height='220' image={item.image} alt={item.title} />
                  <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                      {item.title}
                    </Typography>
                    <Typography variant='h6'>{item.description}</Typography>
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
