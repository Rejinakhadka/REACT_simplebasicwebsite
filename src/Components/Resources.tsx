import React from 'react';
import "../Resources.css";
import tool from "../assets/images/tool.png";
import file from "../assets/images/file.png";
import check from "../assets/images/check.png";

const resourcesData = [
  {
    id: 1,
    image: tool,
    title: "Defense Elvis",
    description: "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
  },
  {
    id: 2,
    image: file,
    title: "Knowledge",
    description: "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
  },
  {
    id: 3,
    image: check,
    title: "Verified",
    description: "It allows creating networks of public spending on goods services used in defense in 28 EU countries...",
  },
];

const Resources = () => {
  return (
    <div className="Resources-container">
      <div className="header">
        <h2>Latest Resources</h2>
        <p>The latest resources include Transparency Toolkit, Evidence, Best Practices</p>
      </div>
      <div className='resources-cards'>
        {resourcesData.map((resources) => (
          <div className="resources-card" key={resources.id}>
            <img src={resources.image} alt={resources.title} />
            <h3>{resources.title}</h3>
            <p>{resources.description}</p>
            <a href="#">Learn More <span>&rarr;</span></a>
          </div>
        ))}
      </div>
      <div className="resources-footer">
        <button className="view-all-resources-button">View All Resources</button>
      </div>
    </div>
  );
};

export default Resources;
