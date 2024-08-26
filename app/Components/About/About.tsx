"use client"
import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import Timeline from '../Timeline/Timeline';
import Image from "next/image";
import Picture from '../../Images/Picture-4.jpg';
import '../../Style/about.scss';

const About = () => {
    const aboutMeHeader = 'Software Engineer | Frontend & Backend Development | Machine Learning Enthusiast | Graduate UCR Student'
    const aboutMeContent = "Hey, I'm Bhargavi Rengarajan! I analyze thrillers with a grin, sing with a flair that’s bound to win, and code with a passion that’s deep within. I’m fluent in Java, Python, and ReactJS—basically, don’t ask me to pick a favorite because I might start coding in puns!. I also dabble in cloud platforms like AWS and Azure, because why not have my head in the clouds?  I’m just here to make the tech world a little more entertaining—and maybe, just maybe, keep my sanity intact while I’m at it."
    const [open, setOpen] = useState(true);
    return (
    open ? <div className='#About about-me-container'>
        <div className='left-container'>
            <h3>{aboutMeHeader}</h3>
            <p>{aboutMeContent}</p>
            <div className='cta-container'>
                <button className='button' onClick={() => setOpen(false)}>Click To know More</button>
                <Link href='/resume.pdf' target="_blank" className='button' download>Resume to download</Link>
            </div>
        </div>
        <div className='right-container'>
            <Image alt='' src={Picture} />
        </div>
    </div> : <Timeline />
    );
}

export default About;