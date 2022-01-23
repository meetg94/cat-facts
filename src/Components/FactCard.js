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

    const [dogs, setDogs] = useState([])


    let num = 1

    useEffect(() => {
        axios.get(`/api/v1/resources/dogs?number=1`)
            .then((result) => console.log(result.data))
}, [])

  return (
    <div>
      return (
          <Card sx={{ maxWidth: 345 }} className="Card">
          <CardMedia
          component="img"
          height="140"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Dog Fact: {dogs}
          </Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Next Fact</Button>
        </CardActions>
      </Card>
      )
      </div>
  );
}
