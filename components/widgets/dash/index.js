import Image from 'next/image';
import React from 'react';

export const DashSections = ({ paragraph, img, heading }) => {
  return (
    <section
      className="grid grid-cols-2 items-center lg:gap-12 gap-2 px-4 xl:px-48 lg:px-16 lg:py-16 py-12"
      data-aos="fade-up"
    >
      <div className="lg:col-span-1 col-span-2">
        <h3 className="lg:text-lg text-md font-bold text-primary mb-6">
          {heading}
        </h3>
        <p>{paragraph}</p>
      </div>
      <div className="lg:col-span-1 col-span-2 " data-aos="fade-up">
        <Image src={img} />
      </div>
    </section>
  );
};

export const DashSectionsRight = ({ heading, paragraph, img }) => {
  return (
    <section className="grid grid-cols-2 items-center lg:gap-12 gap-2 xl:px-48 lg:px-16 lg:py-16 px-4 py-12">
      <div
        className="lg:col-span-1 col-span-2 order-2 lg:order-1"
        data-aos="fade-up"
      >
        <Image src={img} />
      </div>
      <div
        className="lg:col-span-1 col-span-2 order-1 lg:order-2"
        data-aos="fade-up"
      >
        <h3 className="lg:text-lg text-md font-bold text-primary mb-6">
          {heading}
        </h3>
        <p>{paragraph}</p>
      </div>
    </section>
  );
};
