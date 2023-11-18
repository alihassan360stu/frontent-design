import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import './index.css'
const icon_array = [
    {
        image: 'star',
        heading: 'Amazing Designs',
        paragrph: 'Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht.'
    },
    {
        image: 'hue',
        heading: 'Dedicated Team',
        paragrph: 'Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht.'
    },
    {
        image: 'call',
        heading: '24/7 Support',
        paragrph: 's ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht.'
    },
]

export const FAQ = () => {
    return (
        <div className='faq-container'>
            <Grid container >
                <Grid item xs={12} sm={6} display='flex' justifyContent='center' >
                    <img height={'500px'} src='Images/vector.png' />
                </Grid>
                <Grid item xs={12} sm={6} >
                    <Box className='faq-grid-item'>
                        <h5>why choose us</h5>
                        <p>creating beatiful design based on client needs</p>
                        <h4>Es ist ein lang erwiesener Fakt, dass ein Leser vom Text wird, wenn er sich ein Layout ansieht.</h4>
                    </Box>
                    {
                        icon_array.map((item) => <div className="grid-item-child" key={item.image}>
                            <img src={`Images/${item.image}.png`} />
                            <div style={{marginLeft:'15px' , width:'400px'}}>
                                <h3>{item.heading}</h3>
                                <p>{item.paragrph}</p>
                            </div>
                        </div>)
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default FAQ;