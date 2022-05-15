import React, { useEffect, useState } from "react";
import axios from "axios";

const Effect = () => {
  const [data, setData] = useState({ name: "sachin" });

  console.log("in here ");
  useEffect(() => {
    console.log("calling");
    axios.get("http://localhost:8080/data").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      <label htmlFor="">useEffect</label> <br></br>Hello {data.name}
    </div>
  );
};

export default Effect;
