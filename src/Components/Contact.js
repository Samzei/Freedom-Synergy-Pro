import React from 'react';
import ContactCard from './Contact/ContactCard'
import Form from './Home/Form/form';

 
const Contact = () => {
    return (
       <div>
          <div className='mh7 ph7 mv6'>
            <p className='f-5 b mv0'>How to <span className='light-red'>contact</span> us</p>
            <p className='f4'> Home &#8827; <span className='light-red'>Contact</span></p>
         </div>
         <div className='grid'><ContactCard /></div>
          <Form />
       </div>
    );
}
 
export default Contact;