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
    title: 'C1. Red Curry (Gang Dang)',
    description: '(Minimum Spice Level MILD) Red curry with bamboo shoots, peppers, Thai basil, and mushrooms in coconut milk. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/red%20curry.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'C2. Green Curry (Gang Kiew Wan)',
    description: '(Minimum Spice Level MEDIUM) Green curry with bamboo shoots, peppers, Thai eggplant, and Thai basil in coconut milk. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/green%20curry.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'C3. Yellow Curry (Gang Garee)',
    description: '(Minimum Spice Level MILD) Yellow curry with carrots, potatoes, onions, and peppers in coconut milk. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/yellow%20curry.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'C4. Pineapple Curry (Gang Sub Pa Rod)',
    description: '(Minimum Spice Level MILD) Red curry with pineapples, peppers, and Thai basil in coconut milk. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pineapple%20curry.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'C5. Panang Curry',
    description: '(Minimum Spice Level MILD) Panang curry with peppers, Thai basil, and lime leaf in coconut milk. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/panang%20curry.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'C6. Massaman Curry',
    description: '(Minimum Spice Level MILD) Massaman curry with potatoes, onions, and peanuts in coconut milk. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/massaman%20curry.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'C7. Jungle Curry (Gang Pah)',
    description: '(Minimum Spice Level MEDIUM) Red curry broth with Thai eggplant, mushrooms, baby corn, bamboo shoots, green beans, peppers, Thai basil, and lime leaf. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/jungle%20curry.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
];

export default function Curry() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='curry'
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
            Curry
          </Typography>
          <Typography component='h2' variant='body1'>
            Choice of Protein: [ Veggie, Tofu, Chicken, Pork +$1, Beef +$1, Shrimp +3$, Calamari +$6, Salmon +$6, Duck +$16 ]
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
