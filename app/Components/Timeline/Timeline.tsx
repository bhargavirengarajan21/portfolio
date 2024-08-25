import React from "react";
import "../../Style/timeline.scss";
import Picture1 from '../../Images/Picture-1.jpg';
import Hobbies from '../../Images/hobbies.png';
import Winner from '../../Images/winner.png';
import feedback from '../../Images/feedback-kid.jpg';
import quora from '../../Images/quora.webp';
import dev from '../../Images/dev.png';
import IEEE from '../../Images/ieee.png';
import CardComponent from '@components/CardComponent/CardComponent';
import { CardComponentProps } from 'types/types';

const timelineData = [
  {
    cardName: 'Attended ESRI User experience GIS Conference 2024 at San Diego',
    imageSrc: Picture1.src,
  },
  {
    cardName: "Awarded as 'Challenger' for the quarter OCT-DEC 2022 at Mr. Cooper",
    imageSrc: Winner.src,
  }, 
  {
    cardName: "Mentored Interns and during summer student Program",
    imageSrc: feedback.src,
  },
  {
    cardName: "Published Paper 'Assessment Of Spatial Hazard And Impact Of PM10 Using Machine Learning'",
    link: "https://ieeexplore.ieee.org/document/9315283",
    imageSrc: IEEE.src,
    ctaText: 'Go To Website'
  },
  {
    cardName: "Tech Blog on Docker",
    imageSrc: dev.src,
    link: "https://dev.to/bhargavirengarajan21/what-is-docker-docker-series-i-1kb8",
     ctaText: 'Go To Website'
  },
  {
    cardName: "Answering Questions in Quora",
    imageSrc: quora.src,
    link: 'https://www.quora.com/profile/Bhargavi-Rengarajan-3/answers',
     ctaText: 'Go To Website'
  },
  {
    cardName: "Singing and Drawing",
    imageSrc: Hobbies.src,
  }
];

  
const TimelineItem = ({ ...data }:CardComponentProps) => {
   return(
    <div className={`timeline-item`}>
       <CardComponent {...data}/>
    </div>
)};

const Timeline = () => (
  <div className="timeline-wrapper">
   
    <div className="timeline-container">
      {timelineData.map((data, idx) => (
      <TimelineItem {...data} key={idx} />
      ))}
    </div>
  </div>
);

export default Timeline;
