const Color = ({ className }) => {
  return (
    <defs>
      <linearGradient id="GradientColor">
        <stop offset="0%" stopColor="#e91e63" />
        <stop offset="100%" stopColor="#673ab7" />
      </linearGradient>
    </defs>
  );
};

export default Color;
