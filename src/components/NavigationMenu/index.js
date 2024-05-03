"use client";

import { useState } from "react";

export default function NavigationMenu() {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div className="w-100 bg-primary">
      <nav className="">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-3">

          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="mega-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
            <ul className="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
              <li><a href="#" className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 " aria-current="page"> Home </a></li>
              <li><button onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)} id="mega-menu-dropdown-button" data-dropdown-toggle="mega-menu-dropdown" className="flex items-center justify-between w-full py-2 px-3 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0" >Company
                  <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                  </svg>
                </button>
                <div   id="mega-menu-dropdown" className={`absolute z-10 grid hidden  w-auto grid-cols-3 text-sm bg-white border border-gray-100 rounded-lg shadow-md `}> 
                  {/* ${ isShowing ? "block" : "hidden" } */}
                  <div className="p-4 pb-0 text-white md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <a href="#" className="text-black  hover:text-primary ">
                          About Us
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 pb-0 text-white md:pb-4 ">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <a href="#" className="text-black  hover:text-primary ">
                          Blog
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 pb-0 text-white md:pb-4">
                    <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                      <li>
                        <a href="#" className="text-black  hover:text-primary ">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0">Team </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
