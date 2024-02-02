import React, { useState } from "react";
import { HDBIcon } from "../../assets";

interface Props {
  data: any;
}

const Card = ({ data }: Props) => {
  const [showDesc, setShowDesc] = useState<boolean>(false);

  return (
    <div className="w-full bg-white font-light border shadow-md rounded-lg overflow-hidden duration-300 hover:shadow-sm">
      <div className="h-80 group cursor-pointer relative overflow-hidden aspec-video md:h-64">
        <div className="absolute inset-0 bg-black/10 opacity-0 duration-300 group-hover:opacity-100"></div>
        <img src={data.pic} className="w-full object-cover object-center" />
      </div>
      <div className="p-5 lg:p-3">
        <div className="flex justify-between lg:flex-col lg:justify-normal lg:items-start">
          <div>
            <div className="flex space-x-4 pb-3 md:space-x-3">
              <img src={HDBIcon} className="w-10 object-contain md:w-8" loading="lazy" />
              <div>
                <p className="text-2xl font-bold text-black pb-1 lg:text-xl md:text-lg md:pb-0">
                  {data.title}
                </p>
                <p className="text-sm md:text-xs">{data.address}</p>
              </div>
            </div>
            <div className="">
              <p className="pb-1 md:text-sm">
                {data.project_type} .{data.year} .{data.ownership_type}
              </p>
              <p className="md:text-sm">{data.availabilities_label}</p>
            </div>
          </div>
          <div className="text-right lg:text-left lg:pt-4">
            <p className="flex font-bold pb-1 text-lg md:text-base">
              ${data.psf_min} - ${data.psf_min} psf
            </p>
            <p className="text-sm md:text-sm">{data.subprice_label}</p>
          </div>
        </div>

        {/* footer */}
        <div>
          {showDesc && <p className="text-sm pt-4 md:text-xs">{data.description}</p>}
          <div
            onClick={() => setShowDesc(!showDesc)}
            className="text-right pt-4 font-bold text-orange cursor-pointer text-orange-400 hover:underline md:text-xs md:pr-4 md:pb-1 md:font-medium"
          >
            {showDesc ? "Hide description" : "See description"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
