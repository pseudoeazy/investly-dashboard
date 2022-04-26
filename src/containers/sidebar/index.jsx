import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar";
import louisePic from "assets/images/louise.png";

function Sidebar() {
  return (
    <aside className="relative w-60  border-r">
      <div id="sidebar" className="static z-40 left-auto top-auto">
        {/* Sidebar header */}
        <div className="pt-6 px-[3.71875rem] text-center ">
          {/* Logo */}
          <Link href="/">
            <a className="block">
              <h1 className="text-[1.75rem] font-black font-work text-logo-100">
                Investly<span className="text-logo-200">.</span>
              </h1>
            </a>
          </Link>
        </div>

        {/* Links */}
        <div className="mt-11">
          <Navbar />
        </div>
        <section className="flex items-center justify-center px-6 py-5 border-t">
          <div className="flex">
            <div>
              <Image src={louisePic} alt="louise" width={32} height={32} />
            </div>
            <div className="flex flex-col ml-[0.9375rem] text-nav-300">
              <span className="font-medium text-base">Louise Thompson</span>
              <span className="text-xs font-normal mt-[2px]">
                Enterprise plan
              </span>
            </div>
          </div>
        </section>
      </div>
    </aside>
  );
}

export default Sidebar;
