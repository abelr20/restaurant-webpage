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
    title: 'D1. Mango Sticky Rice',
    description: 'Sticky rice and ripe mango with sweet coconut milk and roasted sesame seeds.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/mango%20sticky%20rice.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'D2. Raspberry Sticky Rice',
    description: 'Raspberry sticky rice with sweet coconut milk, Thai egg custard, roasted sesame seeds topped with shredded coconut.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/raspberry%20sticky%20rice.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$10.00',
  },
  {
    title: 'D3. Thai Coconut Gelato (Woon Ka Ti)',
    description: 'Sweet coconut milk jelly topped with shredded coconut.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/thai%20coconut%20gelato.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$7.00',
  },
  {
    title: 'D4. Coconana',
    description: 'Sweet coconut milk, banana, tapioca, rice flour topped with shredded coconut.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/coconana.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$7.00',
  },
  {
    title: 'D5. Coconut Ice Cream',
    description: 'Creamy coconut sorbetto topped with caramel syrup and whipped cream. Served in a natural coconut shell.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/coconut%20ice%20cream.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'D6. Banana Fritter',
    description: 'Fried banana coated with coconut flakes, caramel syrup and whipped cream. Served with vanilla and green tea ice cream.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/banana%20fritter.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$13.00',
  },
  {
    title: 'D7. Flute Limoncello',
    description: 'Refreshing lemon gelato swirled with limoncello and whipped cream.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/flute%20limoncello.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
  {
    title: 'D8. Coppa Pistachio',
    description: 'Custard gelato swirled together with chocolate and pistachio.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/coppa%20pistachio.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$12.00',
  },
];

export default function Desserts() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='desserts'
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
            Desserts
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
