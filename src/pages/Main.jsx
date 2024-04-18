import React from "react";
import BlogCard from "../components/BlogCard";

const Main = ({ dataInfo, setDataInfo }) => {
  return (
    <div>
      <BlogCard dataInfo={dataInfo} setDataInfo={setDataInfo} />
    </div>
  );
};

export default Main;
