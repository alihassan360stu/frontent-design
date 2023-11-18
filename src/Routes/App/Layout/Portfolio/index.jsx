
import { portfolio_images} from '../../../../Constant/index'
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import { Button } from '@mui/material'
import ImageListItem from '@mui/material/ImageListItem';
import './index.css'

export const Portfolio = () => {
    return <div className='portfolio-container'>
        <h5>Portfolio</h5>
        <p>Our Latest Projects</p>

        <ImageList sx={{ width: '100%' }} cols={4} >
            {portfolio_images.map((item) => (
                <ImageListItem key={item}>
                    <img
                        srcSet={`Images/Portfolio/${item}.png`}
                        src={`Images/Portfolio/${item}.png`}
                        alt={item}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
       <div style={{width:'25%'}}>
       <Button className="portfolio-btn" fullWidth size='large' sx={{ backgroundColor: '#7A62F9' }} variant="contained">More</Button>
       </div>
    </div>

};

export default Portfolio;