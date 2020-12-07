import React from 'react';
import PresentSection from './Home/PresentSection/PresentSection';
import Values from './Home/Values/Values';
import EntrustIcon from './Home/EntrustIcon/EntrustIcon';
import Plans from './Home/Plans/Plans';
import ImpPlans from './Home/ImpPlans/ImpPlans';
import Booking from './Home/Booking/Booking';
import Events from './Home/Events/Events';
import CostumerAdvice from './Home/CostumerAdvice/CostumerAdvice';
import Form from './Home/Form/form';

 
const home = () => {
    return (
       <div>
          <PresentSection />
          <div className='grid'>
            <Values />
            <EntrustIcon />
            <Plans />
            <ImpPlans />
            <Booking />
            <Events />
            <CostumerAdvice />
          </div>
          <Form />
       </div>
    );
}
 
export default home;