import Image from 'next/image';
import React from 'react';
import Carousel from 'react-grid-carousel';
import {
  acura,
  agro,
  bulldozer,
  harvester,
  inifinity,
  silo,
  toyota,
  toyota2,
  tract,
  tractor,
} from '../../../public/assets/images';

const Gallery = ({ data }) => {
  return (
    <Carousel cols={2} rows={3} gap={10} loop autoplay={2000}>
      <Carousel.Item>
        <Image src={tract} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tractor} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={bulldozer} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={harvester} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={silo} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={agro} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={agro} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={silo} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={bulldozer} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tract} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={tractor} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={harvester} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={acura} alt="West Prime Global" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={toyota} alt="West Prime Global" />
      </Carousel.Item>
      {/* <Carousel.Item>
        <Image src={inifinity} alt="West Prime Global" />
      </Carousel.Item> */}
      <Carousel.Item>
        <Image src={toyota2} alt="West Prime Global" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Gallery;
