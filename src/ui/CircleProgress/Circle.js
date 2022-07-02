// import { keyframes } from 'styled-components';
const circleAnimate = (animationName, num) => `
  @keyframes ${animationName} {
    100% {
      stroke-dashoffset: ${num};
    }
  } 
`;

const addStylessheetRules = (rules) => {
  const styleEl = document.createElement("style");
  document.head.appendChild(styleEl);
  styleEl.sheet.insertRule(rules, 0);
};

const Circle = ({
  cx,
  cy,
  r,
  fill,
  strokeWidth,
  strokeLinecap,
  color,
  percentages,
}) => {
  if (!cx || !cy || !r || !percentages) {
    return "cx, cy, r, percentages params require to be not null!";
  }
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentages) * circ) / 100;

  const animationName = "circle";
  const style = {
    animationName: animationName,
    animationTimingFunction: "linear",
    animationDuration: "1s",
    animationDelay: ".2s",
    animationFillMode: "forwards",
  };

  addStylessheetRules(circleAnimate(animationName, strokePct));
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r}
      fill={fill ? fill : "none"}
      stroke={strokePct !== circ ? color : ""}
      strokeWidth={strokeWidth ? strokeWidth : "2.25rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentages ? strokePct : 0}
      strokeLinecap={strokeLinecap ? strokeLinecap : "round"}
      style={style}
    />
  );
};

export default Circle;
