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
    description: 'Crispy fried shrimp. Served with spicy cream sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'A2. Calamari',
    description: 'Fried tempura calamari. Served with sweet chili sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$15.00',
  },
  {
    title: 'A3. Shrimp Blanket',
    description: 'Fried shrimp wrapped in rice paper. Served with sweet chili sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$13.00',
  },
  {
    title: 'A4. Coconut Shrimp',
    description: 'Crispy coconut-coated shrimp. Served with sweet chili sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$13.00',
  },
  {
    title: 'A5. Egg Roll',
    description: 'Wrapped and deep-fried ground pork, shrimp, mixed veggies, and glass noodles. Served with carrot sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$10.00',
  },
  {
    title: 'A6. Veggie Roll',
    description: 'Wrapped and deep-fried mixed veggies and glass noodles. Served with sweet chili sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$9.00',
  },
  {
    title: 'A7. Fresh Summer Roll',
    description: 'Wrapped shrimp, carrots, bean sprouts, cucumber, rice noodles, and lettuce. Served with sweet chili sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'A8. Tofu Tod',
    description: 'Fried tofu. Served with sweet chili sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$8.00',
  },
  {
    title: 'A9. Chicken Satay',
    description: 'Curry marinated grilled chicken. Served with peanut sauce and cucumber salad.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'A10. Thai Chicken Wings',
    description: 'Garlic-marinated Thai-style chicken. Served with sweet Thai chili sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$10.00',
  },
  {
    title: 'A11. Shrimp Chips',
    description: 'Fried shrimp-flavored rice crackers. Served with peanut sauce.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$5.00',
  },
  {
    title: 'A12. Mussels Prig Pow',
    description: '(Minimum Spice Level MILD) Steamed mussels with roasted Thai chili sauce and Thai basil.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$15.00',
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
        pt: 4,
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
            width: { sm: '100%', md: '60%' },
            textAlign: 'center',
          }}>
          <Typography component='h2' variant='h4'>
            Appetizers
          </Typography>
        </Box>
        <Grid container spacing={2.5} justifyContent='center' columns={{ xs: 4, sm: 8, md: 12 }}>
          {items.map((item, index) => (
            <Grid size={4} key={index} display='flex' justifyContent='center'>
              <Card sx={{ maxWidth: 400, border: '1px solid hsla(220, 25%, 25%, .3)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} onClick={onlineOrder}>
                <CardActionArea sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia component='img' height='220' image={item.image} alt={item.title} />
                  <CardContent sx={{ flexGrow: 1 }}>
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
