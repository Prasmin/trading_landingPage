import Image from "next/image";

import herotradingpicremovebgpreview from "@/public/herotradingpic-removebg-preview.png";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutuspic from "../../public/aboutUs.jpg";

import Pricing from "@/components/pricing";

import RotateString from "@/components/ui/rotateString";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="py-16 md:pt-32 md:pb-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100 via-pink-100 to-indigo-100 bg">
        <div className="max-w-7xl mx-auto px-4  lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 relative ">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl  font-bold  text-balance  tracking-normal sm:text-5xl  ">
                Trade Smarter, Track Better, and Learn More—All in One Platform!
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500  to-orange-500">
                  <RotateString />
                </span>
              </h1>

              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Link href="/registration">
                  <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                    Sign Up
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mt-12  sm:max-w-lg sm:mx-auto lg:mt-0  lg:mx-0 lg:col-span-6  lg:items-center lg:justify-items-end z-40">
              <Image
                src={herotradingpicremovebgpreview}
                alt="hero Pic"
                height={400}
              />
            </div>
            <div className="absolute top-0 right-0 flex justify-center items-center">
              <div className="w-60 h-60 bg-indigo-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About-us section  */}
      <section className="py-24 relative">
        <div className="px-4 mx-auto w-full">
          <div className="sm:flex sm:items-center flex flex-col sm:flex-row text-center sm:text-left">
            <div className="mb-6 sm:mb-0">
              <Image
                className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                src={aboutuspic}
                alt="about-us"
              />
            </div>
            <div className="text-pretty max-w-xl ">
              <h1 className="text-4xl font-bold bg-clip-text tracking-tight sm:text-5xl md:text-5xl mb-6 ">
                About Us
              </h1>

              <p>
                Trading AI bot is a cutting-edge trading bot designed to empower
                traders of all levels. Leveraging advanced algorithms and
                real-time market data, our bot executes trades with precision
                and efficiency.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 ">
                <Link href="/aboutUs">
                  <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                    Learn More.
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <Pricing />
      </section>
    </main>
  );
}
