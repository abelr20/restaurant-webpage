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
    title: 'ST1. Thai Fried Rice',
    description: 'Sauteed protein with jasmine rice, eggs, tomatoes, white and green onions, cilantro, and a lime wedge.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/thai%20fried%20rice.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST2. Pad Num Mun Hoi',
    description: 'Sauteed protein with garlic, baby corn, mushrooms, and onions in Thai oyster sauce. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20num%20mun%20hoi.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST3. Pad Pak',
    description: 'Sauteed protein with Asian greens, broccoli, and baby corn in light brown sauce. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20pak.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST4. Pra Ram Long Song',
    description: 'Sauteed protein with Asian greens, broccoli, baby corn, and peanut sauce. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pra%20ram%20long%20song.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST5. Pad Gra Tiem',
    description: 'Sauteed protein with garlic sauce, onions, cilantro, peppers, and fried garlic. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20gra%20tiem.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST6. Prig Pow',
    description: '(Minimum Spice Level MILD) Sauteed protein with bamboo shoots, peppers, coconut milk, Thai basil in roasted Thai chili sauce. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/prig%20pow.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST7. Ga Prow',
    description: '(Minimum Spice Level MILD) Sauteed protein with garlic, Thai basil, onions, peppers, and bamboo shoots in spicy Thai basil sauce. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/ga%20prow.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST8. Thai Style Ga Prow',
    description: '(Minimum Spice Level MILD) Sauteed minced protein with garlic, Thai basil, onions, peppers, and bamboo shoots in spicy Thai basil sauce. Served with jasmine rice.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/thai%20style%20ga%20prow.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST9. Red Curry Fried Rice',
    description: '(Minimum Spice Level MILD) Sauteed protein with jasmine rice in red curry with bamboo shoots, mushrooms, Thai basil, and peppers, with coconut milk.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/red%20curry%20fried%20rice.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'ST10. Green Curry Fried Rice',
    description: '(Minimum Spice Level MEDIUM) Sauteed protein with jasmine rice in green curry with bamboo shoots, Thai eggplant, Thai basil, and peppers, with coconut milk.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/green%20curry%20fried%20rice.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
];

export default function Sauteed() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='sauteed'
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
            Sauteed
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
