"use client"
import React, {createContext, ReactNode, useEffect, useState} from 'react';
import LightSpeedInLeft,{Fade} from 'react-awesome-reveal';
import About from '@components/About/About';
import Project from '@components/Project/Project';
import Experience from '@components/Experience/Experience';
import Feedback from '@components/Feedback/Feedback';
import Certification from '@components/Certification/Certification';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Skill from '@components/Skills/Skill';
import './Style/profile.scss';
import { Diversity2 } from '@mui/icons-material';



const Profile = () => {
    const [isVisible, setVisible] = useState(true);
    const [element, setElement] = useState("About");

    useEffect(() => {
        setTimeout(() => {
            setVisible(false);
        }, 5000);
    },[]);

    useEffect(() => {
        if(element == "Footer")
            window.location.href = "#Contact";
    },[element]);


    return(
        <React.Fragment>
         <Header onClickHandler={setElement}/>
         <div className='profile-container'>
            {isVisible ?<Fade triggerOnce={true} duration={5000} className='introduction' >
                Hi, Happy to know you !. I am Bhargavi
            </Fade> : ""}
            <div className="child-container">
                {element == "About" && <LightSpeedInLeft delay={5003} triggerOnce={true}><About /></LightSpeedInLeft>}
                {element == "Projects" && <Project />}
                {element == "Experience" && <Experience />}
                {element == "Certification" && <Certification />}
                {element == "Feedback" && <Feedback />}
                {element == "Skills" && <Skill />}
            </div>
        </div>
        <Footer />
        </React.Fragment>
    );
}

export default Profile;