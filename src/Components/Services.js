import React from 'react';
import EntrustIcon from './Home/EntrustIcon/EntrustIcon';
import Plans from './Home/Plans/Plans';
import ImpPlans from './Home/ImpPlans/ImpPlans';
import Form from './Home/Form/form';
import ServiceHeading from './Services/ServiceHeading';

 
const home = () => {
    return (
       <div>
          <ServiceHeading />
          <div className='grid'>
            <EntrustIcon />
            <ImpPlans />
            <Plans />
          </div>
          <Form />
       </div>
    );
}
 
export default home;