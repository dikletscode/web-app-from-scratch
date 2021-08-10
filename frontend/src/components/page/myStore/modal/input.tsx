import React, { ChangeEvent } from "react";

interface Props {
  type: string;
  placeholder?: string;
  value?: string;
  change?: (e: ChangeEvent<HTMLInputElement>) => void;
  id: string;
}

const Input: React.FC<Props> = ({ type, placeholder, value, change, id }) => {
  return (
    <>
      <label htmlFor="">{placeholder}</label>
      <input
        type={type}
        placeholder={placeholder}
        style={{ padding: "15px" }}
        value={value}
        id={id}
        onChange={change}
      />
    </>
  );
};

export default Input;
