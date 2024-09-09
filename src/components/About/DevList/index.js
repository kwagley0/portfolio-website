import React, { useState } from "react";
import "./index.scss";

const TechList = () => {
  const [devs] = useState([
    {
      name: "Docker",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
    },
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
  ]);

  return (
    <div>
      <h2>Development Tools</h2>
      <div className="dev-list-container">
        {devs.map((dev, index) => (
          <div key={index} className="dev-card">
            <img src={dev.image} alt={dev.name} className="dev-icon" />
            <p className="dev-name">{dev.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechList;
