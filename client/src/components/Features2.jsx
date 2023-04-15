import React from 'react'
import { Heading } from './Heading'

const Features2 = () => {
  return (
    <section className="bg-gray-100 dark:bg-[#10111f] py-[4rem] mt-[5rem]">
        <Heading src="/images/CampusCrate.svg" />
        <div data-aos="fade-up" className="max-w-md text-center m-auto">
          <p>
            CampusCrate uses decentralized network for ecosystem and a DAO based
            system for clubs to develop projects.
          </p>
        </div>

        <div className="flex flex-col md:flex-row lg:flex-row justify-evenly flex-wrap m-[auto] items-center py-10">
          <div
            data-aos="fade-up"
            className="bg-[#ffffff] dark:bg-[#141528] transition duration-150 ease-in-out hover:scale-[102%] max-w-xs flex justify-center flex-col items-center text-center mt-10 drop-shadow-lg"
          >
            <div className="my-10 h-[5rem] w-[5rem] border-pink-500 border-2 rounded-full">
              <div className="mt-[-1.2rem]">
                <img
                  alt="feature"
                  src="https://trust-market.vercel.app/_next/image?url=%2Fimages%2Ffeature-img1.png&w=96&q=75"
                  width="80"
                  height="120"
                />
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-pink-400 dark:text-pink-600">
              Dedicated network
            </h1>
            <p className="pt-3 pb-[3rem] max-w-[80%] text-[#888888] dark:text-[#BEBEBE] text-base font-normal ">
              No chance of failure since the system is decentralized at all
              aspects.{" "}
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#ffffff] dark:bg-[#141528] transition duration-150 ease-in-out hover:scale-[102%] max-w-xs flex justify-center flex-col items-center text-center mt-10 drop-shadow-lg"
          >
            <div className="my-10 h-[5rem] w-[5rem] border-pink-500 border-2 rounded-full">
              <div className="mt-[-1.6rem]">
                <img
                  alt="feature"
                  src="https://trust-market.vercel.app/_next/image?url=%2Fimages%2Ffeature-img2.png&w=96&q=75"
                  width="70"
                  height="120"
                />
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-pink-400 dark:text-pink-600">
              Easily Accessable
            </h1>
            <p className="pt-3 pb-[3rem] max-w-[80%] text-[#888888] dark:text-[#BEBEBE] text-base font-normal ">
              One place for your all upcoming blockchain developer {" "}
            </p>
          </div>

          <div
            data-aos="fade-up"
            className="bg-[#1f1818] dark:bg-[#141528] transition duration-150 ease-in-out hover:scale-[102%] max-w-xs flex justify-center flex-col items-center text-center mt-10 drop-shadow-lg"
          >
            <div className="my-10 h-[5rem] w-[5rem] border-pink-500 border-2 rounded-full">
              <div className="mt-[-1.2rem]">
                <img
                  alt="feature"
                  src="https://trust-market.vercel.app/_next/image?url=%2Fimages%2Ffeature-img3.png&w=64&q=75"
                  width="60"
                  height="110"
                />
              </div>
            </div>
            <h1 className="text-2xl font-semibold text-pink-400 dark:text-pink-600">
              DAO based
            </h1>
            <p
              id="services"
              className="pt-3 pb-[3rem] max-w-[80%] text-[#888888] dark:text-[#BEBEBE] text-base font-normal "
            >
              DAO based system for verifying projects and rewarding the
              verifiers.{" "}
            </p>
          </div>
        </div>
      </section>
  )
}

export default Features2