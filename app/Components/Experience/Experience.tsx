import React from 'react';
import Image from 'next/image';
import parser from 'html-react-parser';
import MrCooper from '../../Images/images.png';
import '../../Style/experience.scss';

const Experience = () => {
    const experienceContent = [
        {title: "Software Engineering - Graduate Intern", date: "Jan 2020 - June 2020", description: "<ul><li>Worked on test coverages for Ruby on rails services and used enzyme and mocha for React components </li><li>Revamped Mr. Cooper’s website to comply with the Americans’ Disabilities Act (ADA) with WAI-ARIA standards</li></ul>"},
        {title: "Software Engineerin - trainee", date: "July 2020 - Dec 2021", description: "<ul><li>Speeded up the banner creation process for multivariate templates, cutting down 90% of the development time spent on creating it from scratch using Embed ruby , Ruby on rails, Nodejs.</li><li>Implemented react forms and other page components for marketing campaign pages using Ruby on Rails, React which improved lead generation by 50%</li><li>Constructed a page with a personalized video by Idomo, which re-capture customers who wished to refinance</li></ul>"},
        {title: "Software Engineer - I", date: "Jan 2021 - Apr 2022", description: "<ul><li>Created middleware to track customer interactions and monitor page performance. Implemented data storage and retrieval using Redis. which resulted in increasing the customer conversion rate by 30%.</li><li>Successfully migrated marketing pages to the Gatsby framework and achieved a Lighthouse score of 90%, reducing page load time by 500 ms and enhancing user experience.</li><li>Ensured code reliability by rigorously testing React components using React Testing Library and Jest.</li><li>Designed captivating marketing landing pages promoting refinance and servicing options resulted in a 50% increase in lead generation.</li><li>Part of in-house web applications for employees to post and share ideas where it was successful in bringing lot of ideas</li><li>Created an app to showcase 2021 achievements. Utilized Node.js, React.js, Redux, and MongoDB to build robust and interactive solutions.</li></ul>"},
        {title: "Software Engineer - II", date:" May 2023 - Sept 2023", description: "<ul><li>Successfully implemented a Feedback Reviews Section for Loan officers in NextJs with various filters and sorting options, a page utilizing the Experience API. These enhancements resulted in a personalized user experience, leading to a 25% increase in customers reaching out to Loan Officers.</li><li>Migrated the Gatsby pages to Nextjs in order to achieve server-side rendering and improving the page performance by 60%</li><li>Leveraged Microsoft Omni Channel Chat for enhanced customer engagement on marketing pages. This facilitated the Customers to know about the offers and increased the 50% lead conversion rate.</li><li>Achieved a 15% reduction in bundle size, optimizing application efficiency through React component library tree shaking.</li><li>Published API endpoint responses as Node packages for cross-application use with TypeScript</li></ul>"}];
    
    return(
        <div id="Experience" className='experience-container'>
            <div className='experience-image-container'>
                <Image src={MrCooper} alt="mr cooper logo" />
                <div className='experience-image-content'> 
                    <h3>Mr. Cooper</h3>
                    <span>Chennai, India</span>
                    <span>3 years 9 Months</span>
                </div>
            </div>
            {experienceContent.map((item, index) => (
               <div key={index}  className='experience-left-container'>
                    <div className='timeline'>
                        <i />
                        <div className='verticle-ruler' />
                    </div>
                    <div className='experience-content-container'>
                        <h2>{item.title}</h2>
                        <span>{item.date}</span>
                        {parser(item.description)}
                    </div>
               </div>
            ))}
        </div>
    );
};

export default Experience;