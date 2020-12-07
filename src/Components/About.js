import React from 'react';
import AboutPresent from './About/AboutPresent'
import Values from './Home/Values/Values';
import CostumerAdvice from './Home/CostumerAdvice/CostumerAdvice';
import Form from './Home/Form/form';

 
const About = () => {
    return (
       <div>
          <div className='mh7 ph7 mv6'>
            <p className='f-5 b mv0'>More<span className='light-red'>about</span>our company</p>
            <p className='f4'> Home &#8827; <span className='light-red'>About</span></p>
         </div>
         <AboutPresent />
         <div className='grid'>
            <Values />
            <CostumerAdvice />
         </div>
         <Form />
       </div>
    );
}
 
export default About;