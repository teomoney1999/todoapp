import { useState } from "react";
import Card from "../ui/Card";
import Checkbox from "../ui/Checkbox";

const Task = (props) => {
  return <Card img={<Checkbox />} isAction={true} {...props} />;
};

export default Task;
