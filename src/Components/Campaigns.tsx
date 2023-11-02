import React from 'react';
import "../Campaign.css";
import campaignimage1 from "../assets/images/Image Placeholder.png";
import campaignimage2 from "../assets/images/Image Placeholder (1).png";
import campaignimage3 from "../assets/images/Container.png";

const campaignsData = [
  {
    id: 1,
    image: campaignimage1,
    title: "Open data directive",
    description: "Description of Campaign 1 goes here.",
  },
  {
    id: 2,
    image: campaignimage2,
    title: "Campaign 2",
    description: "",
  },
  {
    id: 3,
    image: campaignimage3,
    title: "Campaign 3",
    description: "",
  },
];

const Campaigns = () => {
  return (
    <div className="campaigns-container">
      <div className="header">
        <h2>Campaigns</h2>
        <p>We aim to stop public funds siphoning off, and we have a plan that will help. We are working at the national and EU levels to advance.</p>
      </div>
      <div className='campaign-cards'>
        {campaignsData.map((campaign) => (
          <div className="campaign-card" key={campaign.id}>
            <img src={campaign.image} alt={campaign.title} />
            <h3>{campaign.title}</h3>
            <p>{campaign.description}</p>
            <a href="#">Learn More <span>&rarr;</span></a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Campaigns;
