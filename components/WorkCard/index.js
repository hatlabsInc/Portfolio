import React from "react";
import Button from "../Button";

const WorkCard = ({ img, name, description, subtitle1, url, github_url, onClick }) => {
  return (
    <div
      className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link"
      onClick={onClick}
    >
      <div
        className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
        style={{ height: "200px" }}
      >
        <img
          alt={name}
          className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
          src={img}
        ></img>
      </div>
      <h1 className="mt-5 text-3xl font-medium ">
        {name ? name : "Project Name"}
      </h1>
      <p className="text-lg text-sky-400 mb-3">{subtitle1 ? subtitle1 : "Subtitle"}</p>
      <h2 className="text-xl opacity-50">
        {description ? description : "Description"}
      </h2>
      <div className="flex justify-content: center">
      <Button href={url} className="hover:text-black sky-400">Visit Site</Button>
      {/*<Button href={github_url}>Codebase</Button>*/}
      </div>
      

    </div>
  );
};

export default WorkCard;
