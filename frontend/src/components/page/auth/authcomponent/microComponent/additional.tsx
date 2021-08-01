import React from "react";
import { styles } from "../style/form.style";

const Aggreement = () => {
  return (
    <>
      <div>
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
        <label htmlFor="vehicle1" style={{ fontSize: "20px" }}>
          I agree to the terms
        </label>
        <br />
      </div>
      <div style={{ textAlign: "center" }}>
        <input type="submit" style={styles.button} />
      </div>
    </>
  );
};

export const AdditionalSignup = () => {
  return (
    <>
      <Aggreement />
      <div style={{ textAlign: "center" }}>
        <p>have an account?</p>
      </div>
    </>
  );
};
export const AdditionalLogin = () => {
  return (
    <>
      <Aggreement />
      <div style={{ textAlign: "center" }}>
        <p>dont have an account?</p>
      </div>
    </>
  );
};
