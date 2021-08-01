import React, { ChangeEvent, useState } from "react";
import { Input } from "./microComponent/input";
import { styles } from "./style/form.style";
import { AdditionalLogin } from "./microComponent/additional";
import { Redirect } from "react-router-dom";

export interface Login {
  email: string;
  password: string;
}

const Form = () => {
  const [isLogin, setLogin] = useState(false);
  const [data, setData] = useState<Login>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dataOnChange: Login = { ...data, [e.target.id]: e.target.value };
    setData(dataOnChange);
  };

  return (
    <>
      {isLogin == true ? (
        <Redirect to="/" />
      ) : (
        <div style={styles.container}>
          <form>
            <div style={styles.input}>
              <p>Login</p>
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
              <AdditionalLogin />
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default Form;
