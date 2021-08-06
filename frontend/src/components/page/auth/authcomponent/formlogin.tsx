import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Input } from "./microComponent/input";
import { styles } from "./style/form.style";
import { AdditionalLogin } from "./microComponent/additional";
import { Redirect } from "react-router-dom";
import auth from "../../../../services/auth.service";

export interface Login {
  usernameOrEmail: string;
  password: string;
}

const Form = () => {
  const [isLogin, setLogin] = useState(false);
  const [msg, setMsg] = useState("");
  const [data, setData] = useState<Login>({
    usernameOrEmail: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dataOnChange: Login = { ...data, [e.target.id]: e.target.value };
    setData(dataOnChange);
  };

  const loginSubmit = async () => {
    try {
      let datas: Login = await auth.login(data);
      setLogin(true);

      // localStorage.setItem("data", JSON.stringify(datas));
    } catch (error) {
      setMsg(error.response.data.error);
      setLogin(false);
    }
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginSubmit();
  };

  return (
    <>
      {isLogin == true ? (
        <Redirect to="/" />
      ) : (
        <div style={styles.container}>
          <form onSubmit={submit}>
            <div style={styles.input}>
              <p>Login</p>
              <Input
                name="username/email : "
                type="text"
                id="usernameOrEmail"
                value={data.usernameOrEmail}
                change={(e) => handleChange(e)}
              />
              <Input
                name="password : "
                type="password"
                id="password"
                value={data.password}
                change={(e) => handleChange(e)}
              />

              <AdditionalLogin />
              <p style={{ textAlign: "center" }}> {msg}</p>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default Form;
