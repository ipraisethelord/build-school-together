import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { DonationMessage } from '../../data/writtings/';
import { useMediaQuery } from '@mui/material';

export default function DonationCard() {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  let cardWidth = 300; // Default width for small screens
 let height=200;
  if (isMediumScreen) {
    cardWidth = 800;
    height=500;
  }

  if (isLargeScreen) {
    cardWidth = 900;
    height=600;
  }

  return (
    <Card sx={{ maxWidth: cardWidth }}>
      <CardMedia
        component="img"
        alt="unfinished school"
        height={height}
        image="/images/school-building-front.jpg"
      />
      <CardContent style={{ height: 'auto' }}>
        <Typography gutterBottom variant="h5" component="div">
          Build School Together
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <DonationMessage />
        </Typography>
      </CardContent>
    </Card>
  );
}
