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
    title: 'H1. Kaw Soi',
    description: '(Minimum Spice Level MILD) Yellow curry broth with steamed egg noodles, crispy egg noodles, baby bok choy, napa cabbage, bean sprouts, diced peppers, onions, cilantro, and crispy garlic.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/kaw%20soi.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$23.00',
  },
  {
    title: 'H2. Pineapple Fried Rice',
    description: 'Sauteed protein with jasmine rice, eggs, pineapples, tomatoes, white and green onions, cilantro, and a lime wedge. Served in a pineapple bowl.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pineapple%20fried%20rice.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$23.00',
  },
  {
    title: 'H3. Pad Prew Wan',
    description: 'Sauteed protein with pineapples, onions, tomatoes, peppers, and cucumbers in Thai sweet and sour sauce. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20prew%20wan.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$22.00',
  },
  {
    title: 'H4. Pad Prig King',
    description: '(Minimum Spice Level MEDIUM) Sauteed protein with green beans, carrots, peppers, and lime leaf in red curry broth. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20prig%20king.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$22.00',
  },
  {
    title: 'H5. Jungle Curry (Gang Pah)',
    description: '(Minimum Spice Level MEDIUM) Red curry broth with Thai eggplant, mushrooms, baby corn, bamboo shoots, green beans, peppers, Thai basil, and lime leaf. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/jungle%20curry%20gang%20pah.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$22.00',
  },
];

export default function HouseSpecials() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='housespecials'
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
            House Specials
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
