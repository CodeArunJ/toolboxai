// src/pages/ToolsPage.js
import React, { useState } from "react";
import ToolList from "../components/ToolList"; // Import the ToolList component
import "../styles/tools.css"; // Import the CSS file for styling
import {
  imageGenerationTools,
  websites,
  codeGenerationTools,
  contentGenerationTools,
  presentationTools, // Ensure this is defined in data.js
  uiUxDesignTools, // Ensure this is defined in data.js
} from "../styles/data"; // Import data from data.js

const ToolsPage = () => {
  const [filteredTools, setFilteredTools] = useState([]);
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilter = () => {
    const allTools = [
      ...imageGenerationTools,
      ...websites,
      ...codeGenerationTools,
      ...contentGenerationTools,
      ...presentationTools, // Include presentationTools
      ...uiUxDesignTools, // Include uiUxDesignTools
    ];

    const filtered = allTools.filter((tool) => {
      const categoryMatch = category === "All" || tool.category === category;
      const typeMatch = type === "All" || tool.type === type;
      const searchTermMatch =
        tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tool.type.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && typeMatch && searchTermMatch;
    });

    setFilteredTools(filtered);
  };

  return (
    <div className="container">
      <h1>AI Tools</h1>
      <div className="filter-container">
        <div>
          <label htmlFor="categorySelect">Category:</label>
          <select
            id="categorySelect"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All</option>
            <option value="AI Image Generation Tools">
              AI Image Generation Tools
            </option>
            <option value="AI Websites">AI Websites</option>
            <option value="AI Code Development Tools">
              AI Code Development Tools
            </option>
            <option value="AI-powered presentation software">
              AI-powered presentation software
            </option>
            <option value="AI-powered design platform">
              AI-powered design platform
            </option>
            {/* Add more categories here if needed */}
          </select>
        </div>

        <div>
          <label htmlFor="typeSelect">Type:</label>
          <select
            id="typeSelect"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
        </div>

        <div>
          <label htmlFor="searchInput">Search:</label>
          <input
            type="text"
            id="searchInput"
            placeholder="Search for tools..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <button id="filterButton" onClick={handleFilter}>
          Filter
        </button>
      </div>
      <div id="filteredTools">
        {filteredTools.length > 0 ? (
          <ToolList data={filteredTools} title="Filtered Tools" />
        ) : (
          <p>No tools match your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default ToolsPage;
