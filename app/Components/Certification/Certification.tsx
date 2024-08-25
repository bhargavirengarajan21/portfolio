import CardComponent from '@components/CardComponent/CardComponent';
import React from 'react';
import AzureFundamentals from '../../Images/Azure-fundamentals.png';
import AzureDev from '../../Images/azure-associate.png';
import SolidPrinciple from '../../Images/solid-principal.jpg';
import Kotline from '../../Images/kotline.png';
import SpringBoot from '../../Images/spring-boot.png';
import MongoDbBasics from '../../Images/mongo-db-basics.png';
import MongoDbJS from '../../Images/Mongo-db-js.png';
import '../../Style/certification.scss';

const Certification = () => {

    const certificationContent = [
        {cardName: 'Solid Principles (2022) for Software Architecture & Design', imageSrc: SolidPrinciple.src},
        {cardName:'Microsoft Certified: Azure Fundamentals', imageSrc: AzureFundamentals.src},
        {cardName:'Microsoft Certified: Azure Developer Associate',imageSrc: AzureDev.src},
        {cardName: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud', imageSrc: SpringBoot.src},
        {cardName:'Kotlin for Java developer', imageSrc: Kotline.src},
        {cardName:'M220JS: MongoDB for JavaScript Developers', imageSrc: MongoDbJS.src},
    ]

    return(
        <div id="Certification" className='certification-container'>
            {certificationContent.map((item, index) => <div key={index}>
                <CardComponent {...item} />
            </div>)}
        </div>
    );
};

export default Certification;