import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            const iconClassName = `skill-icon ${skills.skillName.toLowerCase().replace('.', '')}`;
            return (
              <li key={i} className="software-skill-inline">
                <div className={iconClassName} >
                  {skills.icon}
                  <p>{skills.skillName}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
