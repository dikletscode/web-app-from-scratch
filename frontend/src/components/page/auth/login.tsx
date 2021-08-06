import React from "react";
import Logo from "../../assets/images.jpeg";
import { style } from "./auth.style";
import Form from "./authcomponent/formlogin";

const Login = (): JSX.Element => {
  return (
    <main style={style.main}>
      <>
        <div className="descr">
          <p>
            Butuh barang secepatnya dengan harga semurah murahnya?belanja dengan
            Hellio aja..
          </p>
          <img alt="" src={Logo} style={style.icon} />
        </div>
        <Form />
      </>
    </main>
  );
};
export default Login;
