import React, { useState } from "react";
import { HDBIcon } from "../../assets";
import "../../App.css";

interface Props {
  data: any;
}

const Card = ({ data }: Props) => {
  const [showDesc, setShowDesc] = useState<boolean>(false);

  return (
    <div style={{ width: "48%" }}>
      <div style={{ width: "100%" }}>
        <img src={data.pic} className="row" style={{ width: "100%" }} />
      </div>
      <div>
        <div className="row">
          <div>
            <div className="row">
              <img src={HDBIcon} />
              <div>
                <p>{data.title}</p>
                <p>{data.address}</p>
              </div>
            </div>
            <div className="">
              <p>
                {data.project_type} .{data.year} .{data.ownership_type}
              </p>
              <p>{data.availabilities_label}</p>
            </div>
          </div>

          <div>
            <p>
              ${data.psf_min} - ${data.psf_min} psf
            </p>
            <p>{data.subprice_label}</p>
          </div>
        </div>

        {/* footer */}
        <div>
          {showDesc && <p>{data.description}</p>}
          <div onClick={() => setShowDesc(!showDesc)}>
            {showDesc ? "Hide description" : "See description"}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;