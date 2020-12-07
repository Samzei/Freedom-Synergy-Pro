import React from 'react';
import About from '../img/download.jpeg'

 
const AboutPresent = () => {
    return (
        <div className='flex'>
            <div className='mr5 ml6 pl5 w-50'>
                <h1 className='b pb4'>The people’s franchise <span className='light-red'>investment system</span></h1>
                <hr/>
                <p className='b'>Who We Are</p>
                <hr className='mb3'/>
                <p className='fw1 mv4'>
                    <span className='light-red'>Freedom synergy pro</span>
                    is a people’s franchise investment system (and a selfless campaign) 
                    with an uncommon style of business operation geared to increase cash 
                    flow, create multiple streams of income at the same time cater for 
                    your wellbeing both physically and in terms of securing a safe future 
                    for you and your generations unborn.
                </p>
                <hr/>
                <p className='b mv3'>How to do it</p>
                <hr className='mb4'/>
                <hr/>
                <p className='b mv3'>How to participate</p>
                <hr/>
            </div>
            <div>
                <img alt='About Pics' src={About}/>
            </div>
        </div>
    );
}
 
export default AboutPresent;