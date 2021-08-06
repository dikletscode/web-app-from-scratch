import React from "react";
import Logo from "../../assets/images.jpeg";
import { style } from "./auth.style";
import { Form } from "./authcomponent/formsignup";

export const Signup = () => {
  return (
    <main style={style.main}>
      <div className="descr">
        <p>
          Butuh barang secepatnya dengan harga semurah murahnya?belanja dengan
          Hello aja
        </p>
        <img src={Logo} alt="" style={style.icon} />
      </div>
      <Form />
    </main>
  );
};
