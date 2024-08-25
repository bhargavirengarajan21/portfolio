import React from 'react';
import CardComponent from '@components/CardComponent/CardComponent';
import '../../Style/project.scss';

const Project = () => {
    const projectContent = [{
        cardName: 'Music Playing using Hand gesture', 
        description: 'A music playing machine learning application which plays songs based on the hand gestures (american sign language). The tools I used to create the app is Keras, Tensorflow, OpenCv written in Python in an Linux environment', 
        link: 'https://github.com/bhargavirengarajan21/music-playing-using-hand-gestures', 
        ctaText: 'Github Link'
    }, {
        cardName: 'Air Pollution Prediction', 
        description: 'A Machine Learning air pollution prediction application where higher PM10 level indicates the high level of pollution. The Prediction is made by using XGBoost and This was developed as a web app where for both front and back end utilised Flask', 
        link: 'https://github.com/bhargavirengarajan21/airpollution', 
        ctaText: 'Github Link'
    }, {
        cardName: 'Event Management application', 
        description: 'A web application where user can post event, register, volunteer with chat options where they can chat with fellow participant. The app was developed with the help ReactJs, NodeJs, SocketIo, Sass and Docker.', 
        link: 'https://github.com/bhargavirengarajan21/Chat', 
        ctaText: 'Github Link'
    }, {
        cardName: 'Electrostatic Halftoning', 
        description: 'The idea of utilising the electrostatic force to produce an gray image where we consider each pixel with positive and negative force. These black pixel dots align themselves in a pattern with respect to original image. This is work in progress written in Python using numpy, matplotlib and vectorization', 
        link: 'https://github.com/bhargavirengarajan21/Chat', 
        ctaText: 'Github Link'
    }, {
        cardName: 'Image Compression using CUDA libraries', 
        description: 'This project explores the realm of GPU-accelerated image compression, aiming to leverage the parallel processing capabilities of Graphics Processing Units (GPUs) using libraries such as cuFFT and cuBLAS to perform key operations like run-length encoding, wavelet transforms, quantization, and Discrete Cosine Transform (DCT) compression in parallel.', 
        link: 'https://github.com/UCR-CSEE217/finalproject-f23-gpu-etherealtrio', 
        ctaText: 'Github Link'
    }, {
        cardName: 'Statistical Inference for Spatial Regionalization', 
        description: 'spatial regionalization, a challenging task of clustering areas, emphasizing the Statistical Inference for Spatial Regionalization (SISR) challenge. It introduces P-Regionalization through Recursive Partitioning (PRRP), a parallel algorithm with phases for initial construction, region merging, and splitting to maintain spatial contiguity and adhere to predefined cardinality.', 
        link: 'https://github.com/bhargavirengarajan21/Chat', 
        ctaText: 'Github Link'
    }];
    
    return (
        <div id="Project" className='project-container'>
            {projectContent.map((item, index) => (
            <div key={index}>
                <CardComponent {...item} />
            </div>
            ))}
        </div>
    );

}

export default Project;