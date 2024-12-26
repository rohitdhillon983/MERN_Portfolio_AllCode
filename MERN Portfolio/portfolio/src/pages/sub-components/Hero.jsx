import {
    ExternalLink,
    Facebook,
    Github,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
  } from "lucide-react";
  import img from "../../assets/main.png"
  import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  import { Typewriter } from "react-simple-typewriter";
  import { Button } from "@/components/ui/button";
  import axios from "axios";
import { Timeline } from "./Timeline";
import { FaCode ,FaLaptopCode ,FaCodeBranch , FaFileCode} from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { AiFillCode } from "react-icons/ai";
import { VscVscodeInsiders } from "react-icons/vsc";
import { MdOutlineSecurity } from "react-icons/md";
import { BsInstagram ,BsTwitterX } from "react-icons/bs";
import { TbShieldCode ,TbMessageCircleCode} from "react-icons/tb";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiFacebook,FiLinkedin} from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";
import resume from "../../assets/rohitCV.pdf"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
  
export  const Hero = () => {
    const [user, setUser] = useState({});
        console.log(user)

    const gsaps=()=>{
      useGSAP(()=>{
        var tl = gsap.timeline()
        tl.from(".main_Title div li",{
            // delay:0,
            duration:0.1,
            y:-70,
            // repeat:-1,
            stagger:0.3,
            opacity:0,
        })
        gsap.from(".fa",{
          duration:2,
          repeat:-1,
          scale:0.5
        })
        gsap.from(".fa1",{
          duration:2,
          // repeat:-1,
          scale:0.5
        })
        gsap.from(".fa5",{
          duration:3,
          opacity:0,
          repeat:-1,
          rotate:270,
          yoyo:true,
        })
        gsap.from(".fa6",{
          duration:2,
          repeat:-1,
          rotate:20,
          yoyo:true,
        })
        gsap.from(".fa7",{
          duration:1,
          repeat:-1,
          scale:0.5,
          yoyo:true
        })
        gsap.from(".main_home_img",{
          duration:5,
          // scale:0.5,
          repeat:-1,
          x:30,
          yoyo:true,
        })
        gsap.from(".contact_icon li",{
          duration:2,
          // repeat:-1,
          x:200,
          stagger:0.4,
        })
        gsap.from(".contact_icon li",{
          duration:2,
          repeat:-1,
          scale:1.1,
          stagger:0.6
        })
        gsap.from(".buttons li",{
          duration:2,
          // repeat:-1,
          width:0,
          // stagger:0.4,
        })
      })

    }
    gsaps()
    return (
    <div className="w-full bg-[#bec5ca] min-h-[80vh] Herosection_Main flex items-end">
      <div className="w-11/12 mx-auto flex justify-between relative heroSection">
        <div className="max-[425px]:pl-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-green-400 rounded-full h-2 w-2 opacity"></span>
          <p className="text-red-500">Online</p>
        </div>
        <h1 className="main_Title">
          <span className="fontStyle2 text-[1.5rem] text-[#696868]">Hey, I'm</span> 
          <div className="text-black sm:text-[1.75rem] 
        md:text-[2.2rem] lg:text-[2.8rem] text-[2.5rem] flex list-none"><li>R</li>
        <li>O</li>
        <li>H</li>
        <li>I</li>
        <li>T</li>
        <li className="w-4"> </li>
        <li>D</li>
        <li>H</li>
        <li>I</li>
        <li>L</li>
        <li>L</li>
        <li>O</li>
        <li>N</li></div>
        </h1>
        <h1 className="text-tubeLight-effect overflow-x-hidden text-[1.3rem] 
        sm:text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] tracking-[15px]">
          <Typewriter
            words={["DEVELOPER", "YOUTUBER", "CYBER SECURITY","BUG BOUNTY","UI/UX DESIGNER"]}
            loop={500}
            cursor
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <div className="w-fit px-5 py-2 rounded-[20px] flex z-50 gap-5 
        items-center mt-4 md:mt-8 lg:mt-10 bg-[#cdcaf1a8] contact_icon list-none overflow-hidden">
          <Link to={"https://www.youtube.com/@editingroom9274"} className="z-50">
            <li><FaYoutube className="text-red-500 w-7 h-7"/></li>
          </Link>
          <Link to={"https://www.instagram.com/__rohit__dhillon__/"} className="z-50">
           <li> <BsInstagram className="text-pink-500 w-7 h-7" /></li>
          </Link>
          <Link to={user.facebookURL} target="_blank">
            <li><FiFacebook className="text-blue-800 w-7 h-7" /></li>
          </Link>
          <Link to={"https://in.linkedin.com/in/rohit-dhillon-bug20421"}className="z-50">
            <li><FiLinkedin className="text-sky-500 w-7 h-7" />
          </li></Link>
          <Link to={user.twitterURL} target="_blank">
            <li><BsTwitterX  className="text-black-800 w-7 h-7" />
            </li></Link>
        </div>
        <div className="mt-4 md:mt-8 lg:mt-10  flex gap-3 list-none buttons z-50">
        <Link to={"https://github.com/rohitdhillon983"} className="z-50">
            <li><Button className="rounded-[30px] flex items-center gap-2 flex-row z-50">
              <span>
                <Github />
              </span>
              <span>Github</span>
            </Button>
         </li> </Link>
         <Link to={resume} download={resume.pdf} className="z-50">
            <li><Button className="rounded-[30px] flex items-center gap-2 flex-row z-50">
              <span>
              <MdFileDownload />
              </span>
              <span>Resume</span>
            </Button>
         </li> </Link>
        </div>
        </div>
        <div className="main_home_img z-30">
            <img width={650} src={img} alt="" />
        </div>
        <div className="fa1 absolute right-0 z-30 text-[#cce0f9] h-full w-full">
          <FaCode className="fa2 absolute top-[100%] z-30 right-[30%] text-[#cce0f96a] text-[70px]"/>
          <FaLaptopCode  className="fa3 absolute top-[50px] left-[20%] text-[#f67930] opacity z-10 text-[30px]"/>
          <FaCodeBranch className="fa4 absolute top-[350px] z-30 right-[0%] text-[#d430ed74] opacity  text-[70px]"/>
          <TbShieldCode className="fa5 absolute top-[5%] right-[10%] text-[#f34a2f76] z-10 text-[70px]"/>
          <TbMessageCircleCode className="fa6 absolute top-[40%] left-[50%] text-[#6e9fda] z-10 text-[70px]"/>
          <MdOutlineSecurity className=" fa absolute top-[-10%] sm:top-[-40%] text-[#1a2635] z-10 text-[40px]"/>
          <FaCloudDownloadAlt className="fa7 absolute top-[40%] sm:top-[-40%] text-[#ebf0f5] left-[95%] z-10 text-[40px]"/>
        </div>
      </div>
      </div>
    );
  };
  
  