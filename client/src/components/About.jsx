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
                Trustme is a trusted datasets marketplace built on ethereum and
                uses filecoin at core for nft and file storage.{" "}
              </li>
              <li>Get trusted datasets from verified sources in seconds.</li>
              <li>
                Did not get the dataset what was claimed to be, apply for verify
                by our DAO.
              </li>
              <li>Get your dataset verified by our DAO and get rewarded.</li>
              <li>
                Get a large variety of datasets from a large pool of verified
                sources.
              </li>
            </ul>
          </div>
        </div>
      </section>
  )
}

export default About