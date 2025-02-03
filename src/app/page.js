import Image from "next/image";
import herotradingpicremovebgpreview from "../../public/herotradingpic-removebg-preview.png";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import aboutuspic from "../../public/aboutUs.jpg";

import Pricing from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <section className="py-16 md:pt-32 md:pb-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-100 via-pink-100 to-indigo-100 bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-bold bg-clip-text text-transparent  bg-gradient-to-r from-indigo-500  to-orange-500 tracking-tight sm:text-5xl md:text-5xl ">
                Trade Confidently With
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500  to-orange-500">
                  Advanced AI Bots
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Launch your SaaS product in record time with our powerful,
                ready-to-use template. Packed with modern technologies and
                essential integrations.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                  Sign Up
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <Image
                src={herotradingpicremovebgpreview}
                alt="hero Pic"
                height={400}
              />
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
                <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
                  Learn More.
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative">
        <Pricing />
      </section>

      {/* footer */}
      <section>
        <Footer />
      </section>
    </main>
  );
}

// {

// <div className="sm:flex sm:justify-between sm:items-center  ">
//   <div>
//     <Image
//       className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
//       src={aboutuspic}
//       alt="about-us"
//     />
//   </div>
//   <div>
//     <h1 className="text-4xl font-bold bg-clip-text tracking-tight sm:text-5xl md:text-5xl mb-4">
//       About Us
//     </h1>
//     <p>
//       Trading AI bot is a cutting-edge trading bot designed to empower
//       traders of all levels. Leveraging advanced algorithms and
//       real-time market data, our bot executes trades with precision
//       and efficiency.
//     </p>
//     <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
//       <Button className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500">
//         Learn More.
//       </Button>
//     </div>
//   </div>
// </div>
// </div> */
// }

//   <section className="py-20">
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//         <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
//           <h1 className="text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
//             Trade Confidently
//             <span className="block text-orange-500">Advanced AI Bots</span>
//           </h1>
//           <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//             Launch your SaaS product in record time with our powerful,
//             ready-to-use template. Packed with modern technologies and
//             essential integrations.
//           </p>
//           <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
//             <Button className="bg-white hover:bg-gray-100 text-black border border-gray-200 rounded-full text-lg px-8 py-4 inline-flex items-center justify-center">
//               Sign Up
//               <ArrowRight className="ml-2 h-5 w-5" />
//             </Button>
//           </div>
//         </div>
//         <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
//           <Image src={herotradingai} alt="hero Pic" height={500} />
//         </div>
//       </div>
//     </div>
//   </section>
// </main> */
