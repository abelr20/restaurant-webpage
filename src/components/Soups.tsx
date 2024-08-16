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
    title: 'S1. Tom Yum Soup',
    description: '(Minimum Spice Level MILD) Small bowl of lemongrass chicken broth soup with mushrooms, green onions, cilantro, tomatoes, roasted chili, and lime juice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'S2. Tom Kha Soup',
    description: 'Small bowl of coconut chicken broth soup with mushrooms, green onions, cilantro, and galangal.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'S3. Jued Yum Soup',
    description: 'Small bowl of beef broth soup with green onions, cilantro, Asian greens, and fried garlic.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/a1%20Thai%20Love%20Shrimp.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
];

export default function Soups() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='soups'
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
            Soups
          </Typography>
          <Typography component='h2' variant='body1'>
            Choice of Protein: [ Veggie, Tofu, Chicken, Beef, Pork, Shrimp +$1 ]
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
