import ProgressCircle from "../ui/CircleProgress/Progress";

import Box from "../ui/Box";
import Noti from "../components/Noti";
import Modal from "../ui/Modal";
import InputFrom from "../components/InputForm";
import Task from "../components/Task";
import Tasks from "../components/Tasks";

const OneMinutes = ({ className }) => {
  return (
    <Box className="one">
      <h1 className="one__title">1'</h1>

      <InputFrom className="one__input" />

      <p className="one__content">Your daily progress will be shown here</p>

      <ProgressCircle className="one__pc" percentages={25} />

      <Tasks />

      <Noti />
    </Box>
  );
};

export default OneMinutes;
