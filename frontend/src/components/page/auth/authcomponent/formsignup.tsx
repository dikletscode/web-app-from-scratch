import React, { useState, useContext, ChangeEvent, FormEvent } from "react";
import { Input } from "./microComponent/input";
import { styles } from "./style/form.style";
import { AdditionalSignup } from "./microComponent/additional";
import authServices from "../../../../services/auth.service";
import { SignUpTypes } from "../../../../services/auth.service";

export const Form = () => {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState<SignUpTypes>({
    username: "",
    email: "",
    password: "",
  });
  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await authServices.signup(data);
      setMsg("account successfully registered, please login");
      setData({ ...data, email: "", password: "", username: "" });
    } catch (error) {
      setMsg(error.response.data.error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dataOnChange: SignUpTypes = {
      ...data,
      [e.target.id]: e.target.value,
    };
    setData(dataOnChange);
  };

  return (
    <>
      <div style={styles.container}>
        <form onSubmit={submit}>
          <div style={styles.input}>
            <p>SIGN UP</p>
            <Input
              name="username : "
              type="text"
              id="username"
              value={data.username}
              change={(e) => handleChange(e)}
            />
            <Input
              name="email : "
              type="email"
              id="email"
              value={data.email}
              change={(e) => handleChange(e)}
            />
            <Input
              name="password : "
              type="password"
              id="password"
              value={data.password}
              change={(e) => handleChange(e)}
            />
            <AdditionalSignup />
            <p style={{ textAlign: "center" }}>{msg}</p>
          </div>
        </form>
      </div>
    </>
  );
};
