import React from "react";
import style from "./modal.style";

const Modal = () => {
  return (
    <div style={style.container}>
      <form action="">
        <div>
          <input type="text" placeholder="Name Product" />
          <input type="number" placeholder="Price" />
          <input type="text" placeholder="Total" />
        </div>
      </form>
    </div>
  );
};
export default Modal;
