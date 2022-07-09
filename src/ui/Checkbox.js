import { AiOutlineCheckCircle } from "react-icons/ai";
import { BsCircle, BsDashCircle } from "react-icons/bs";

const Checkbox = ({ className, isClicked = false, isChecked = false }) => {
  return !isClicked ? (
    <BsCircle className="color-pending" />
  ) : !isChecked ? (
    <BsDashCircle className="color-delete" />
  ) : (
    <AiOutlineCheckCircle className="color-success" />
  );
};

export default Checkbox;
