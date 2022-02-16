import React,{useState} from 'react';
import './about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {fab,faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";



const About = () => {
    
    const [state, setstate] = useState({Birthday:'19 Augest 1995',Age:26,Email:'serag622@gmail.com',Phone:'01020368273',Country:'Egypt'});


    return (
        <div className='a p-5'>
            {/* <div className='col'>

            </div>
            <div className='col'>

            </div> */}
            <h2 className='fs-1 fw-bold'>About Me</h2>

            <hr className='a-line' style={{height:'8px'}}/>
            <hr className='a-line' style={{width:'80px',height:'8px'}}/>

            <div className='row row-cols-2  p-3'>

               <div className='col '>
                <p className='fs-3'><span className='fs-2 fw-bold'>Birthday :</span> {state.Birthday}</p>
                 <hr className='w-50' style={{height:'2px'}}/>
               </div>

               <div className='col '>
                <p className='fs-3'><span className='fs-2 fw-bold'>Age :</span> {state.Age}</p>
                 <hr className='w-50' style={{height:'2px'}}/>
               </div>

               <div className='col '>
                <p className='fs-3'><span className='fs-2 fw-bold'>Email :</span> {state.Email}</p>
                 <hr className='w-50' style={{height:'2px'}}/>
               </div>

               <div className='col '>
                <p className='fs-3'><span className='fs-2 fw-bold'>Phone :</span> {state.Phone}</p>
                 <hr className='w-50' style={{height:'2px'}}/>
               </div>

               <div className='col '>
                <p className='fs-3'><span className='fs-2 fw-bold'>Country :</span> {state.Country}</p>
                 <hr className='w-50'style={{height:'2px'}}/>
               </div>

            </div>
            <div className='d-flex p-5 fs-1'>
                <a className='a-icon m-3' href={'https://www.facebook.com/serag.tarek.79/'}><FontAwesomeIcon icon={faFacebook} /></a>
                <a className='a-icon m-3' href={'https://www.linkedin.com/in/serag-tarek-32105617b/'}><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className='a-icon m-3' href={'https://github.com/serag622'} ><FontAwesomeIcon icon={faGithub} /></a>                
            </div>
            
        </div>
    );
}

export default About;
