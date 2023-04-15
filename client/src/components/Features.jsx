import React from 'react'

const Features = () => {
  return (
    <section id="features">
        <div
          data-aos="fade-up"
          className="flex bg-gray-100 dark:bg-[#0c0d1a] items-center justify-center w-[90%] lg:w-[80%] md:w-[90%] rounded-lg m-[auto] my-[5rem] flex-col md:flex-row lg:flex-row"
        >
          <div className="flex max-w-[20rem] md:max-w-[none] lg:max-w-[none]  items-center justify-center py-8 gap-20 flex-wrap">
            <div className="text-center">
              <h1 className="text-4xl font-bold">1+</h1>
              <p className="text-lg text-pink-600">Campus</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">90+</h1>
              <p className="text-lg text-pink-600">developer</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">12+</h1>
              <p className="text-lg text-pink-600">Verifiers</p>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold">4+</h1>
              <p className="text-lg text-pink-600">Projects</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features