import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import BookIcon from '@mui/icons-material/Book';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../../Style/footer.scss';

const Footer = () => (
    <div id="Contact" className='footer-container'>
        <div className=''>
            <h3>Contact Me:</h3>
        </div>
        <div>
            <a href="https://dev.to/bhargavirengarajan21/what-is-docker-docker-series-i-1kb8"><BookIcon fontSize="large" /></a>
            <a href="https://www.facebook.com/bhargavi.rengarajan/"><FacebookIcon fontSize="large" /></a>
            <a href="https://www.instagram.com/bhargavirengarajan21/"><InstagramIcon fontSize="large" /></a>
            <a href="https://github.com/bhargavirengarajan21"><GitHubIcon fontSize="large" /></a>
            <a href="mailto:breng002@ucr.edu"><GoogleIcon fontSize="large" /></a>
            <a href="https://www.linkedin.com/in/bhargavi-r21/p"><LinkedInIcon fontSize="large" /></a>
        </div>
    </div>
);

export default Footer;