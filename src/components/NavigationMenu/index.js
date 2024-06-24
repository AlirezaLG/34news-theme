"use client";
import { routeMenu } from "@/lib/helpers";
import React, { useEffect } from "react";
import { Dropdown } from "flowbite";
import { Drawer } from "flowbite";
import SearchMenu from "../SearchMenu";

export default function NavigationMenu({ menu ,header, locale}) {
  useEffect(() => {
    const targetEls = document.getElementsByClassName("dropdownMenu");
    const triggerEls = document.getElementsByClassName("dropdownButton");
    if (targetEls.length > 0 && triggerEls.length > 0) {
      const options = {
        placement: "bottom",
        triggerType: "hover",
        offsetSkidding: 0,
        offsetDistance: 0,
        delay: 0,
        ignoreClickOutsideClass: false,
      };
      // Initialize each dropdown with the correct elements and options
      Array.from(triggerEls).forEach((triggerEl, index) => {
        if (targetEls[index]) {
          // Ensure there's a corresponding target element
          new Dropdown(targetEls[index], triggerEl, options);
        }
      });
    }

    const targetEls2 = document.getElementsByClassName("subdropdownMenu");
    const triggerEls2 = document.getElementsByClassName("subdropdownButton");
    if (targetEls2.length > 0 && triggerEls2.length > 0) {
      const place = locale==='en'? 'right-start': 'left-start';
      const options = {
        placement:  place,
        triggerType: "hover",
        offsetSkidding: 1,
        offsetDistance: 1,
        delay: 0,
        ignoreClickOutsideClass: false,
      };
      // Initialize each dropdown with the correct elements and options
      Array.from(triggerEls2).forEach((triggerEl2, index) => {
        if (targetEls2[index]) {
          // Ensure there's a corresponding target element
          new Dropdown(targetEls2[index], triggerEl2, options);
        }
      });
    }

    // set the drawer menu element
    const $targetEl = document.getElementById("drawer-navigation");
    // options with default values
    const options = {
      placement: "right",
      backdrop: true,
      bodyScrolling: false,
      edge: false,
      edgeOffset: "",
      backdropClasses: "",
    };
    // instance options object
    const instanceOptions = {
      id: "drawer-navigation",
      override: true,
    };
    const drawer = new Drawer($targetEl, options, instanceOptions);

  }, []);

  return (
    <div className="w-100 bg-primary">
      <nav className="container">
        <div
         className="flex flex-wrap items-start  max-w-screen-xl  ">
          {/* mobile only drawer */}
          <div id="drawer-navigation" className={` ${ locale==='en'? '-translate-x-full left-0' : 'translate-x-full right-0' } xs:block md:hidden fixed  transition-transform  top-0 z-40 w-64 h-screen p-4 overflow-y-auto  bg-white dark:bg-gray-800`} tabIndex="-1" aria-labelledby="drawer-navigation-label" >
            <h5 id="drawer-navigation-label" className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"  >
              {header.siteTitle}
            </h5>
            <button type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
              <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </button>

            <div className="py-4 overflow-y-auto">
              <ul className=" font-medium">
              {menu.menuItems.nodes.map((menuItem) => {
                if (!menuItem.parentId) {
                  return (
                    // First level menu
                    menuItem.childItems.nodes.length > 0 ? (
                      <li key={menuItem.id} aria-controls={menuItem.id} data-collapse-toggle={menuItem.id} className="text-black border-b border-gray-100 text-md w-full mt-0 ps-0 py-2" type="button">
                        {menuItem.label}
                        <svg className="w-2.5 h-2.5 m-2 float-end" aria-hidden="true" fill="none" viewBox="0 0 10 6" >
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                          <ul id={menuItem.id} className="bg-gray-50 hidden my-2 py-2 text-sm text-gray-700 dark:text-gray-200" >
                            {/* second level menu */}
                            {menuItem.childItems.nodes.map((child) => {
                              return child.childItems.nodes.length > 0 ? (
                                <li key={child.id} aria-controls={child.id} data-collapse-toggle={child.id}  className="text-black  text-md w-full mt-0 ps-2 pe-2 py-2" type="button">
                                  {child.label}
                                  <svg className="w-2.5 h-2.5 m-2 float-end" aria-hidden="true" fill="none" viewBox="0 0 10 6" >
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                  </svg>

                                    <ul id={child.id} className="bg-gray-50   py-2 text-sm text-gray-700 dark:text-gray-200" >
                                      {/* third level */}
                                      {child.childItems.nodes.map(
                                        (grandchild) => {
                                          return (
                                            <li key={grandchild.id}>
                                              <a href={routeMenu(grandchild)} target={grandchild.target ? grandchild.target : ""} className="text-black  w-full font-medium text-md ps-3 py-2 block ">
                                                {grandchild.label}
                                              </a>
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                </li>
                              ) : (
                                <li key={child.id}>
                                  <a href={routeMenu(child)} target={child.target ? child.target : ""} className="text-black  w-full font-medium text-md ps-3 py-2 block ">
                                    {child.label}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        
                      </li>
                    ) : (
                      // ite does't have any children
                      <li key={menuItem.id}>
                        <a href={routeMenu(menuItem)} target={menuItem.target ? menuItem.target : ""} className="block text-black border-b border-gray-100 hover:bg-gray-100  ps-0 py-2  " aria-current="page" >
                          {menuItem.label}
                        </a>
                      </li>
                    )
                  ); //end return
                }
              })}
              </ul>
            </div>
          </div>  
          
          {/* desktop only  */}
          <div id="mega-menu" className="shark-menu xs:overflow-x-scroll sm:overflow-auto	 items-center justify-between w-full md:flex md:w-auto " >
           
            <ul className="flex   font-medium md:flex-row md:mt-0 md:space-x-0 rtl:space-x-reverse">
            <div className=" md:ms-0 ps-0 pe-3 d-inline">
            <button className="inline-flex items-end p-2 w-10 h-10 justify-center text-sm text-white rounded-sm md:hidden " type="button" data-drawer-backdrop="true"  data-drawer-target="drawer-navigation" data-drawer-toggle="drawer-navigation" aria-controls="drawer-navigation" >
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" >
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
              {menu.menuItems.nodes.map((menuItem) => {
                if (!menuItem.parentId) {
                  return (
                    // First level menu
                    menuItem.childItems.nodes.length > 0 ? (
                      <li key={menuItem.id} data-dropdown-toggle="dropdownMenu" className={`flex dropdownButton ${locale === 'en' && "font-bold" }  text-white  focus:ring-4 focus:outline-none focus:ring-blue-300  text-md px-5 py-2.5 text-center whitespace-nowrap items-center hover:bg-gray-50  hover:text-primary hover:cursor-pointer`} type="button">
                        {menuItem.label}
                        <svg className="w-2.5 h-2.5 ms-2" aria-hidden="true" fill="none" viewBox="0 0 10 6" >
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                        <div className="dropdownMenu hidden z-10 bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700 border-t-4 border-primary ">
                          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            {/* second level menu */}
                            {menuItem.childItems.nodes.map((child) => {
                              
                              return child.childItems.nodes.length > 0 ? (
                                <li key={child.id} data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="font-bold subdropdownButton flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" >
                                  {child.label}
                                  <svg className="w-2.5 h-2.5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                  </svg>
                                  <div className="subdropdownMenu z-10 hidden bg-white divide-y divide-gray-100 rounded-sm shadow w-44 dark:bg-gray-700">
                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton" >
                                      {/* third level */}
                                      {child.childItems.nodes.map(
                                        (grandchild) => {
                                          return (
                                            <li key={grandchild.id}>
                                              <a href={routeMenu(grandchild)} target={
                                                  grandchild.target
                                                    ? grandchild.target
                                                    : ""
                                                }
                                                className="flex items-center font-bold text-black px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white "
                                              >
                                                {grandchild.label}
                                              </a>
                                            </li>
                                          );
                                        }
                                      )}
                                    </ul>
                                  </div>
                                </li>
                              ) : (
                                <li key={child.id}>
                                  <a href={routeMenu(child)} target={child.target ? child.target : ""} className="flex items-center  text-black font-bold px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white ">
                                    {child.label}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </li>
                    ) : (
                      // ite does't have any children
                      <li key={menuItem.id}>
                        <a href={routeMenu(menuItem)} target={menuItem.target ? menuItem.target : ""} className={`block ${ locale === "en" && "font-bold" }  py-2 whitespace-nowrap px-4 text-white  hover:bg-gray-50  hover:text-primary md:py-3  `} aria-current="page" >
                          {menuItem.label}
                        </a>
                      </li>
                    )
                  ); //end return
                }
              })}
            </ul>
          </div>
          <div className="xs:hidden md:block xs:ms-0 md:ms-auto">
          <SearchMenu  />
          </div>
          
        </div>
      </nav>
    </div>
  );
}
