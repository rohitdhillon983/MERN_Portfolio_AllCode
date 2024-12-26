import { Button } from '../../components/ui/button';
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import img from "../../assets/login.webp"
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
 
export const Contact = () => {
  const [senderName, setSenderName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleMessage = async (e) => {
    e.preventDefault();
    setLoading(true);
    await axios
      .post(
        "https://mern-portfolio-backend-3.onrender.com/api/v1/message/send",
        { senderName, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        toast.success(res.data.message);
        setSenderName("");
        setSubject("");
        setMessage("");
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.response.data.message);
        setLoading(false);
      });
  };

  const gsaps=()=>{
    useGSAP(()=>{
      var tl = gsap.timeline()
      tl.from(".ContactUs_Title",{
          duration:0.1,
          // y:-70,
          width:0,
          stagger:0.3,
          // opacity:0,
          scrollTrigger:{
              trigger:".ContactUs_Title",
              scroller:"body",
              // markers:true,
              start:"top 90%",
              end:"top 70%",             
              scrub:2,
          }
      })
      
      tl.from(".ContactUsImg",{
        duration:1,
        x:20,
        y:-20,
        stagger:0.3,
        // opacity:0,
        repeat:-1,
        yoyo:true
      })
    })
  }
  gsaps()

  return (
    <>
      <div className=" z-100 relative max-[425px]:mb-[100px]" id='ContactUs'>
        <div className="relative mb-8">
          <h1
            className="flex gap-4 items-center ContactUs_Title text-[1.85rem] sm:text-[2.75rem] md:text-[3rem] 
            lg:text-[3rem] leading-[56px] md:leading-[67px] lg:leading-[90px] 
            tracking-[15px] mx-auto w-fit font-extrabold about-h1 bg-[#070728] text-white px-4"
          >
            CONTACT
            <span className="text-tubeLight-effect font-extrabold">ME</span>
          </h1>
          <span className="absolute w-full h-1 top-7 sm:top-7 
          md:top-8 lg:top-11 z-[-1] bg-slate-200"></span>
        </div>
        <div className='relative flex justify-center gap-8 mb-6 py-9 overflow-hidden Contact_Main'>
          <span className='w-[20%] h-[40%] absolute bottom-0 left-64 bg-[#ace6b085] borderRadius opacity'></span>
          <span className='w-[20%] h-[40%] absolute top-15 left-10 bg-[#f6b323af] borderRadius fa6'></span>
          <div className='relative w-[40%] Contact_content1'>           
          <form onSubmit={handleMessage} className="flex flex-col gap-6 relative top-[50px]">
              <div className="flex flex-col gap-2 px-1.5">
                <Label className="text-xl">Your Name</Label>
                <Input
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col gap-2 px-1.5">
                <Label className="text-xl">Subject</Label>
                <Input
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Subject"
                />
              </div>
              <div className="flex flex-col gap-2 px-1.5">
                <Label className="text-xl">Message</Label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  rows={3}
                  className='border px-1.5 rounded bg-transparent'
                />
              </div>
              <div className="flex justify-end">
                {!loading ? (
                  <Button className="w-full sm:w-52">SEND MESSAGE</Button>
                ) : (
                  <button
                    disabled
                    type="button"
                    className="w-full sm:w-52 text-slate-900  bg-white hover:bg-slate-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 dark:bg-white dark:hover:bg-slate-200 dark:focus:ring-blue-800 inline-flex items-center"
                  >
                  </button>
                )}
              </div>
            </form>
          </div>
          <div>
            <div className='relative w-[80%] ContactUsImg'>
              <img className='z-10' src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

