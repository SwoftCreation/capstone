import React from "react";
import AnimationCard from "./AnimationCard";
import "../../styles/RealtimeAnimation.scss";

function RealtimeAnimation(props) {
  console.log("RealtimeAnimation: Rendered");
  const moveValue = props.moveValue;
  console.log("RealtimeAnimation props : " + moveValue);
  return (
    <div className="RealtimeContainer">
      <AnimationCard moveValue={moveValue} />
    </div>
  );
}

export default RealtimeAnimation;
