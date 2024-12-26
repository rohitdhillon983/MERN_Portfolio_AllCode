import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {Line, Circle } from 'rc-progress';
import bimg from "../../assets/wave-haikei (1).png"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export const Skills=()=>{
    const [skills, setSkills] = useState([]);
    useEffect(() => {
      const getMySkills = async () => {
        const { data } = await axios.get(
          "https://mern-portfolio-backend-3.onrender.com/api/v1/skills/getall",
          { withCredentials: true }
        );
        setSkills(data.allSkills);
      };
      getMySkills();
    }, []);

    const gsaps=()=>{
      useGSAP(()=>{
        var tl = gsap.timeline()
        tl.from(".Skills_Title",{
            duration:0.1,
            y:-70,
            stagger:0.3,
            // opacity:0,
            scrollTrigger:{
                trigger:".Skills_Title",
                scroller:"body",
                // markers:true,
                start:"top 85%",
                end:"top 40%",             
                scrub:2,
            }
        })
        tl.from(".SkillsContent",{
          duration:1,
          y:-80,
          stagger:1,
          opacity:0,
          scrollTrigger:{
              trigger:".SkillsContent",
              scroller:"body",
              // markers:true,
              start:"top 85%",
              end:"top 50%",             
              scrub:2,
          }
        })
          tl.from(".SkillsContent2",{
            duration:1,
            y:70,
            stagger:1,
            opacity:0,
            scrollTrigger:{
                trigger:".SkillsContent2",
                scroller:"body",
                // markers:true,
                start:"top 65%",
                end:"top 20%",             
                scrub:2,
        }
        })
        
        tl.from(".SkillsImg",{
          duration:1,
          x:-270,
          stagger:0.3,
          opacity:0,
          scrollTrigger:{
              trigger:".SkillsImg",
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

    return(
        <>       
        <div className="relative Skills_Title top-44 mb-[100px]  w-full flex flex-col gap-8 sm:gap-12 bg-[#abbfe0]">
            <div className="relative">
              <div className="relative">
    
                <div class="custom-shape-divider-top-1733274787">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                  </svg>
              </div>
              <div class="custom-shape-divider-top-1733275521">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                  </svg>
              </div>
              <div class="custom-shape-divider-bottom-1733277080">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                  </svg>
              </div>
              <div class="custom-shape-divider-bottom-1733277081">
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                  </svg>
              </div>
                            
              </div>
            </div>
            <h1 className=" text-[2rem] sm:text-[2.75rem] md:text-[3rem] 
            lg:text-[5.8rem] font-bold text-[#8e959f99] SkillsContent mx-8 z-20">
              SKILLS
            </h1>
      <div className="flex flex-wrap gap-7 w-10/12 z-10 relative  mx-auto">
        {skills &&
          skills.map((element) => {
            // console.log(skills)
            return (
              <div className="container relative rounded-full transition-all hover:rounded-[10px] 
              overflow-hidden bg-[#3c4f65] flex flex-col justify-center items-center text-center 
              boxShadow hover:shadow-none lg:w-[250px] sm:w-[100px] SkillsContent2 p-3">
                <div>
                    <img
                      src={element.svg && element.svg.url}
                      alt="skill"
                      className="h-12 sm:h-14 w-auto"
                    />
                    <p className="my-3 text-2xl text-white sm:text-xl">{element.title}</p>
                </div>
                <Line  percent={element.proficiency} strokeWidth={10} trailWidth={9} trailColor="#ff2972" strokeColor="#D3D3D3" />
              </div>
            );
          })}
      </div>
      <div className="w-full z-0 relative top-3 skillsBottomImg">
        <img width="100%" src={bimg} alt="" />    
      </div>
    </div>
        </>
    )
}