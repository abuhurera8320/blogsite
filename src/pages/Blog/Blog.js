import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBlogCount } from "../../reducers/blogReducer";
import PropTypes from "prop-types";

import Views from "../../components/Views";

export default function Blog({ blog }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setBlogCount({ id: blog.id }));
  };

  return (
    <Link to={`/blog/${blog.id}`}>
      <div onClick={handleClick} className="blog-card">
        <img className="img" src={blog.Image} alt="Blog1" />
        <div className="blog-meta card-meta">
          <div className="d-flex align-center">
            <div className="paragraph-2">Posted on May 6, 2023</div>
          </div>
          <Views id={blog.id} />
        </div>
        <div className="title-1">{blog.Title}</div>
        <p className="paragraph-2">{blog.Subtitle}</p>
      </div>
    </Link>
  );
}

Blog.propTypes = {
  blog: PropTypes.object,
};
