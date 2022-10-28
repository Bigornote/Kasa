import React from "react";

const Accordeon = ({ title, content, details, summary, text }) => {
  return (
    <details className={details}>
      <summary className={summary}>
        {title} <i className="fa-solid fa-chevron-down"></i>
      </summary>
      {typeof content === "object" ? (
        <ul className={text}>
          {content.map((element) => {
            return <li key={`${element}`}> {element}</li>;
          })}
        </ul>
      ) : (
        <p className={text}>{content}</p>
      )}
    </details>
  );
};

export default Accordeon;
