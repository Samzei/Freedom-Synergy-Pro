import React from 'react';
import './Booking.css'

const Booking = () => {
    return (
        <div className='sec-6'>
            <div className='grid-6 tc pv4'>
                <p className='f2 fw6 mb4'>
                    A <span className='light-red'>credible</span> investment opportunity, best returns on investment. 
                    We invite you to a business meeting. 
                    <span className='light-red'>Invest</span> and let your money do the work.
                </p>
                <button className='ba br hover-bg-light-red hover-light-gray hover-br ph4 pv3 fw3 mr3'>Book An Appointment</button>
            </div>
        </div>
    )
}

export default Booking;