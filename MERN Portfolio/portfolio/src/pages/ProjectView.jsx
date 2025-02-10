import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { Button } from "@/components/ui/button";

export const ProjectView = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [stack, setStack] = useState("");
  const [gitRepoLink, setGitRepoLink] = useState("");
  const [deployed, setDeployed] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectBanner, setProjectBanner] = useState("");
  const [projectBannerPreview, setProjectBannerPreview] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getProject = async () => {
      await axios
        .get(`https://mern-portfolio-backend-3.onrender.com/api/v1/project/getSingleProject/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
            console.log(res)
          setTitle(res.data.deleteProject.title);
          setDescription(res.data.deleteProject.description);
          setStack(res.data.deleteProject.stack);
          setDeployed(res.data.deleteProject.deployed);
          setTechnologies(res.data.deleteProject.technologies);
          setGitRepoLink(res.data.deleteProject.gitRepoLink);
          setProjectLink(res.data.deleteProject.projectLink);
          setProjectBanner(
            res.data.deleteProject.projectImg && res.data.deleteProject.projectImg.url
          );
          setProjectBannerPreview(
            res.data.deleteProject.projectImg && res.data.deleteProject.projectImg.url
          );
          
        })
        .catch((error) => {
            console.log(error)
          toast.error(error.response);
        });
    };
    getProject();
  }, [id]);

  const descriptionList = description.split(". ");
  const technologiesList = technologies.split(", ");

  const navigateTo = useNavigate();
  const handleReturnToPortfolio = () => {
    navigateTo("/");
  };

  return (
    <>
      <div className="flex mt-7 justify-center items-center min-h-[100vh] sm:gap-4 sm:py-4">
        <div className="w-[100%] px-5 md:w-[1000px] pb-5">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <div className="flex justify-end">
                <Button onClick={handleReturnToPortfolio}>
                  Return to Portfolio
                </Button>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                <div className="w-full sm:col-span-4">
                  <h1 className="text-2xl font-bold mb-4">{title}</h1>
                  <img
                    src={
                      projectBannerPreview
                        ? projectBannerPreview
                        : "/avatarHolder.jpg"
                    }
                    alt="projectBanner"
                    className="w-500 h-auto"
                  />
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Description:</p>
                  <ul className="list-disc">
                    {descriptionList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Technologies:</p>
                  <ul className="list-disc">
                    {technologiesList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="w-full sm:col-span-4">
                  {/* <p className="text-2xl mb-2">Stack:</p> */}
                  <p>{stack}</p>
                </div>
                <div className="w-full sm:col-span-4">
                  {/* <p className="text-2xl mb-2">Deployed:</p> */}
                  <p>{deployed}</p>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Github Repository Link:</p>
                  <Link
                    className="text-sky-700"
                    target="_blank"
                    to={gitRepoLink}
                  >
                    {gitRepoLink}
                  </Link>
                </div>
                <div className="w-full sm:col-span-4">
                  <p className="text-2xl mb-2">Project Link:</p>
                  <Link
                    className="text-sky-700"
                    target="_blank"
                    to={projectLink}
                  >
                    {projectLink}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

