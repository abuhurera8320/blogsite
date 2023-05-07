import React from "react";
import Blog from "./Blog";
import { useEffect, useState } from "react";
import blogService from "../../Services/modules/blogs";
import LoadMore from "../../components/LoadMore";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  const getBlogs = async () => {
    try {
      const res = await blogService.getBlogsList();
      setBlogs(res.data);
    } catch (error) {
      console.log("Error while fetching blogs", error);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div>
      <div className="blogs-container">
        {blogs.map((blog, index) => {
          return <Blog blog={blog} key={index} />;
        })}
      </div>
      <LoadMore />
    </div>
  );
}
