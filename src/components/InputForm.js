import { useRef, useState } from "react";
import Input from "../ui/Input";

const InputForm = ({ className }) => {
  const taskNameRef = useRef("");
  const [input, setInput] = useState("");

  const submitHandle = (event) => {
    console.log("event", event);
    if (event.key === "Enter") {
      console.log("Enter");
      // setInput(event.target.value);
      setInput("");
      return;
    }
    if (event.key === "Escape") {
      setInput("");
      return;
    }
  };

  const onChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Input
      id="input-form"
      ref={taskNameRef}
      placeholder={"Press Enter to add a goal"}
      onChange={onChange}
      onKeyDown={submitHandle}
      value={input}
    />
  );
};

export default InputForm;
