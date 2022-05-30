import Image from 'next/image';
import React from 'react';
import { lightLogo } from '../../../public/assets/icons';
import Button from '../../elements/button';
import NavLink from '../../elements/link';

const MobileNav = () => {
  return (
    <section className="fixed bg-primary w-64 h-full lg:hidden z-[100] flex justify-center items-start flex-col mobile-nav overflow-scroll">
      <div>
        <div className="flex items-center justify-between flex-col h-[600px]">
          <div className="px-4 mb-9">
            <Image src={lightLogo} />
          </div>
          <div
            className={`lg:justify-between lg:flex flex-wrap items-start lg:items-center`}
          >
            <NavLink
              href="#"
              linkText="About Us"
              className="ml-0 lg:ml-7 text-neutral-light hover:text-white lg:text-primary lg:mt-0 w-100 py-4 px-4 "
            />
            <NavLink
              href="#"
              linkText="Guidelines"
              className="ml-0 lg:ml-7 text-neutral-light hover:text-white  lg:text-primary lg:mt-0 w-100 py-4 px-4"
            />
            <NavLink
              href="#"
              linkText="Support"
              className="ml-0 lg:ml-7 text-neutral-light hover:text-white lg:text-primary lg:mt-0 w-100 py-4 px-4"
            />
            <NavLink
              href="#"
              linkText="Tools"
              className="ml-0 lg:ml-7 text-neutral-light hover:text-white lg:text-primary lg:mt-0 w-100 py-4 px-4"
            />
            <div>
              <Button
                label="Login"
                className="text-neutral-light hover:text-white border border-white p-2 w-32 ml-4 mt-16 hover:opacity-95"
              />
              <Button
                label="Sign Up"
                className="text-neutral-light hover:text-white border border-white mt-5 p-2 w-32 ml-4 hover:opacity-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileNav;
