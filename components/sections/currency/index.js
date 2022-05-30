import React from 'react';
import { createProductWidget, tractor } from '../../../public/assets/images';
import { DashSections } from '../../widgets/dash';

const Currency = () => {
  return (
    <DashSections
      heading="SD8N Bulldozer"
      paragraph="SD8N bulldozer is track-type dozer with elevated sprocket, hydraulic direct drive, semi-rigid suspended and hydraulic controls. Equipped with power separating hydraulic-mechanic type Torque converter, planetary, power shift and one lever control transmission."
      img={tractor}
    />
  );
};

export default Currency;
