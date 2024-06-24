"use client";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchMenu() {
  const { t } = useTranslation();
  const router = useRouter();
  const [search, setSearch] = useState();
  let randomNumber = Math.random();

  const SubmitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?s=${search}`);
  };

  return (
    <div className="xs:ms-0 md:ms-auto">
      <button
        data-modal-target={"top-center-modal"+randomNumber}
        data-modal-toggle={"top-center-modal"+randomNumber}
        className=""
        type="button"
      >
        <IoSearchOutline size={24}  className="xs:stroke-primary md:stroke-white md:mt-3 xs:mt-0 " />
      </button>

      <div 
        id={"top-center-modal"+randomNumber}
        data-modal-placement="top-center"
        xtabIndex="-1"
        className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto  h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                {t("Search website")}
              </h3>

              
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide={"top-center-modal"+randomNumber} >
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" > <path   stroke="currentColor"   strokeLinecap="round"   strokeLinejoin="round"   strokeWidth="2"   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /> </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
            
                <form  onSubmit={SubmitHandler} className="flex items-center max-w-sm mx-auto">   
                    <label htmlFor="simple-search" className="sr-only">{t("Search")}</label>
                    <div className="relative w-full">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <IoSearchOutline />
                        </div>
                        <input  onChange={(e) => {
                                setSearch(e.target.value);
                              }}  type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={t("search here ...")} required />
                    </div>
                    <button data-modal-hide={"top-center-modal"+randomNumber} type="submit" onClick={SubmitHandler} className="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                        <span className="sr-only" >{t("Search")}</span>
                    </button>
                </form>

            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}
