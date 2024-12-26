import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import img from "../../assets/Education.png"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Timeline = () => {
  const [timeline, setTimeline] = useState([]);
  useEffect(() => {
    const getMyTimeline = async () => {
      const { data } = await axios.get(
        "https://mern-portfolio-backend-3.onrender.com/api/v1/timeline/getall",
        { withCredentials: true }
        
      );
    //   console.log(data)
      setTimeline(data.allTimeLine);
    };
    getMyTimeline();
  }, []);


  const gsaps=()=>{
    useGSAP(()=>{
      var tl = gsap.timeline()
      tl.from(".Timeline_Tit",{
          duration:0.1,
          y:-70,
          stagger:0.3,
          // opacity:0,
          scrollTrigger:{
              trigger:".main_Title",
              scroller:"body",
              // markers:true,
              start:"top 85%",
              end:"top 40%",             
              scrub:2,
          }
      })
      tl.from(".Timeline_Title",{
        duration:1,
        x:-870,
        stagger:0.3,
        opacity:0,
        scrollTrigger:{
            trigger:".Timeline_Title",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 60%",             
            scrub:2,
        }
      })

      tl.from(".TimelineContent",{
        duration:1,
        height:0,
        stagger:0.3,
        // opacity:0,
        scrollTrigger:{
            trigger:".TimelineContent",
            scroller:"body",
            // markers:true,
            start:"top 65%",
            end:"top 20%",             
            scrub:2,
        }
    })
        
      tl.from(".TimelineContentImg",{
        duration:1,
        rotate:180,
        scale:0,
        stagger:0.3,
        opacity:0,
        scrollTrigger:{
            trigger:".TimelineContentImg",
            scroller:"body",
            // markers:true,
            start:"top 85%",
            end:"top 70%",             
            scrub:2,
        }
      })
    })
  }
  gsaps()

  return (
    <div className="relative w-full my-16 z-10 bord py-[120px]">
  <div className=" relative w-full flex flex-col gap-9 Timeline_Tit">

    <div className="absolute w-[60%] h-[160%] TimelineBgBox z-20 left-10 rotate-12 bg-[#e3def67b] borderRadius "></div>
    <div className="absolute w-[40%] h-[120%] TimelineBgBox right-[120px] rotate-45 bg-[#dfbfd67b] borderRadius -z-10 "></div>

    <h1 className="fontStyle2 absolute right-20 -top-28 text-5xl text-[#120d44] Timeline_Title">Timeline</h1>
    
      <div className="flex  w-10/12 mx-auto z-100">
        <div className="w-[50%] z-20 TimelineContentImg">
          <img className="w-[500px]" src={img} alt="" />
        </div>
        <div className="bg-[#ececec6e] px-9 border-b-4 pt-5 overflow-y-hidden TimelineContent">
          <ol className="relative border-s border-gray-500 dark:border-gray-700">
            {timeline &&
              timeline.map((element) => {
                // console.log(timeline)
                return (
                  <li className="mb-10 ms-6 overflow-x-hidden " key={element._id}>
                    <span className="absolute -left-7 mt-3 flex items-center justify-center p-2 bg-blue-100 border-[8px] border-[#fcfcfc] shadow-[0_0_10px_#999] rounded-full ">
                      <FaGraduationCap className="text-2xl"/>
                    </span>
                    <div className="relative left-9">
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                          {element.title}
                        </h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                          {element.timeline.from} - {element.timeline.to ? element.timeline.to : "Present"}
                        </time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                          {element.description}
                        </p>
                    </div>
                  </li>
                );
              })}
          </ol>
        </div>
      </div>
    </div>
  </div>
  );
};

