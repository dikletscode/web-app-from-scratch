import React, { ChangeEvent, FC } from "react";
import { styles } from "../style/form.style";

interface props {
  type: string;
  id: string;
  value: string;
  name: string;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input: FC<props> = (props) => {
  return (
    <div style={styles.label}>
      <label htmlFor={props.id}>{props.name}</label>
      <br />
      <input
        style={styles.inputValue}
        type={props.type}
        id={props.id}
        value={props.value}
        name={props.name}
        onChange={(e) => props.change(e)}
      />
    </div>
  );
};
