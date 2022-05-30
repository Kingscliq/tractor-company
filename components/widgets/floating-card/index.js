import Image from 'next/image';
import React from 'react';

const FloatingCard = ({ icon, heading, listOne, listTwo, listThree }) => {
  return (
    <section className="shadow rounded-3xl p-12 grid grid-cols-9  gap-10 items-start lg:w-[800px] w-auto bg-white">
      <div className="col-span-9 lg:col-span-1">
        <Image src={icon} />
      </div>
      <div className="col-span-9 lg:col-span-8">
        <h4 className="text-[1.5rem] text-primary font-bold mb-6">{heading}</h4>
        <ul className="list-disc px-6 text-sm">
          {listOne && <li>{listOne}</li>}
          {listTwo && <li>{listTwo}</li>}
          {listThree && <li>{listThree}</li>}
        </ul>
      </div>
    </section>
  );
};

export default FloatingCard;
