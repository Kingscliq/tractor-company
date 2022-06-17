import React from 'react';
import { inifinity } from '../../../public/assets/images';
import { DashSections } from '../../widgets/dash';

const CarSection = () => {
  return (
    <DashSections
      heading="CARS"
      // paragragh="We get paid when you do. No registration fee & No yearly Subscription - we believe that the best things in life are free & you should only pay when you get paid. Our ’Partnership’ allows you to use all of Stakecut’s Benefits & pay a small percentage only when you get paid!"
      img={inifinity}
      paragraph="Find certified foreign used cars available for sale at West PGC. Trusted used cars dealer at affordable prices. Get car financing, or book test drive."
    />
  );
};

export default CarSection;
