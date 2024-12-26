import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import img from "../../assets/apps.png"

export const MyApps = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    const getMyApps = async () => {
      const { data } = await axios.get(
        "https://mern-portfolio-backend-3.onrender.com/api/v1/SoftwairApplication/getall",
        { withCredentials: true }
      );
      setApps(data.allSoftwairApplication);
    };
    getMyApps();
  }, []);
  return (
    <div className={`w-full flex flex-col gap-8 sm:gap-12 relative Software_Main bg-[url(${img})] bg-cover pb-14`}>
      {/* <img src={img} alt="" /> */}
      <h1 className="text-[40px] sm:text-[2.75rem] md:text-[3rem] lg:text-[5.8rem] text-[#eb8d2f]  flex justify-end w-full">
         Software..
      </h1>
      <div className="w-10/12 mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {apps &&
          apps.map((element) => {
            return (
              <Card className="h-fit p-7 flex flex-col justify-center items-center bg-[#dad9d9] hover:scale-110 transition-all hover:shadow-[0_0_10px] gap-3" key={element._id}>
                <img
                  src={element.svg && element.svg.url}
                  alt="skill"
                  className="h-12 sm:h-24 w-auto"
                />
                <p className="text-muted-foreground text-center">
                  {element.name}
                </p>
              </Card>
            );
          })}
      </div>
    </div>
  );
};
