import Link from 'next/link';
import React from 'react';
import { money, moneytag } from '../../../public/assets/images';
import Button from '../../elements/button';
import Card from '../../elements/card';
import Gallery from '../../elements/carousel';
import FloatingCard from '../../widgets/floating-card';

const FloatingCards = () => {
  return (
    <section className="bg-stake">
      <div className="flex flex-col lg:px-48 py-20">
        <div
          className="lg:self-start"
          data-aos="fade-right"
          // data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <FloatingCard
            icon={money}
            heading="NEW AND USED HEAVY EQUIPMENT"
            listOne="We have closely handpicked hot-in-demand products people love"
            listTwo="Pick the one you like to have a stake in"
            listThree="Sell & get your cut sent to you every week"
          />
        </div>
        <div
          className="lg:self-end mt-6"
          data-aos="fade-left"
          // data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <FloatingCard
            icon={moneytag}
            heading="Send Us an Inquiry"
            listTwo=" You can find these products by using our powerful yet simple search tool. Looking for a heavy construction machine? Simply narrow down your search by category of machine, location of the item, manufacturer, model year, or auction results."
          />
        </div>
      </div>
      <div className="grid grid-cols-2 items-center justify-between xl:px-48 lg:px-16 px-4 py-20">
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-lg font-bold">
            Try <span className="text-primary ">West Global Plus Concept </span>{' '}
            Now
          </h3>
          <div className="mt-6 mb-6">
            <p className="text-sm  lg:mt-0 lg:mb-0">
              We have a large portfolio of used heavy equipment located in our
              various yards across, We are the leading online showroom for New
              and Used Heavy Construction Equipment in Nigeria.
            </p>
          </div>
        </div>
        <div className="lg:justify-self-end col-span-2 lg:col-span-1 lg:mt-0 ">
          <Link href="#" passHref>
            <Button
              label="Contact Us"
              className="bg-primary text-white transition hover:opacity-95 duration-500 ease-linear w-64 py-3"
            />
          </Link>
        </div>
      </div>
      <div className="lg:px-48">
        <Gallery />
      </div>
      <div className="lg:px-48 py-6">
        <Card>
          <h2 className="font-bold text-md mb-6">Contact Us</h2>
          <p className="mb-4">
            <span className="font-bold">Address:</span>
            <p>Plot 544, Cadastral Zone -07-05, Arab Kubwa, FCT Abuja.</p>
          </p>
          <p className="mb-4">
            <span className="font-bold">Phone:</span>
            <p>09055555938</p>
            <p> 07055066415</p>
          </p>
          <p>
            <span className="font-bold">Email:</span>
            <p>west.info.files@gmail.com</p>
          </p>
        </Card>
      </div>
    </section>
  );
};

export default FloatingCards;
