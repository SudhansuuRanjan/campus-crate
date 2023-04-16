import React from "react";
import { Heading } from "./Heading";
import { BsFillCheckSquareFill } from "react-icons/bs";

const Tools = () => {
    const handleClick = () => {
        console.log("clicked");
    }
  return (

    <>
      <section className="mt-[5rem]">
        <Heading text="Features" />

        <div className="flex flex-col md:flex-row lg:flex-row m-auto justify-center lg:justify-evenly md:justify-evenly items-center mt-10">
          <div data-aos="fade-up" className="mt-10">
            <img
              src="https://trust-market.vercel.app/_next/image?url=%2Fimages%2Fhero-img4.png&w=640&q=75"
              alt="me"
              width="450"
              height="300"
            />
          </div>

          <div className="flex flex-col gap-3 w-[100%] md:w-[40%] lg:w-[40%] mt-10">
            <div
              data-aos="fade-up"
              className="flex items-center bg-gray-100 dark:bg-[#10111f] border-2 rounded-3xl w-[85%] md:w-[20rem] lg:w-[24rem] border-[#2F304E] m-[auto]"
            >
              <div className="p-2 px-4 pr-6">
                <img src="/images/DAo.png" height="50" width="50" alt="gps" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">As DAO</h1>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex items-center bg-gray-100 dark:bg-[#10111f] border-2 rounded-3xl w-[85%] md:w-[20rem] lg:w-[24rem] border-[#2F304E] m-[auto]"
            >
              <div className="p-2 px-4 pr-6">
                <img src="/images/GPS.png" height="50" width="50" alt="gps" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">For Students</h1>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="flex items-center bg-gray-100 dark:bg-[#10111f] border-2 rounded-3xl w-[85%] md:w-[20rem] lg:w-[24rem] border-[#2F304E] m-[auto]"
            >
              <div className="p-2 px-4 pr-6">
                <img src="/images/Math.png" height="50" width="50" alt="gps" />
              </div>
              <div>
                <h1 className="text-2xl font-bold"> By College Clubs</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center mt-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20 max-w-[85%]">
          Projects on <span className="text-pink-600">CampusCrate</span> are
        </h1>
        <h2 className="flex items-start justify-center gap-4 text-xl lg:text-2xl md:text-2xl pb-3">
          <BsFillCheckSquareFill className="text-green-400 text-xl lg:text-2xl md:text-2xl mt-1" />
          <p>Voted by club Leaders.</p>
        </h2>

        <h2 className="flex items-start justify-center gap-4 text-xl lg:text-2xl md:text-2xl pb-3">
          <BsFillCheckSquareFill className="text-green-400 text-xl lg:text-2xl md:text-2xl mt-1" />
          <p>Quadratic voting by leaders and verifiers</p>
        </h2>

        <h2 className="flex items-start justify-center gap-4 text-xl lg:text-2xl md:text-2xl pb-3">
          <BsFillCheckSquareFill className="text-green-400 text-xl lg:text-2xl md:text-2xl mt-1" />
          <p>Grants by Ecosystem verifiers</p>
        </h2>
      </section>

      <div className="m-auto flex mt-3 flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center my-20 max-w-[85%]">
          Begin your <span className="text-pink-600">CampusCrate</span> Journey
        </h1>
        <a href="#up">
          <button
          id="contact"
          className="text-white  bg-gradient-to-r  from-pink-500 to-purple-700 px-[4rem] font-semibold py-[0.7rem] rounded-3xl  hover:from-purple-700 hover:to-pink-500 dark:hover:bg-[#0F1221]  m-auto"
        >
          Connect Wallet
        </button>
        </a>
      </div>
    </>
  );
};

export default Tools;
