// import { useState } from "react";
import Circle from "./Circle";
import Color from "./Color";

const config = {
  width: "15rem",
  height: "15rem",
  cx: "65",
  cy: "65",
  r: "52",
  color: 'url("#GradientColor")',
  strokeWidth: "2.5rem",
};

const Progress = ({ percentages }) => {
  const { width, height, cx, cy, r, color, strokeWidth } = config;

  return (
    <div className="pc">
      <div className="pc__outer">
        <div className="pc__inner">
          <div className="pc__number">{`${
            percentages ? percentages : 0
          }%`}</div>
        </div>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="svg"
        version="1.1"
        width={width}
        height={height}
      >
        <Color />
        <Circle
          cx={cx}
          cy={cy}
          r={r}
          color={color}
          strokeWidth={strokeWidth}
          percentages={percentages ? percentages : 0}
        />
      </svg>
    </div>
  );
};

export default Progress;
