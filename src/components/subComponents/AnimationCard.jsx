import React from "react";

function AnimationCard(props) {
  const moveValue = props.moveValue;
  console.log(moveValue);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="upper">
          <div>
            <h1>{moveValue}</h1>
          </div>
        </div>
        <div className="AnimationWrapper">
          <div className="Animation"></div>
        </div>
      </div>
    </div>
  );
}

export default AnimationCard;
