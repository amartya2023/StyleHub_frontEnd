import { Button, Card, CardContent, Typography, styled } from '@mui/material'
import React from 'react'

const TrignleImg = styled("img")({
    right: 0,
    bottom: 0,
    height: 170,
    position: "absolute"
})

const TrophyImg = styled("img")({
    right: 36,
    bottom: 20,
    height: 98,
    position: "absolute"
})

const Achivement = () => {
  return (
    <Card sx={{position: "relative", bgcolor:"#0d0d22", color: "white"}}>
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing: ".25px"}}>
                StyleHub Fasion
            </Typography>

            <Typography variant='body2'>
                Congratulation 🥳
            </Typography>

            <Typography variant='h5' sx={{my:3.1, color: "#453efd"}}>
                420.8k
            </Typography>

            <Button size='small' variant='contained'>View Sales</Button>

            <TrignleImg src=''></TrignleImg>
            <TrophyImg src='https://www.pngplay.com/wp-content/uploads/6/Gold-Trophy-Vector-Transparent-PNG.png' />

        </CardContent>
    </Card>
  )
}

export default Achivement