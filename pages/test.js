import React from 'react';
import Input from '../components/elements/input';
import FloatingCard from '../components/widgets/floating-card';
import { money } from '../public/assets/images';

const Test = () => {
  return (
    <>
      <FloatingCard
        icon={money}
        heading="We Have Tested & Proven-to-Sell Products Ready For You to Profit From!"
        listOne="We have closely handpicked hot-in-demand products people love"
        listTwo="Pick the one you like to have a stake in"
        listThree="Sell & get your cut sent to you every week"
      />
      <Input />
    </>
  );
};

export default Test;
