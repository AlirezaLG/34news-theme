"use client";

import { useState } from "react";
import { routeMenu } from "@/lib/helpers";

export default function NavigationMenu({menu}) {
  const [isShowing, setIsShowing] = useState(false)

  return (
    <div className="w-100 bg-primary">
      <nav className="">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto ">

          <div className="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
            <button data-collapse-toggle="mega-menu" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200   " aria-controls="mega-menu" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>
          <div id="mega-menu" className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
            <ul className="flex flex-col  mt-4 font-medium md:flex-row md:mt-0 md:space-x-0 rtl:space-x-reverse">
            {menu.menuItems.nodes.map((menuItem)=>{
                if(!menuItem.parentId){
                  return (
                    // if it has children
                    (menuItem.childItems.nodes.length > 0 ? (
                      <li style={{ marginBottom:'-10px' }} key={menuItem.id} className="relative" ><a style={{ marginBottom:'-10px' }} data-dropdown-toggle={menuItem.id} className=" flex items-center justify-between w-full py-2 px-3 font-medium text-white border-b border-gray-100 md:w-auto hover:bg-gray-50  md:hover:bg-white  md:border-0 md:hover:text-primary md:py-3" >
                        {menuItem.label}
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        </a>
                        <div id={menuItem.id}  className={`absolute z-10 grid hidden -mt:5 md:w-48  w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-md shadow-md `} > 
                          <div className="p-4 w-48 pb-0 text-white md:pb-4 ">
                            <ul className="space-y-4" aria-labelledby="mega-menu-dropdown-button">
                              {menuItem.childItems.nodes.map((child)=>{
                                return (
                                  <li key={child.id}>
                                    <a href={routeMenu(child)}  target={(menuItem.target ? menuItem.target : '' )}  className="text-black  hover:text-primary ">
                                      {child.label}
                                    </a>
                                  </li>
                                )
                              })}
                              
                              
                            </ul>
                          </div>
                        </div>
                        </li>
                    // ite does't have any children 
                    ): (
                    <li key={menuItem.id} ><a href={ routeMenu(menuItem) } target={(menuItem.target ? menuItem.target : '' )} className="block py-2  px-3 text-white border-b border-gray-100 hover:bg-gray-50 md:hover:bg-white  md:border-0 md:hover:text-primary md:py-3  " aria-current="page">{menuItem.label}</a></li>
                    )) 

                  )//end return 
                }
              })}
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
