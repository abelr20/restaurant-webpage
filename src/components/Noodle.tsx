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
    title: 'N1. Pad Thai',
    description: 'Thin rice noodles stir-fried in tamarind sauce with eggs, bean sprouts, chives, crushed peanuts, and a lime wedge.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20thai.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'N2. Pad Mee Korat',
    description: 'Thin rice noodles stir-fried in brown bean sauce with eggs, bean sprouts, chives, crushed peanuts, and a lime wedge.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20mee%20korat.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'N3. Pad See Eiw',
    description: 'Flat rice noodles stir-fried in brown sauce with eggs, broccoli, Asian greens, and a lime wedge.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20see%20eiw.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'N4. Pad Khee Mao (Drunken Noodles)',
    description: 'Flat rice noodles stir-fried in brown sauce with eggs, broccoli, Asian greens, tomatoes, peppers, mushrooms, Thai basil, and a lime wedge.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20khee%20mao.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'N5. Pad Woon Sen',
    description: 'Glass noodles stir-fried in brown sauce with eggs, onions, baby corn, bean sprouts, tomatoes, cilantro, and a lime wedge.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/pad%20woon%20sen.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'N6. Thai Peanut Sauce Noodles',
    description: 'Thin rice noodles stir-fried in peanut sauce with eggs, bean sprouts, chives, crushed peanuts and a lime wedge.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/thai%20peanut%20sauce%20noodles.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'N7. Noodle Soup',
    description: 'Thin rice noodles in stewed beef broth, bean sprouts, green onions, cilantro, and fried garlic.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/noodle%20soup.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
  {
    title: 'N8. Noodle Tom Yum Soup',
    description: '(Minimum Spice Level MILD) Lemongrass chicken broth soup with flat rice noodles, bean sprouts, green onions, cilantro, crushed peanuts, and fried garlic.',
    image: 'https://img1.wsimg.com/isteam/ip/e6a149f9-5ae9-46a1-bc1e-2c17fef84928/noodle%20tom%20yum%20soup.JPG/:/rs=w:720,h:541,cg=true,m/cr=w:720,h:541',
    price: '$19.00',
  },
];

export default function Noodle() {
  const onlineOrder = () => {
    document.location.href = 'https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=e034bbd0-d0f6-4d94-ba06-6eabcfa70f6d';
  };

  return (
    <Box
      id='noodle'
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
            Noodle
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
