import React from "react";
import "./plan.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
const Plan = () => {
  return (
    <div className="plans_container" id="plans">
    <div className="blur plans-blur-1">
    
    </div>
    <div className="blur plans-blur-2">
    
    </div>
      <div className="programs_header" style={{ gap: "2rem" }}>
        <span className="stroke-text">ready to start</span>
        <span>Your Journey</span>
        <span className="stroke-text">Now with us</span>
      </div>
      <div className="plan_cards">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon} 
            <span>{plan.name}</span>
            <span>${plan.price}</span>
            <div className="features">
            {plan.features.map((feature, i) => (
                <div className="feature">
                <img src={whiteTick} alt="" />
                <span key={i}>{feature}</span>
                </div>
            ))}
            </div>
            <div><span>see more benefits -></span></div>
            <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
