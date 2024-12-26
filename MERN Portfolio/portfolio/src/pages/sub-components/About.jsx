// import img from "../../assets/"
import { FaQuoteRight } from "react-icons/fa";
import myImg from "../../assets/my.png"
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const About=()=>{

  const gsaps=()=>{
    useGSAP(()=>{
      var tl = gsap.timeline()
      tl.from(".main_Title",{
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
      tl.from(".content",{
        duration:1,
        x:870,
        stagger:0.3,
        // opacity:0,
        scrollTrigger:{
            trigger:".content",
            scroller:"body",
            // markers:true,
            start:"top 85%",
            end:"top 50%",             
            scrub:2,
        }
    })
        tl.from(".content2",{
          duration:1,
          y:-270,
          stagger:0.3,
          opacity:0,
          scrollTrigger:{
              trigger:".content2",
              scroller:"body",
              // markers:true,
              start:"top 80%",
              end:"top 20%",             
              scrub:2,
      }
      })
      tl.from(".content3",{
        duration:1,
        x:770,
        // stagger:0.3,
        // opacity:0,
        scrollTrigger:{
            trigger:".content3",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 70%",             
            scrub:2,
        }
      })
      tl.from(".AboutImg",{
        duration:1,
        x:-270,
        stagger:0.3,
        opacity:0,
        scrollTrigger:{
            trigger:".AboutImg",
            scroller:"body",
            // markers:true,
            start:"top 80%",
            end:"top 30%",             
            scrub:2,
        }
      })
      gsap.to(".AboutImg",{
        duration:4,
        // x:10,
        y:20,
        scale:1.1,
        repeat:-1,
        yoyo:true
      })
      gsap.from(".aaaa .borderRadius",{
        duration:19,
        repeat:-1,
        rotate:360,
        // x:200,
        yoyo:true,
        stagger:0.4,
      })
    })
  }
  gsaps()
    return(
        <>
        <div id="About">
            <div className="relative">
              <div class="custom-shape-divider-bottom-1733254774 md:top-[-250px] ">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
          </div>
        </div>
        <div className="relative mt-[350px] w-full main_Title overflow-hidden">
          <div className=" relative w-10/12 mx-auto flex flex-col  overflow-x-hidden border-r-[10px] border-[#ff32ee]">
              <div className="text-center z-auto">
                <p className="uppercase text-xl text-slate-400 ">
                  Allow me to introduce myself.
                </p>
              </div>
              <div>
                <div className="grid md:grid-cols-2 my-2 w-full">
                  <div className="flex justify-center items-center AboutImg">
                    <img
                      src={myImg}
                      alt="avatar"
                      className="w-[400px]"
                    />
                  </div>
                  <div className="relative flex justify-center flex-col tracking-[1px] text-xl gap-5 aaaa">
                    <span className="absolute left-[150px] w-[300px] h-[300px] bg-[#849a8025] borderRadius"></span>
                    <p className="content">
                      My name is Rohit Dhillon, I have 3 years Polytechnic diploma in computer science  and also 1 year cyber security diploma in crew security 
                     . I am very intrested in web Development and cyber secutity .
                      . My hobbies is Sketching , Crafting and Playing games.
                    </p>
                    <p className="content2">
                      I have interests not only in technology but also in movies, games, video games, 
                       cooking. I excel in meeting deadlines for
                      my work.
                    </p>
                  </div>
                </div>
                <p className="relative w-full tracking-[1px] text-xl text-[#88888890] text-right content3 ">
                  My dedication and perseverance in timely delivery of work are integral
                  to me. I maintain the courage to face any challenges for extended
                  periods.
                </p>
              </div>
          </div>
        </div>
        </>
    )
}