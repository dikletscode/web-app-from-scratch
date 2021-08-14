import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { Input } from "./microComponent/input";
import { styles } from "./style/form.style";
import { AdditionalLogin } from "./microComponent/additional";
import { Redirect, useHistory } from "react-router-dom";
import auth from "../../../../services/auth.service";
import { useDispatch, useSelector } from "react-redux";
import { setLogin, setLoading } from "../../../../reducer/auth";
import { RootState } from "../../../../store";
import { LoginTypes } from "../../../../services/auth.service";

const Form = () => {
  const history = useHistory();
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
  dispatch(setLoading);
  const loginSubmit = async () => {
    try {
      await auth.login(data);
      dispatch(setLogin(true));
      history.push("/");
      // window.location.reload();
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
      <div style={styles.container}>
        <form onSubmit={submit}>
          <div style={styles.input}>
            <p>Login</p>
            <Input
              name="username/email : "
              type="text"
              id="usernameOrEmail"
              value={data.usernameOrEmail}
              change={handleChange}
            />
            <Input
              name="password : "
              type="password"
              id="password"
              value={data.password}
              change={handleChange}
            />

            <AdditionalLogin />
            <p style={{ textAlign: "center" }}> {msg}</p>
          </div>
        </form>
      </div>
    </>
  );
};
export default Form;
