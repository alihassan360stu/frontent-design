import { Box, FormControl, InputLabel, InputBase, Button } from "@mui/material"
import { alpha, styled } from '@mui/material/styles'
import './index.css'


const CustomizeInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
        marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
        border: '1px solid',
        borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
        fontSize: 14,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

const AddressSection = () => {
    return <Box className='address-container'>
        <div className='address-text-container'>
            <p className="address-text-style">
                Ready to start a project with us?
            </p>
        </div>
        <br />

        <div className='address-field-container'>
            <FormControl variant="standard">
                <CustomizeInput defaultValue="enter email address" id="bootstrap-input" />
            </FormControl>
            <Button className="address-btn" sx={{ backgroundColor: '#7A62F9' }} variant="contained">Get Started</Button>
        </div>
        <div>
        </div>
    </Box>

}

export default AddressSection