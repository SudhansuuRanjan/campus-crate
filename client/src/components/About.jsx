import React from 'react'
import { Heading } from './Heading'

const About = () => {
  return (
    <section className="mb-[5rem]">
        <Heading text="About Us" />

        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row lg:flex-row items-center m-auto justify-center lg:justify-around md:justify-around mt-10 md:mx-3"
        >
          <div className="mt-10">
            <img
              src="https://trust-market.vercel.app/_next/image?url=%2Fimages%2Fhero-img2.png&w=384&q=75"
              alt="me"
              width="350"
              height="300"
            />
          </div>
          <div
            data-aos="fade-up"
            className="bg-gray-100 dark:bg-[#10111f]  rounded-3xl w-[85%] md:w-[26rem] lg:w-[30rem] mt-10"
          >
            <ul className="p-6 text-justify list-disc pl-10">
              <li>
                CampusCrate is a trusted Decentralized Autonomous Organisation built on filecoin.{" "}
              </li>
              <li>Implemented a two-tiered DAO for better governance efficiency. At higher level Quadratic voting ensures fairness for grant and funding decisions, while a lower tier meets internal college/university needs.
              </li>
              <li>
                Encouraging environment for college DAOs to develop new projects for ecosystem.
              </li>
              <li>NFTs for leaders to join the DAO</li>
              <li>
                Tokens alloted to each DAO every year for voting and governance.
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default About