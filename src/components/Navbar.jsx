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
    <nav>
      <div className="mx-auto sm:max-w-7xl  px-2 sm:px-8">
        <div className="sm:flex sm:justify-between items-center  ">
          <div className="flex items-center justify-between px-2 sm:space-x-4  py-2">
            <div>
              <Image
                src={logoImg}
                width={50}
                height={50}
                alt="Logo"
                className="rounded-full"
              />
            </div>

            {/* Mobile menu button */}
            <div className="sm:hidden ">
              <button onClick={mobileToggleButton}>
                {isOpen ? <X /> : <Menu />}
              </button>
            </div>

            <div
              className={` flex flex-col px-5 absolute backdrop-blur-md bg-white/30 left-0 min-h-[20vh] w-full gap-[4vw] items-start ${
                isOpen ? "top-[9%]" : "top-[-100%]"
              }  sm:w-auto sm:static sm:flex sm:flex-row sm:min-h-fit`}
            >
              <Link href="/">Home</Link>
              <Link href="/about-us">About Us</Link>
              <Link href="/pricing">Pricing</Link>
            </div>
          </div>
          <div className="sm:block hidden">
            <Button>Login</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// mx-auto max-w-7xl px-2
