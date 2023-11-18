import { Box } from '@mui/material'
import { company_logo } from '../../../Constant'
import './index.css'

const ratingArray = [
    { number: '13+', label: 'years of experience' },
    { number: ' 74+', label: 'Project Completed' },
    { number: ' 9.2+', label: 'Trusted Companies' },
]

const bannerArray = ['design', 'app design', 'logo design', 'ui/ux design']

const Home = () => {
    return <Box className='home-continer'>
        <div>
            <h2 className='home-link'>Drizzel Creative Agency</h2>
        </div>
        <div className='home-heading'>
            <img className='home-heading-image1' src='Images/subtract.png' />
            <img className='home-heading-image2' src='Images/subtract.png' />
            <p>Digital Agency</p>
            <p>With Solid Design</p>
        </div>
        <br />
        <br />
        <div className='home-rating'>
            {ratingArray.map(({ number, label }) => <div key={number} className='home-grid-item'>
                <p>
                    {number}
                </p>
                <h6>{label}</h6>
            </div>)}
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className='home-banner-container'>
            {
                bannerArray.map((item, index) => <div key={item} className='home-banner-item'>
                    <p>
                        {item}
                    </p>
                    {index !== bannerArray.length - 1 && <img src='Images/subtract.png' />}
                </div>)
            }

        </div>
        <div className='home-company-logo'>
            {
                company_logo.map((item, index) => <div key={item} className='home-banner-item'>
                    <img src={`Images/Portfolio/${item}.png`} />
                </div>)
            }

        </div>
    </Box>
}

export default Home 