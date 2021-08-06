import React from "react";
import { styles } from "../style/form.style";
import { Link } from "react-router-dom";

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
        <input type="submit" style={styles.button} value="submit" />
      </div>
    </>
  );
};

export const AdditionalSignup = () => {
  return (
    <>
      <Aggreement />
      <div style={{ textAlign: "center" }}>
        <p>
          have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </>
  );
};
export const AdditionalLogin = () => {
  return (
    <>
      <Aggreement />
      <div style={{ textAlign: "center" }}>
        <p>
          dont have an account? <Link to="/signup">signup</Link>
        </p>
      </div>
    </>
  );
};
