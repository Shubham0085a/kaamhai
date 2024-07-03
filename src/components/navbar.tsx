"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/app/assets/black-logo.png";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Let's Talk Business", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <section>
      <header className="inset-x-0 top-0 z-50 my-5 lg:my-10 mx-4 lg:mx-12 bg-[#FFCB08] rounded-full">
        <nav
          className="flex items-center justify-between py-2 px-6 lg:p-6 lg:ml-12 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="lg:-m-1.5 lg:p-1.5">
              <span className="sr-only">Your Company</span>
              <Image src={logo} alt="logo" height={104} width={263} />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-2xl hover:font-bold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="bg-white h-14 w-96 flex flex-row items-center justify-end rounded-full">
              <button className="bg-black w-32 h-full rounded-full">
              <div className="flex flex-row items-center font-medium space-x-2 justify-center">
                <div className="text-white">Search</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                  >
                    <path
                      d="M1.11627 17.4306L5.98841 13.6114C5.4922 12.8294 5.14525 11.9617 4.94755 11.0082C4.74985 10.0548 4.71568 9.11962 4.84503 8.2028C5.16045 5.96706 6.20127 4.18396 7.96748 2.8535C9.7337 1.52303 11.7345 1.01549 13.97 1.33088C16.2055 1.64626 17.9888 2.68675 19.3202 4.45232C20.6515 6.2179 21.1603 8.21869 20.8468 10.4547C20.5332 12.6907 19.4918 14.4746 17.7225 15.8066C15.9533 17.1385 13.9514 17.6469 11.7168 17.3316C10.7471 17.1948 9.83273 16.8906 8.97378 16.4192C8.11484 15.9477 7.40235 15.3867 6.83632 14.7364L1.81793 18.3628L1.11627 17.4306ZM6.24223 8.40134C5.9809 10.2536 6.3978 11.9073 7.49291 13.3623C8.58802 14.8174 10.0621 15.6756 11.915 15.937C13.768 16.1984 15.4214 15.7814 16.8754 14.686C18.3294 13.5906 19.1875 12.1168 19.4498 10.2647C19.712 8.41259 19.2952 6.75847 18.1993 5.30235C17.1034 3.84624 15.6298 2.98807 13.7786 2.72784C11.9274 2.46761 10.2739 2.88461 8.81818 3.97883C7.36246 5.07306 6.50434 6.54683 6.24382 8.40014"
                      fill="#FFD233"
                    />
                    <path
                      d="M6.24223 8.40134C5.9809 10.2536 6.3978 11.9073 7.49291 13.3623C8.58802 14.8174 10.0621 15.6756 11.915 15.937C13.768 16.1984 15.4214 15.7814 16.8754 14.686C18.3294 13.5906 19.1875 12.1168 19.4498 10.2647C19.712 8.41259 19.2952 6.75847 18.1993 5.30235C17.1034 3.84624 15.6298 2.98807 13.7786 2.72784C11.9274 2.46761 10.2739 2.88461 8.81818 3.97883C7.36246 5.07306 6.50434 6.54683 6.24382 8.40014M1.11627 17.4306L5.98841 13.6114C5.4922 12.8294 5.14525 11.9617 4.94755 11.0082C4.74985 10.0548 4.71568 9.11962 4.84503 8.2028C5.16045 5.96706 6.20127 4.18396 7.96748 2.8535C9.7337 1.52303 11.7345 1.01549 13.97 1.33088C16.2055 1.64626 17.9888 2.68675 19.3202 4.45232C20.6515 6.2179 21.1603 8.21869 20.8468 10.4547C20.5332 12.6907 19.4918 14.4746 17.7225 15.8066C15.9533 17.1385 13.9514 17.6469 11.7168 17.3316C10.7471 17.1948 9.83273 16.8906 8.97378 16.4192C8.11484 15.9477 7.40235 15.3867 6.83632 14.7364L1.81793 18.3628L1.11627 17.4306Z"
                      stroke="#FFE000"
                    />
                  </svg>
                </div>
              </div>
              </button>
            </div>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image src={logo} alt="logo" height={104} width={263} />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </section>
  );
};

export default Navbar;
