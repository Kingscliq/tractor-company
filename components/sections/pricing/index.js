import React from 'react';
import { pricingWidget, silo } from '../../../public/assets/images';
import { DashSectionsRight } from '../../widgets/dash';

const Pricing = () => {
  return (
    <DashSectionsRight
      heading="GRAIN CART"
      // paragragh="We get paid when you do. No registration fee & No yearly Subscription - we believe that the best things in life are free & you should only pay when you get paid. Our ’Partnership’ allows you to use all of Stakecut’s Benefits & pay a small percentage only when you get paid!"
      img={silo}
      paragraph="Are you ready to make your harvest operation more productive?  If so, start by finding your nearest West PGC handling equipment dealer!  Simply enter your postal code to find your nearest dealers with West PGC carts for sale and West PGC wagons for sale. "
    />
  );
};

export default Pricing;
