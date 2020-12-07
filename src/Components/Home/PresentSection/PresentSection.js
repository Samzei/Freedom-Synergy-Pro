import React from 'react';
import fsp from '../../img/fsp.jpg'
import './PresentSection.css'

const PresentSection = () => {
    return (
        <div className='flex justify-between items-center mt5-5 '>
            <div className='ml4'>
                <img className='br5 h-100' alt='Coporate Handshake' src={fsp}/>
            </div>
            <div className='fw3 ml6'>
                <p className=''>Freedom Synergy Pro</p>
                <h1 className='f-5 mv0'>A present for your <span className='light-red'>future</span></h1>
                <div className='lh f4'>
                    <p>Wherever you are today, we could help you create a <strong>better</strong> tomorrow</p>
                    <p>Earn over <span className='light-red fw7'>100%</span> of your investment annually and get paid every six weeks.</p>
                    <p>Earn <span className='light-red fw7'>30%</span> with our <span className='light-red fw8'>premiun plan</span> in twelve months</p>
                </div>
                <div>
                    <p><strong>Phone:</strong> 234-(081)-4499-0027</p>
                    <p><strong>Location:</strong> Suit A5 Choice Plaza, Challenge Ibadan.</p>
                    <p><strong>Mail:</strong> freedomsynergypro@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default PresentSection