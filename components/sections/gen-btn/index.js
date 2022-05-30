import React from 'react';
import { btnWidget, tract } from '../../../public/assets/images';
import { DashSections } from '../../widgets/dash';

const GenerateButton = () => {
  return (
    <DashSections
      heading="Combine Harvester"
      paragraph="Combine harvesters are one of the most economically important labour-saving inventions, significantly reducing the fraction of the population engaged in agriculture. Combines are equipped with removable header that are designed for particular crops. The standard header, sometimes called a grain platform, is equipped with a reciprocating knife cutter bar, and features a revolving reel with metal teeth to cause the cut crop to fall into the auger once it is cut."
      img={tract}
    />
  );
};

export default GenerateButton;
