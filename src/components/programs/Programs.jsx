import React from "react";
import "./programs.css";
import { programsData } from "../../data/programsData";
import rightArrow from '../../assets/rightArrow.png'; 
function Programs() {
  return (
    <div className="programs" id="programs">
      {/* header for the section */}
      <div className="programs_header">
        <span className="stroke-text">Explore our </span>
        <span>program</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program_categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join_now"><span>Join now</span> <img src={rightArrow} alt="" /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
