import * as React from 'react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import { Drawer } from '@mui/material';
import { navItems } from '../../../../Constant';
import { Link } from 'react-router-dom';
import '../Header/index.css'
const drawerWidth = 240;

const SideMenu = (props) => {
    const { window } = props;
    const container = window !== undefined ? () => window().document.body : undefined;
    return <nav>
        <Drawer
            container={container}
            variant="temporary"
            open={props.mobileOpen}
            onClose={props.changeHeaderToSideBar}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                ".MuiDrawer-paper": {
                    backgroundColor: '#0f1014'
                },
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
        >
            <Box onClick={props.changeHeaderToSideBar} sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ my: 2, color: 'white' }}>
                    <Link to='/' className='link' style={{ fontSize: '30px' }}>
                        Drizzel
                    </Link>
                </Typography>
                <Divider />
                <List>
                    {navItems.map(({ label, path }, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Link className='link' to={path}>
                                    {
                                        label
                                    }
                                </Link>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    </nav>

}

export default SideMenu