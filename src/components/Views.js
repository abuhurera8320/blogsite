import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import viewsIcon from "../assets/views.svg";

export default function Views({ id }) {
  const views = useSelector((state) => state.blog.blog[id]);
  return (
    <div className="featured paragraph-2">
      <img className="mr-5" src={viewsIcon} alt="" /> {views || 0}{" "}
      {views > 1 ? "views" : "view"}
    </div>
  );
}

Views.propTypes = {
  id: PropTypes.string,
};
