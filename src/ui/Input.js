import { forwardRef } from "react";

const Input = forwardRef(
  ({ className, id, type, placeholder, value, onChange, onKeyDown }, ref) => {
    return (
      <input
        id={id}
        className={`${className} input`}
        type={type ? type : "text"}
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    );
  }
);

export default Input;
