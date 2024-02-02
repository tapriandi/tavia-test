import React from "react";
import Data from "../../store.json";
import { Card } from "../../Components/Atoms";

const index = () => {
  return (
    <>
      <div className="pt-14 pb-20 lg:px-[4%]">
        <div className="w-full px-[12%] lg:px-0">
          <div className="grid grid-cols-2 gap-5 w-full lg:gap-4 md:grid-cols-1">
            {Data.map((item, index) => (
              <Card key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
