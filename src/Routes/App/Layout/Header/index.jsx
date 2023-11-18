import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import './index.css'
import { navItems } from '../../../../Constant';
import { Link } from 'react-router-dom';

export default function DrawerAppBar({ changeHeaderToSideBar }) {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="static" sx={{ backgroundColor: '#181920', boxShadow: 'none' }} component="nav">
                <Toolbar className='nav-bar'>
                    <Box sx={{ display: 'flex' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={changeHeaderToSideBar}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h4"
                            component="div"
                            className='Header-logo'
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link to='/' className='link' style={{ fontSize: '34px' }}>
                                Drizzel
                            </Link>
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
                        <Box className='parent-link' >
                            {navItems.map(({ path, label }, index) => (
                                <Link to={path} key={index} className='link'>
                                    {label}
                                </Link>
                            ))}
                        </Box>
                    </Box>

                    <Box>
                        <Link style={{ marginRight: '10px' }} className='link'>
                            sign in
                        </Link>
                        <Button sx={{ backgroundColor: '#7A62F9' }} className='started-btn' variant="contained">Get Started</Button>
                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}

