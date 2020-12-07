import React from 'react'
import contact from '../../img/contact.jpg'
import './form.css';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: ''
        }
    }
    render() {
        return(
            <div className='flex mv5'>
                <img alt='Contact' src={contact}  className='self-start mr6'/>
                <form className='w-100 ph6'>
                    <p className='f2'><span className='light-red'>Join</span> and start earning</p>
                    <div className='mt3'>
                        <label className='fw3' htmlFor='name'>Your Name (required)</label>
                        <input className='w-100 pt5 pb2 input-reset bn focus' type='text' name='name' id='name' /><hr className='white-50'/>
                    </div>
                    
                    <div className='mt3'>
                        <label className='fw3' htmlFor='email'> Your Email (Requried)</label>
                        <input className='w-100 pt5 pb2 input-reset bn focus' type='email' name='email' id='email' /><hr className='white-50'/>
                    </div>
                    
                    <div className='mt3'>
                        <label className='fw3' htmlFor='subject'>Subject</label>
                        <input className='w-100 pt5 pb2 input-reset bn focus' type='text' name='subject' id='subject' /><hr className='white-50'/>
                    </div>

                    <div className='mt3'>
                        <label className='fw3' htmlFor='message'>Message</label>
                        <input className='w-100 pt5 pb2 input-reset bn focus' type='text' name='message' id='message' /><hr className='white-50'/>
                    </div>
                    
                    <button className='ba br hover-bg-light-red hover-light-gray bg-white-90 hover-br ph4 pv3 fw3 mv4'>Send</button>
                    <div className='lh'>
                        <p><strong>Phone:</strong> 234-(081)-4499-0027</p>
                        <p><strong>Location:</strong> Suit A5 Choice Plaza, Challenge Ibadan.</p>
                        <p><strong>Mail:</strong> freedomsynergypro@gmail.com</p>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form;