// src/components/ToolList.js
import React from "react";

const ToolList = ({ data, title }) => {
  if (!data || !Array.isArray(data)) {
    return <p>No data available.</p>;
  }

  return (
    <div>
      <h2>{title}</h2>
      <ul>
        {data.map((tool, index) => (
          <li key={index}>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            <p>Category: {tool.category}</p>
            <p>Type: {tool.type}</p>
            {tool.url && (
              <p>
                Website:{" "}
                <a href={tool.url} target="_blank" rel="noopener noreferrer">
                  {tool.url}
                </a>
              </p>
            )}
            {tool.ratings && (
              <p>
                Ratings:{" "}
                {tool.ratings.map((rating, i) => (
                  <span key={i}>
                    {rating.rating} ({rating.source}){" "}
                  </span>
                ))}
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToolList;
