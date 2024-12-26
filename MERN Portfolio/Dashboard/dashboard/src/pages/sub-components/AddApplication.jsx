import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { SpecialLoadingButton } from "./SpecialLoadingButton"
import { PhotoIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"
import { addNewSoftwareApplication, clearAllSoftwareAppErrors, getsoftwareApplications, resetSoftwareApplicationSlice } from "@/slices/softwareApplicationSlice"
import { toast } from "react-toastify"

export const AddSoftwareApplications =()=>{

    const [title,SetTitle]=useState("")
    const [svg,setSvg]=useState("")
    const [svgPreview,setSvgPreview]=useState("")

    const handleSvg =(e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
            setSvg(file);
            setSvgPreview(reader.result);
        };
    };

    const {loading,error,message}=useSelector((state)=>state.softwareApplications);
    const dispatch = useDispatch();

    const handleAddNewSoftware=(e)=>{
        // e.preventDefault()
        const formData = new FormData();
        formData.append("name",title);
        formData.append("svg",svg);
        // console.log(svg,title)
        dispatch(addNewSoftwareApplication(formData));
    }

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch(getsoftwareApplications())
        }
        if(message){
            toast.success(message);
            dispatch(resetSoftwareApplicationSlice());
            dispatch(getsoftwareApplications());
        }
    },[dispatch,loading,error]);

    return (
        <div className="flex justify-center items-center mt-8 min-h-[100vh] sm:gap-4 sm:py-4 sm:pl-14">
            <form onSubmit={handleAddNewSoftware}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-[2rem]/7 font-semibold text-gray-900">Add New software Applications</h2>
              <p className="mt-1 text-sm/6 text-gray-600">
                This information will be displayed publicly so be careful what you share.
              </p>
    
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">
                    Software Name
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        value={title}
                        onChange={(e)=>SetTitle(e.target.value)}
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>
    
                
                <div className="col-span-full">
                  <label className="block text-sm/6 font-medium text-gray-900">
                    software photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      {svgPreview ?(
                        <img className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                         src={svgPreview? `${svgPreview}`:""} alt="" />
                      ):
                      (<PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />)}
                      <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only"
                          onChange={handleSvg} />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
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
                onClick={() => handleAddNewSoftware()}
                className="w-full"
              >
                Add Software
              </Button>
            ) : (
               <SpecialLoadingButton content={"Adding New Skill"} />
            )}
          </div>
          </div>
        </form>
        </div>
      )
}