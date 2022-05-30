import React from 'react';
import { DashSectionsRight } from '../../widgets/dash';
import { agro } from '../../../public/assets/images';
const MarketPlace = () => {
  return (
    <DashSectionsRight
      heading="John Deere Sickle Harvesters"
      paragraph="Having the right equipment available during corn harvesting season can make a significant difference in accuracy, speed, operating costs, and most importantly, yields. John Deere headers are designed to match the power and performance of the combines that propel them through the fields. With corn head offerings spanning all the way up to 18 rows, Deere’s headers are built to take on any conditions and allow operators to harvest as quickly and efficiently as possible."
      img={agro}
    />
  );
};

export default MarketPlace;
