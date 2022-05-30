import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  floatFour,
  floatOne,
  floatThree,
  floatTwo,
  hero,
} from '../../../public/assets/images';
import Button from '../../elements/button';
import Gallery from '../../elements/carousel';

const Hero = () => {
  return (
    <section className="bg-wpgc bg-cover bg-no-repeat py-32 bg-opacity-95 bg-blend-overlay bg-primary">
      <div className="grid grid-cols-2 gap-10 xl:px-48 lg:px-16 items-center px-4 mt-5">
        <div className="col-span-2 lg:col-span-1">
          <h2 className="lg:text-[52px] text-lg text-white font-bold">
            Best supplier for
            <br />
            <span className="text-secondary">New and Used Machines</span>
          </h2>
          <p className="mb-8 mt-8 text-white">
            Buy direct and save with TractorJoe! Whether you have a John Deere,
            Ford, Massey, Case, IH, or other,
          </p>
          <div className="flex items-center">
            <Link href="#">
              <Button
                className="bg-secondary border border-primary text-white w-56 py-3"
                label="Learn More"
              />
            </Link>
          </div>
        </div>
        <div className="relative col-span-2 lg:col-span-1">
          <div
            className="z-50 static"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <Gallery />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
