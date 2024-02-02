import React from "react";
import Data from "../../store.json";
import { Card, Footer, Header, SectionTitle } from "../../Components/Atoms";
import { Bg } from "../../assets";

const index = () => {
  return (
    <>
      <Header />
      <div className="pb-20">
        <div className="relative h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-800 to-blue-500">
          <p className="text-6xl font-bold pb-5 text-center lg:text-4xl md:text-3xl text-white">
            Living with comfortable
          </p>
          <p className="pb-32 text-3xl text-center max-w-3xl pt-5 lg:text-2xl md:text-xl text-white">
            Kami berkomitmen untuk memberikan kualitas yang terbaik bagi rekanan
            kami dan juga pelanggan kami.
          </p>
          <img src={Bg} className="absolute w-full bottom-0 left-0" />
        </div>

        <div className="w-full pt-20 px-[12%] lg:px-[4%] md:pt-10">
          <SectionTitle />
          <div className="grid grid-cols-2 gap-5 w-full lg:gap-4 md:grid-cols-1">
            {Data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default index;
