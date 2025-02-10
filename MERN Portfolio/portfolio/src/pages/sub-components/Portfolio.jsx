import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const Portfolio = () => {
  const [viewAll, setViewAll] = useState(false);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getMyProjects = async () => {
      const { data } = await axios.get(
        "https://mern-portfolio-backend-3.onrender.com/api/v1/project/getall",
        { withCredentials: true }
      );
      // console.log(data)
      setProjects(data.allProject);
    };
    getMyProjects();
  }, []);
  // console.log(projects)

  const gsaps=()=>{
    useGSAP(()=>{
      var tl = gsap.timeline()
      tl.from(".Project_Title1",{
        duration:0.1,
        x:-170,
        stagger:1,
        opacity:0,
        scrollTrigger:{
            trigger:".Project_Title1",
            scroller:"body",
            // markers:true,
            start:"top 85%",
            end:"top 60%",             
            scrub:2,
        }
       })
      tl.from(".Project_Title",{
          duration:0.1,
          y:70,
          stagger:0.3,
          // delay:2,
          // opacity:0,
          scrollTrigger:{
              trigger:".Project_Title",
              scroller:"body",
              // markers:true,
              start:"top 85%",
              end:"top 60%",             
              scrub:2,
          }
      })
      tl.from(".Project_icon",{
        duration:0.1,
        rotate:-70,
        stagger:0.3,
        // opacity:0,
        scrollTrigger:{
            trigger:".Project_icon",
            scroller:"body",
            // markers:true,
            start:"top 75%",
            end:"top 50%",             
            scrub:2,
        }
      })
      tl.from(".ProjectContent",{
        duration:1,
        width:0,
        stagger:0.3,
        // opacity:0,
        scrollTrigger:{
            trigger:".ProjectContent",
            scroller:"body",
            // markers:true,
            start:"top 85%",
            end:"top 50%",             
            scrub:2,
        }
        })
        tl.from(".ProjectContent2",{
          duration:1,
          x:570,
          stagger:0.3,
          opacity:0,
          scrollTrigger:{
              trigger:".ProjectContent2",
              scroller:"body",
              // markers:true,
              start:"top 85%",
              end:"top 60%",             
              scrub:2,
        }
        })
        tl.from(".ProjectContent2_1",{
          duration:1,
          width:0,
          stagger:0.3,
          // opacity:0,
          scrollTrigger:{
              trigger:".ProjectContent2_1",
              scroller:"body",
              // markers:true,
              start:"top 85%",
              end:"top 50%",             
              scrub:2,
          }
          })
        tl.from(".ProjectContent2_2",{
          duration:1,
          x:-570,
          stagger:0.3,
          opacity:0,
          scrollTrigger:{
            trigger:".ProjectContent2_2",
            scroller:"body",
            // markers:true,
            start:"top 85%",
            end:"top 60%",             
            scrub:2,
        }
        })
        tl.from(".ProjectContent3",{
          duration:1,
          x:770,
          // stagger:0.3,
          // opacity:0,
          scrollTrigger:{
            trigger:".ProjectContent3",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 50%",             
            scrub:2,
        }
        })
        tl.from(".ProjectImg",{
          duration:1,
          x:-270,
          stagger:0.3,
          opacity:0,
          scrollTrigger:{
            trigger:".ProjectImg",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 30%",             
            scrub:2,
        }
      })
    })
  }
  gsaps()

  return (
    <div className=" relative " id="Project">
      <div className="relative mb-12">
        <h1
          className=" sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
          lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] 
          mx-auto w-fit font-extrabold overflow-hidden Project_Title1 about-h1">
          MY{" "}
          <span className="Project_Title text-tubeLight-effect font-extrabold">
            PROJECTS 
          </span>
        </h1>
        <span className="absolute Project_icon -top-20 text-[150px] text-[#e5e4e6]"><FaQuoteRight /></span>
      </div>
      <div className=" w-10/12 mx-auto">{
        projects.map((elem)=>{
          // console.log(elem)
          let tech = elem.technologies
          const aa =  tech.split(",")

          let dis = elem.description
          const disc = dis.slice(0,200)
          // console.log(disc)
          return(
            <div>
              {elem.projectNo%2 == 0 ? 
                <div>
                  <div className="flex justify-center overflow-hidden projectContainer projectContainer1">
                    <div className="relative cbefore w-[50%] p-9 flex justify-center items-center ProjectContent ">
                      <div className="shadow-[0_0_20px_#999] relative p-5 pt-8 rounded-3xl z-10 transition-all hover:scale-90">
                        <span className="bg-gradient-to-t from-purple-500 to-pink-500 text-white shadow-xl shadow-[#666] p-2 px-4 rounded-full absolute right-[-60px] top-[35%] ProjectEvenNo">{elem.projectNo}</span>
                        <h1 className="text-2xl fontStyle2">{elem.title}</h1>
                        <p className="text-[#999] m-3">{disc}...</p>
                        <p className="px-3 flex flex-wrap gap-3">{aa.map(element => {
                          return <p className="text-black border-2 px-2 rounded-3xl shadow-lg">{element}</p>
                        })}</p>

                        <div className="flex gap-6 px-3 mt-3">
                          <Link to={elem.gitRepoLink}>
                            <p className="bg-[#f89f3a55] py-1 px-3 rounded-3xl">
                              Github 
                            </p>
                          </Link>
                          <Link to={elem.projectLink}>
                          <p className="bg-[#3c342a55] py-1 px-3 rounded-3xl">
                            visit 
                          </p>
                          </Link>
                        </div>
                        {/* <p>{elem.stack}</p>
                        <p>{elem.deployed}</p> */}
                      </div>
                    </div>
                    <div className="relative flex justify-center items-center w-[50%] border-l-4 ProjectContent2">
                      <Link to={`/project/${elem._id}`}>
                      <div className="max-[425px]:w-full max-[425px]:my-8 flex justify-center px-4 items-center IBefore">
                        <img className="h-full rounded-lg overflow-hidden" src={elem.projectImg.url} alt="" />
                      </div>
                      </Link>                   
                    </div>
                  </div>
                </div>:          
                  <div>
                    <div className="flex justify-center flex-row-reverse projectContainer projectContainer2 overflow-hidden">
                    <div className="relative cbefore w-[50%] p-9 flex justify-center items-center ProjectContent2_1">
                      <div className="shadow-[0_0_20px_#999] relative p-5 pt-8 rounded-3xl z-10 transition-all hover:scale-90">
                        <span className="bg-gradient-to-t from-purple-500 to-pink-500 text-white shadow-xl shadow-[#666] p-2 px-4 rounded-full absolute left-[-60px] top-[35%] PorjectOddNo">{elem.projectNo}</span>
                        <h1 className="text-2xl fontStyle2">{elem.title}</h1>
                        <p className="text-[#999] m-3">{disc}...</p>
                        <p className="px-3 flex flex-wrap gap-3">{aa.map(element => {
                          return <p className="text-black border-2 px-2 rounded-3xl shadow-lg">{element}</p>
                        })}</p>

                        <div className="flex gap-6 px-3 mt-3">
                          <Link to={elem.gitRepoLink}>
                            <p className="bg-[#f89f3a55] py-1 px-3 rounded-3xl">
                              Github 
                            </p>
                          </Link>
                          <Link to={elem.projectLink}>
                          <p className="bg-[#3c342a55] py-1 px-3 rounded-3xl">
                            visit 
                          </p>
                          </Link>
                        </div>
                        {/* <p>{elem.stack}</p>
                        <p>{elem.deployed}</p> */}
                      </div>
                    </div>
                    <div className="relative flex justify-center items-center w-[50.4%] border-r-4 ProjectContent2_2 ">
                        <Link to={`/project/${elem._id}`}>
                          <div className=" max-[425px]:w-full max-[425px]:my-8 flex justify-center items-center rounded-lg overflow-hidden px-4 IBefore">
                            <img className="h-full rounded-xl overflow-hidden" src={elem.projectImg.url} alt="" />
                          </div> 
                      </Link>                 
                    </div>
                  </div>
                  </div>}
            </div>
          )
        })
      }</div>
    </div>
  );
};

