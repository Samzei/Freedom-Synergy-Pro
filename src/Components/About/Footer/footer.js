import React from 'react';
import Logo from '../../img/logo_s.png'

const Footer = () => {
    return (
        <div style={{background: '#353a3d'}}>
            <div className='mh7 pv5 flex near-white'>
                <div className='mr5 w-40'>
                    <img alt='Logo' src={Logo} className='pb4'/>
                    <p>Freedom Synergy Pro an initiative intermediating between you and multinationals towards rendering professional services on your behalf.'</p>
                </div>
                <div className='w-30'>
                    <p className='mb3 f3 b'>Working Hours</p>
                    <p className='mb3 b'><span className='mid-gray'>Mo: </span> 08:00am - 05:00pm</p>
                    <p className='mb3 b'><span className='mid-gray'>Te: </span> 08:00am - 05:00pm</p>
                    <p className='mb3 b'><span className='mid-gray'>We: </span> 08:00am - 05:00pm</p>
                    <p className='mb3 b'><span className='mid-gray'>Th: </span> 08:00am - 05:00pm</p>
                    <p className='mb3 b'><span className='mid-gray'>Fr: </span> 08:00am - 05:00pm</p>
                    <p className='mb3 b'><span className='mid-gray'>Sa: </span> 08:00am - 05:00pm</p>
                </div>
                <div className='w-30'>
                    <p className='mb3 f3 b'>Pages</p>
                    <p className='mb3'><span className='near-white'>Home</span></p>
                    <p className='mb3'><span className='mid-gray hover-near-white'>About</span></p>
                    <p className='mb3'><span className='mid-gray hover-near-white'>Services</span></p>
                    <p className='mb3'><span className='mid-gray hover-near-white'>Contact</span></p>
                </div>
                <div className=''>
                    <p className='mb3 f3 b'>Annex</p>
                    <p className='mb3 f3 b'>Ijebu-Ode</p>
                    <p>Debash Shopping Plaza, No. 1 Alhaji Jogbo Street, Awokoya, Ijebu-Ode, Ogun State.</p>
                    <p className='mb3 f3 b'>Ilorin</p>
                    <p>No. 171 Suite 7B, Santosh Plaza Opposite Access Bank, Ibrahim Taiwo Road, Ilorin, Kwara State.</p>
                    <p className='mb3 f3 b'>Saki</p>
                    <p>Shop No. 22 Rafyak Filling Station, Kolawole, Saki.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
