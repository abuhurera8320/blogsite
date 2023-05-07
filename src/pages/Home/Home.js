import React from "react";
import "./Home.css";
import Hero from "../../components/Hero";
import FeaturedBlog from "../../components/FeaturedBlog";
import Blogs from "../Blog/Blogs";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBlog />
      <Blogs />
    </div>
  );
}
