import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import blogService from "../../Services/modules/blogs";
import "./Blog.css";
import viewIcon from "../../assets/views.svg";
import Views from "../../components/Views";

export default function BlogDetails() {
  const [blog, setBlog] = useState({});
  const { id } = useParams();

  const getBlog = async (id) => {
    try {
      const res = await blogService.getBlog(id);
      setBlog(res.data);
    } catch (error) {
      console.log("Error While fetching Blog", error);
    }
  };
  useEffect(() => {
    getBlog(id);
  }, []);
  return (
    <div>
      <div className="blog-container">
        <div className="d-flex align-center">
          <div className="paragraph-2 mr-20">Published on May 6, 2023</div>
          <Views id={blog.id} />
        </div>
        <h3>{blog.Title}</h3>
        <p className="paragraph-2">{blog.Subtitle}</p>
      </div>
      <div className="img-container">
        <img src={blog.Image} alt="" />
      </div>
      <div className="blog-container">
        <h4>{blog.Title}</h4>
        <p className="paragraph-2">{blog.Article}</p>
        <img className="img" src={blog.Image} alt="" />
        <div className="title-1">This is a small blog post headline</div>
        <p className="paragraph-2">{blog.Article}</p>
        <p className="paragraph-1 bordered-section">
          Ut non urna a odio condimentum dictum. Proin egestas erat a orci
          ultrices, vitae bibendum libero posuere. Quisque laoreet tincidunt
          justo. Vestibulum congue dictum libero finibus vehicula. Aliquam nisi
          velit, ultricies eget enim vel, venenatis mollis ante.
        </p>
        <p className="paragraph-2 mt-10">{blog.Article} </p>
      </div>
    </div>
  );
}
