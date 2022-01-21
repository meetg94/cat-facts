import * as React from 'react';
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from "axios"
import './FactCard.css'

export default function MediaCard() {

    const [dog, setDog] = useState([])

    useEffect(() => {
        axios.get('https://dog-facts-api.herokuapp.com/api/v1/resources/dogs?number=1', {
            headers: {
            }
        })
            .then(res => {
                console.log(res.data)
            })
}, [])

  return (
    <Card sx={{ maxWidth: 345 }} className="Card">
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
