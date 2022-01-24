import * as React from 'react';
import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios'
import './FactCard.css'

export default function MediaCard() {

    const [catPics, setcatPics] = useState([])
    const [catFacts, setcatFacts] = useState([])
    
    function fetchData(){
      const catPicsAPI = 'https://api.thecatapi.com/v1/images/search'
      const catFactsAPI = 'https://catfact.ninja/fact'

      
    }

    function handleClick() {
      fetch(``)
            .then((result) => result.json())
            .then((data) => setcatPics(data))
    }

    let num = 1

    useEffect(handleClick, [])

  return (
    <>
    <div>
      {catPics.map(catPic =>{
        return (
          <Card className="Card" sx={{ maxWidth: 345 }}>
          <CardMedia className="card-media"
            component="img"
            alt="green iguana"
            height="140"
            image={catPic.url}
          />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Cat Pics
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Welcome to the Cat Pics universe. Enjoy pictures of cute catPics. Press Next Image for more
          next image of catPics.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small" onClick={handleClick}>Next Image</Button>
        </CardActions>
      </Card>
        )
      })}
    </div>
      
      </>
  );
  }