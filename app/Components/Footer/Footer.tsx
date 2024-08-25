import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import BookIcon from '@mui/icons-material/Book';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import '../../Style/footer.scss';

const Footer = () => (
    <div id="Contact" className='footer-container'>
        <div className=''>
            <h3>Contact Me:</h3>
        </div>
        <div>
            <a href=""><BookIcon fontSize="large" /></a>
            <a href=""><FacebookIcon fontSize="large" /></a>
            <a href=""><InstagramIcon fontSize="large" /></a>
            <a href=""><GitHubIcon fontSize="large" /></a>
            <a href=""><PhoneIcon fontSize="large" /></a>
            <a href=""><GoogleIcon fontSize="large" /></a>
            <a href=""><LinkedInIcon fontSize="large" /></a>
        </div>
    </div>
);

export default Footer;