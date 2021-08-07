import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Input } from "./microComponent/input";
import { styles } from "./style/form.style";
import { AdditionalLogin } from "./microComponent/additional";
import { Redirect } from "react-router-dom";
import auth from "../../../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../../../reducer/auth";
import { RootState } from "../../../../store";
import { LoginTypes } from "../../../../services/auth.service";

const Form = () => {
  const loginStatus = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const [data, setData] = useState<LoginTypes>({
    usernameOrEmail: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dataOnChange: LoginTypes = { ...data, [e.target.id]: e.target.value };
    setData(dataOnChange);
  };

  const loginSubmit = async () => {
    try {
      await auth.login(data);
      dispatch(setLogin(true));
    } catch (error) {
      setMsg(error.response.data.error);
      dispatch(setLogin(false));
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginSubmit();
  };

  return (
    <>
      {loginStatus == true ? (
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
