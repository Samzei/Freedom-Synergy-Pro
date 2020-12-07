import React from 'react';
import './Events.css';
import point from '../../img/fspro_point.png'
import Video from '../../img/video.png'

const Events = () => {
    return (
        <div className='sec-5 pv4'>
            <img alt='Man Pointing' src={point} className='col-1'/>
            <div className='col-2'>
                <h2 className='f1 b'><span className='light-red'>Events</span> and activities of FSP</h2>
                <p className='f4 fw1 lh-copy'>Are you looking for a safe and authentic way to increase cash flow without referrals, sales or quitting your job? An opportunity is here for you to attend our business forum where we would educate you about our investment plan and situation on the market.</p>
            </div>
            <div className='col-3 h-100 pt4'>
                <img alt='Video' src={Video} />
            </div>
        </div>
    )
}

export default Events;