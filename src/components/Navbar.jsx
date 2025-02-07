"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import logoImg from "../../logo.png";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);

  function mobileToggleButton() {
    setOpen(!isOpen);
  }
  return (
    <nav className="sm:sticky sm:top-0  sm:z-50 sm:bg-white sm:shadow-md">
      <div className="mx-auto sm:max-w-7xl  px-2 sm:px-8 ">
        <div className="sm:flex sm:justify-between items-center ">
          <div className="flex items-center justify-between px-2 sm:space-x-4  py-2   ">
            <div>
              <Link href="/">
                <Image
                  src={logoImg}
                  width={50}
                  height={50}
                  alt="Logo"
                  priority
                  className="rounded-full"
                />
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden ">
              <button onClick={mobileToggleButton}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            <div
              className={` flex flex-col px-5 absolute z-50 backdrop-blur-md bg-white/30 left-0 min-h-[20vh] w-full  gap-[4vw] items-start ${
                isOpen ? "top-[9%]" : "top-[-100%]"
              }  sm:w-auto sm:static sm:flex sm:flex-row sm:min-h-fit `}
            >
              <Link
                href="/"
                className="hover:text-gray-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                href="/about-us"
                className="hover:text-gray-500 transition duration-300"
              >
                About Us
              </Link>
              <Link
                href="/pricing"
                className="hover:text-gray-500 transition duration-300"
              >
                Pricing
              </Link>
              <Link href="/login">
                <Button className="block sm:hidden"> Login</Button>
              </Link>
            </div>
          </div>
          <div className="sm:block hidden">
            <Link href="/login">
              <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
