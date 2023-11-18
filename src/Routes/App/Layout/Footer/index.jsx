import React from "react";
import { Box, Grid, Typography, Avatar, Divider } from "@mui/material";
import './index.css'
const similer_css = {
    width: 28,
    height: 28,
    backgroundColor: '#181920',
    border: '1px solid white',
    cursor: 'pointer',
    '&:hover': {
       boxShadow:'2px 2px 2px white'
    }
}


export const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={4} >
                    <Box className='grid-item'>
                        <Typography color='white' variant="body1" className={'header-logo'}>
                            Drizzel
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className='grid-item' flexDirection='column' >
                    <Typography variant="body1" className="normal-text"  >
                        Find Us On Social Media:
                    </Typography>
                    <Box className={'iconContainer'}>
                        <Avatar sx={similer_css}>
                            <img src="Images/facebook.png" alt="facebook" />
                        </Avatar>
                        <Avatar sx={similer_css}>
                            <img src="Images/twitter.png" alt="twitter" />
                        </Avatar>
                        <Avatar className='info-icon' sx={similer_css}>
                            <img src="Images/instagram.png" alt="instagram" />
                        </Avatar>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className='grid-item' flexDirection='column'>
                    <Typography variant="body1" className="normal-text">
                        We’re Always Happy To Help
                    </Typography>
                    <Typography variant="body1" className="normal-text">
                        uifry@gmail.com
                    </Typography>
                </Grid>
            </Grid>
            <br />
            <br />
            <Box className='grid-item'>
                <br />
                <Divider color='white' width='60%' />
                <br />
                <Typography variant="body1" className="normal-text">
                    Copyright © 2023 Drizzel
                </Typography>

            </Box>
        </Box>
    );
};

export default Footer;