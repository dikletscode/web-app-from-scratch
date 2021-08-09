import React, { ChangeEvent } from "react";
import { FC } from "react";
import style from "./seller.style";

interface Props {
  inner: string;
  value: string;
  maxLength?: number;
  active?: boolean;
  type?: string;
  id: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<Props> = ({
  type,
  inner,
  maxLength,
  value,
  active,
  onChange,
  id,
}) => {
  return (
    <>
      <div style={style.input}>
        <label htmlFor="">{inner}</label>{" "}
        <input
          type={type}
          id={id}
          onChange={onChange}
          value={value}
          disabled={active}
          style={{ fontSize: "1.2em", width: "100%", borderRadius: "2%" }}
          maxLength={maxLength}
        />
      </div>
    </>
  );
};

export const InputSelect = () => {
  return (
    <>
      <div style={style.input}>
        <label>
          <br />
          <select>
            <option value="lele">KTP</option>
            <option value="mas">SIM</option>
            <option value="teri">Passport</option>
          </select>
        </label>
      </div>
    </>
  );
};
export default Input;
