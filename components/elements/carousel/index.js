import Image from 'next/image';
import React from 'react';
import Carousel from 'react-grid-carousel';
import {
  agro,
  bulldozer,
  harvester,
  silo,
  tract,
  tractor,
} from '../../../public/assets/images';

const Gallery = ({ data }) => {
  return (
    <Carousel cols={2} rows={3} gap={10} loop autoplay={2000}>
      <Carousel.Item>
        <Image  src={tract} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={tractor} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={bulldozer} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={harvester} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={silo} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={agro} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={agro} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={silo} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={bulldozer} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={tract} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={tractor} />
      </Carousel.Item>
      <Carousel.Item>
        <Image  src={harvester} />
      </Carousel.Item>
    </Carousel>
  );
};

export default Gallery;
