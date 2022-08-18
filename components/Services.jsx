import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from 'next/dist/client/image'
import style from "../styles/Services.module.css"


import Box from '@mui/material/Box';
import Container from '@mui/material/Container';




const Services = () => {
    return (
        <Box className={style.container}>
            <Container>
                <div className={style.feature}>
                    <span className={style.featureHeading}>FEATURE</span>
                    <h1>Our Feature & Services</h1>
                </div>
                <div className={style.card}>
                    <div className={style.cardItem}>
                        <Image
                            src="/img/Avocado.png"                            
                            width="150px"
                            height="200px"
                            objectFit='cover'
                        />
                        <h4>Communication</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum velit eveniet doloribus voluptatum, magnam voluptate quod commodi earum. Incidunt totam autem architecto.</p>

                        <Button variant="contained">Contained</Button>
                    </div>
                    <div className={style.cardItem}>
                        <Image
                            src="/img/Avocado.png"
                        
                            width="150px"
                            height="200px"
                            objectFit='cover'
                        />
                        <h4>Inspired Design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum velit eveniet doloribus voluptatum, magnam voluptate quod commodi earum. Incidunt totam autem architecto.</p>

                        <Button variant="contained">Contained</Button>
                    </div>
                    <div className={style.cardItem}>
                        <Image
                            src="/img/Avocado.png"
                            width="150px"
                            height="200px"
                            objectFit='cover'
                        />
                        <h4>Happy Customers </h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta harum velit eveniet doloribus voluptatum, magnam voluptate quod commodi earum. Incidunt totam autem architecto.</p>

                        <Button variant="contained">Contained</Button>
                    </div>
                </div>
            </Container>


        </Box>
    )
}

export default Services