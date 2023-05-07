import React from "react";
import arrow from "../assets//arrow.svg";

export default function FeaturedBlog() {
  return (
    <section className="featured-blog-container">
      <div className="bg-white featured-blog">
        <div className="blog-image">
          <img
            src="https://images.unsplash.com/photo-1629277836675-5bf189b954f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=691&q=80"
            alt=""
          />
        </div>
        <div className="blog-details">
          <div className="blog-meta">
            <div className="d-flex align-center">
              <span className="view-counter">May 6, 2023</span>
              <span className="view-counter">123 views</span>
            </div>
            <div className="featured caption text-primary">Featured</div>
          </div>
          <h4 className="blog-title">The Title of My Featured Blog Post</h4>
          <p className="paragraph-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tincidunt diam eu sapien porttitor lacinia. Quisque vitae ligula vel
            augue aliquet faucibus.
          </p>
          <div className="blog-read-more">
            <p className=" paragraph-1 text-black">Read More</p>
            <a href="#">
              <img src={arrow} alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
