
import React, { useState } from 'react';
import Image from 'next/image';
import ResponsiveCarousel from '@components/CarouselComponent/CarouselComponent';
import Recommendation1 from '../../Images/recommendation-1.png';
import Recommendation2 from '../../Images/recommendation-2.png';
import '../../Style/feedback.scss';

const Feedback = () => {
    const expContent = [{imageUrl: Recommendation1, description:""},{imageUrl: Recommendation2, description:""}]
    return (
        <div id="Feedback" className='feedback-container'>
          <ResponsiveCarousel items={expContent}/>
        </div>
    );
}

export default Feedback;