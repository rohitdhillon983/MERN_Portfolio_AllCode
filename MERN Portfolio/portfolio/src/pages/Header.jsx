import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react";
import { Link } from "react-router-dom"
import { MdLogin } from "react-icons/md";
import { DiCodeigniter } from "react-icons/di";

export const Header=()=>{
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
      };

    const handleMenuClick = () => {
        setOpen(false);
      };
    return(
        <div className="w-full py-2 bg-[#bec5ca]">
           <div className="w-10/12 mx-auto border-b-2 flex justify-between items-center px-11">
           <DiCodeigniter  className="text-[#2d30fc] text-[1.5rem]"/>
           <h1 className="fontStyle2 max-[425px]:hidden text-[1.5rem] text-[#8e3705]">PortFolio</h1>
              <Link to={"https://mern-portfolio-admin.netlify.app/"}>
              <div className="flex justify-center items-center gap-2 w-28 transition-all hover:border-[#fb2f2f] border-b-[3px] border-[#ff323200] font-bold text-[#777676] text-[1.5rem]">
                <MdLogin />   
                 Login
              </div>
              </Link>
           </div>
        </div>
    )
}