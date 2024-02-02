import React from "react";
import Data from "../../store.json";
import { Card } from "../../Components/Atoms";

const index = () => {
  return (
    <>
      <div style={{ display: "flex", flexWrap: 'wrap' }}>
        {Data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default index;
