import React from "react";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags.map((tag) => {
        return (
          <span className="tag" key={`${tag}`}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
