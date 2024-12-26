import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { SpecialLoadingButton } from "./SpecialLoadingButton"
import { AddNewexperience, clearAllexperienceErrors, getAllexperience, resetexperienceSlice} from "../../slices/exprienceSlice"
import { toast } from "react-toastify"
// import { timeLog } from "console"

export const AddExperience=()=>{
   const[title,setTitle]=useState("")
   const[description,setDescription]=useState("")
   const[from,setFrom]=useState("")
   const[to,setTo]=useState("")
   const[companyName,setCompanyName]=useState("")

    const {loading,error,message}=useSelector((state)=>state.experience);
    const dispatch = useDispatch();
    const handleAddNewexperience=(e)=>{
        const formData = new FormData()
        formData.append("jobTitle",title),
        formData.append("description",description),
        formData.append("from",from),
        formData.append("to",to),
        formData.append("companyName",)
        dispatch(AddNewexperience(formData))
   }

   useEffect(()=>{
    if(error){
        toast.error(error);
        dispatch(clearAllexperienceErrors())
    }
    if(message){
        toast.success(message);
        dispatch(resetexperienceSlice());
        dispatch(getAllexperience());
    }
},[dispatch,loading,error,message]);

    return(
        <>
        <div className="flex justify-center items-center mt-8 min-h-[100vh] sm:gap-4 sm:py-4 sm:pl-14">
            <form onSubmit={handleAddNewexperience}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-[2rem]/7 font-semibold text-gray-900">Add New Experience</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
    
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                    job Title
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                  Company Name
                  </label>
                  <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={companyName}
                        onChange={(e)=>setCompanyName(e.target.value)}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                  Description
                  </label>
                  <div className="mt-2">
                  <div>
                      <textarea
                        id="title"
                        name="title"
                        type="text"
                        rows={4}
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full flex justify-between">
                  <div>
                        <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                        From
                        </label>
                        <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={from}
                                onChange={(e)=>setFrom(e.target.value)}
                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            />
                            </div>
                        </div>
                  </div>
                  <div>
                        <label htmlFor="about" className="block text-sm/6 font-medium text-gray-900">
                        To
                        </label>
                        <div className="mt-2">
                        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                            <input
                                id="title"
                                name="title"
                                type="text"
                                value={to}
                                onChange={(e)=>setTo(e.target.value)}
                                className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                            />
                            </div>
                        </div>
                  </div>
                </div>
        
                
              </div>
            </div>
          </div>
          <div className="mt-0 flex items-center justify-end gap-x-6">
            
            <div className="mt-6 flex items-center justify-end gap-x-6">
            {!loading ? (
              <Button
                type="submit"
                onClick={() => handleAddNewexperience()}
                className="w-full"
              >
                Add experience
              </Button>
            ) : (
               <SpecialLoadingButton content={"Adding New Skill"} />
            )}
          </div>
          </div>
        </form>
        </div>
        </>
    )
}