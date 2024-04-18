import React from 'react'
import BlogCard from '../components/BlogCard'
import data from '../data';
import {useState} from 'react';


const Main = () => {
  const [dataInfo, setDataInfo] = useState(data);
  return (
    <div>
      <BlogCard dataInfo={dataInfo} setDataInfo={setDataInfo}/>
    </div>
  )
}

export default Main
