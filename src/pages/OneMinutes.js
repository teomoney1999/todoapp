import ProgressCircle from "../ui/CircleProgress/Progress";
import Card from "../ui/Card";
import Box from "../ui/Box";
import Noti from "../ui/Noti";
import InputFrom from "../components/InputForm";

const OneMinutes = ({ className }) => {
  return (
    <Box className="one-minutes">
      <h1>1'</h1>
      <InputFrom />
      <p>Your daily progress will be shown here</p>
      
      {/* Progress Circle */}
      <ProgressCircle percentages={75}/>
      <Card />
      <Card />

      <Noti />

      {/* Tasks */}
    </Box>
  );
};

export default OneMinutes;
