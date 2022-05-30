import React, { useState } from 'react';
import Image from 'next/image';

import Button from '../../elements/button';

import NavLink from '../../elements/link';
import { useRouter } from 'next/router';

import Link from 'next/link';
import { logo } from '../../../public/assets/icons';
import MobileNav from '../mobile-nav';
import { useWindowScrollPositions } from '../../../hooks/useWindowScrollPosition';
import { siteLogo } from '../../../public/assets/images';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollX, scrollY } = useWindowScrollPositions();
  const genericHamburgerLine = `h-0.5 w-full my-1 rounded-full bg-primary transition ease transform duration-300`;

  return (
    <section>
      {isOpen ? <MobileNav /> : null}
      <div>
        <nav
          className={`block justify-start lg:flex lg:items-center items-center ${
            scrollY > 64 ? 'shadow-sm' : null
          }  bg-white fixed lg:justify-between z-50 lg:px-16 flex-wrap px-4 py-6 w-full`}
        >
          <div className="flex items-center">
            <div className="flex items-center mr-6 cursor-pointer">
              <Link href="/">
                <span>
                  <Image src={siteLogo} alt="Stakecut logo" />
                </span>
              </Link>
            </div>
            <div className="">
              <div
                className={`lg:justify-between hidden lg:flex flex-wrap items-start lg:items-center`}
              >
                <NavLink
                  href="#"
                  linkText="About Us"
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                />
                <NavLink
                  href="#"
                  linkText="Contact"
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                />
                <NavLink
                  href="#"
                  linkText="Tractors"
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                />
                <NavLink
                  href="#"
                  linkText="Escavators"
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                />
                <NavLink
                  href="#"
                  linkText="Cars"
                  className="ml-0 lg:ml-7 text-white lg:text-primary lg:mt-0 w-100 py-4 lg:py-0"
                  isOpen={isOpen}
                />
              </div>
            </div>
          </div>

          <div
            className={`lg:flex left-0 right-0 px-[2.5rem] hidden py-4 lg:py-0 lg:px-0 bg-primary text-white lg:text-primary lg:bg-transparent z-20 lg:w-auto lg:justify-around lg:items-center flex-wrap absolute lg:static lg:translate-x-0 transition ease transform duration-300`}
          >
            <div className="ml-0 lg:ml-7 lg:mr-0 block lg:flex lg:justify-between lg:items-center items mt-3 lg:mt-0">
              <Link href="https://app.stakecut.com/">
                <div>
                  <Button
                    label="Login"
                    variant="secondary"
                    className="text-sm lg:w-64 lg:hover:text-primary lg:ml-[-20px] hover:text-white mr-2 mb-4 lg:mb-0 lg:mt-0 w-full lg:border-0 border border-white lg:border-secondary"
                  />
                </div>
              </Link>
              <Link href="https://app.stakecut.com/">
                <div>
                  <Button
                    label="Sign Up"
                    className="mt-1 lg:mt-0 w-full bg-primary lg:w-48 text-white px-2 py-3 text-sm "
                  />
                </div>
              </Link>
            </div>
          </div>
          <button
            aria-label="hamburger menu"
            className="flex flex-col h-7 w-7 justify-center items-center group lg:hidden absolute top-6 right-4"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? 'rotate-45 translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
              }`}
            />
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? '-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            />
          </button>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
