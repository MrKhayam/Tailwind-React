import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="flex w-[90%] mx-auto h-auto md:items-center gap-10 md:flex-row-reverse flex-col mt-16 md:mt-40">
        <div className="img w-full h-auto rounded-lg">
          <img className="rounded-lg" src="/hero.jpg" alt="" />
        </div>
        <div className="heroTxt flex flex-col gap-10 md:gap-5">
          <h1 className="text-white text-[7vw] md:text-[4vw] lg:text-[3vw] md:text-left font-bold text-center">
            Hello, This is Ana a passonate Fullstack Web Developer.
          </h1>
          <div className="flex w-full h-auto gap-3 justify-center md:justify-start">
            <button className="px-5 py-3 bg-white rounded font-semibold text-lg">
              Hire Me
            </button>
            <button className="px-5 py-3 bg-white rounded font-semibold text-lg">
              Contact
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
