import React, {useState} from 'react';
import ReactImg from '../../Images/reactjs.png';
import Enzyme from '../../Images/enzyme-test.jpg';
import Jenkins from '../../Images/jenkins.png';
import Kotline from '../../Images/kotlin.png';
import Nodejs from '../../Images/nodejs.png';
import Aws from '../../Images/aws.png';
import Azure from '../../Images/azure.png';
import Kafka from '../../Images/kafkha.png';
import RabitMq from '../../Images/rabbitmq.webp';
import Ror from '../../Images/rubyonrails.png';
import NewRelic from '../../Images/newrelic.webp';
import springBoot from '../../Images/spring-boot-1.png';
import keras from '../../Images/keras.webp';
import gemini from '../../Images/gemini.jpg';
import colab from '../../Images/colab.png';
import C from '../../Images/C-c++.png';
import CSharp from '../../Images/c-sharp.webp';
import Go from '../../Images/Go.png';
import Html from '../../Images/html.png';
import JavaImag from '../../Images/javaimg.png';
import Js from '../../Images/javascript.png';
import Numpy from '../../Images/numpy.png';
import OpenCV from '../../Images/opencv.svg';
import Python from '../../Images/python.jpeg';
import PyTorch from '../../Images/pytorch.png';
import Scikit from '../../Images/scikit-learn.png';
import TensorFlow from '../../Images/tensorflow.png';
import git from '../../Images/git.png';
import vscode from '../../Images/vscode.png';
import airbrake from '../../Images/airbrake.png';
import splunk from '../../Images/splunk.png';
import BeautifulSoup from '../../Images/beautiful-soup.png';
import SQL from '../../Images/nosql.png';
import '../../Style/skill.scss';



const Skill = () => {
    const skills = {
        "Sde": [ReactImg, Enzyme, Jenkins, Kotline, Nodejs, Aws, Azure, Kafka, CSharp, RabitMq, NewRelic, springBoot,git,vscode,airbrake,splunk,SQL],
        "MachineLearning": [TensorFlow, keras, gemini, colab, OpenCV, PyTorch, Scikit, Numpy,git,vscode,splunk, BeautifulSoup],
        "cloud engineer": [Aws, Azure,git,vscode,Jenkins, airbrake,splunk],
        "devops": [Jenkins, RabitMq, Azure, Aws,git,vscode,splunk],
        "All": [ReactImg,Enzyme,Jenkins,Kotline,Nodejs,Aws,Azure,Kafka,SQL,RabitMq,Ror,NewRelic,springBoot,keras,gemini,colab,C,CSharp,Go,Html,JavaImag,Js,Numpy,OpenCV,Python,PyTorch,Scikit,TensorFlow,vscode,git,splunk],
        "language": [JavaImag,C,CSharp,Python,Go],
    }
    const [inputRadio, setInput] = useState("All");

    return (
        <div className='skill-container'>
            <div className='input-container'>
                <label className="container">All
                    <input type="radio" checked={inputRadio == "All" ? true : false}  name="radio" onClick={() => setInput("Sde")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Full Stack Development
                    <input type="radio" checked={inputRadio == "Sde" ? true : false} name="radio"  onClick={() => setInput("Sde")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Machine Learning
                    <input type="radio" name="radio" checked={inputRadio == "MachineLearning" ? true:false} onClick={() => setInput("MachineLearning")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Cloud 
                    <input type="radio" checked={inputRadio == "cloud engineer" ? true:false} name="radio" onClick={() => setInput("cloud engineer")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Devops 
                    <input type="radio" checked={inputRadio == "devops" ? true: false} name="radio" onClick={() => setInput("devops")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container">Languages
                    <input type="radio" checked={inputRadio == "language" ? true: false} name="radio" onClick={() => setInput("language")}/>
                    <span className="checkmark"></span>
                </label>
            </div>
            <div className='output-container'>
                {skills[inputRadio as keyof typeof skills].map((item,index) => <img src={item.src} alt="" key={index}/>)}
            </div>
        </div>
    );
}

export default Skill;