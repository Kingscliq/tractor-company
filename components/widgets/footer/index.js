import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { siteLogo } from '../../../public/assets/images';
import Button from '../../elements/button';
import Input from '../../elements/input';
import NavLink from '../../elements/link';

const Footer = () => {
  return (
    <section className="xl:px-48 lg:px-16 py-20 px-4 bg-slate-50">
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex lg:items-center items-start lg:flex-row  flex-col">
          <div>
            <Image src={siteLogo} />
          </div>
          <div>
            <div
              className={`justify-between flex flex-wrap lg:items-center items-start flex-col lg:flex-row`}
            >
              <NavLink
                href="#"
                linkText="About Us"
                className="ml-0 lg:ml-7 lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              />
              <NavLink
                href="#"
                linkText="Guidelines"
                className="ml-0 lg:ml-7 lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              />
              <NavLink
                href="#"
                linkText="Support"
                className="ml-0 lg:ml-7 lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              />
              <NavLink
                href="#"
                linkText="Tools"
                className="ml-0 lg:ml-7 lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mr-4">
            <Input placeholder="Your Email" />
          </div>
          <Button
            label="Send"
            className="bg-primary text-white transition hover:opacity-95 duration-500 ease-linear w-36 h-12 "
          />
        </div>
      </div>
      <div className="mt-12 pb-6">
        <div
          className={`flex lg:flex-row items-center justify-center lg:justify-start`}
        >
          <Link href="#">
            <a className="w-100 lg:text-xs text-[.5rem]  mr-3 lg:mr-10 text-link-grey">
              Terms and conditions
            </a>
          </Link>
          <Link href="#">
            <a className="w-100  lg:text-xs text-[.5rem] mr-3 lg:mr-10 text-link-grey">
              Privacy Policy
            </a>
          </Link>
          <Link href="#">
            <a className=" lg:mr-10  lg:text-xs text-[.5rem] mr-3  text-link-grey">
              Return &amp; Refund
            </a>
          </Link>
          <Link href="#">
            <a className="w-100 lg:text-xs text-[.5rem] text-link-grey">
              Cookie-consent
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Footer;
