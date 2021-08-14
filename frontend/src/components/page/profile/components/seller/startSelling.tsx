import React, { ChangeEvent, FormEvent, useState } from "react";
import { SellerRegis, sellerInit } from "../../../../../interface/seller";
import { register } from "../../../../../services/selling.service";
import style from "../../assets/selling.style";
import styles from "./seller.style";
import "./animation.css";
import Input, { InputSelect } from "./input";
import { ProfileTypes } from "../../../../../interface/profile";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setRole } from "../../../../../reducer/auth";

const isNull = (obj: object): boolean => {
  for (let [_key, value] of Object.entries(obj)) {
    if (value == null || value == "") {
      return false;
    }
  }
  return true;
};

const StartSelling = ({ profile }: { profile: ProfileTypes[] }) => {
  let dispatch = useDispatch();
  const [data, setData] = useState<SellerRegis>(sellerInit);
  const history = useHistory();
  const postData = async () => {
    try {
      let result = await register(data, profile[0].id);
      localStorage.setItem("_id", JSON.stringify(result));
      dispatch(setRole(true));
      history.push("/mystore");
    } catch (error) {
      console.log(error, "1");
    }
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData();
  };

  return (
    <>
      {isNull(profile[0]) ? (
        <div style={style.container}>
          <p style={{ fontSize: "1.3em" }}>Form Seller Registration</p>
          <form style={style.form} onSubmit={handleSubmit}>
            <div style={style.city}>
              <InputSelect />
              <Input
                id="noKtp"
                value={data.noKtp}
                inner="Identity Number"
                type="number"
                onChange={handleChange}
              />
              <Input
                id="nameStore"
                value={data.nameStore}
                inner="Name Store"
                onChange={handleChange}
              />
            </div>
            <Input
              id="address"
              inner="Store Address"
              value={data.address}
              onChange={handleChange}
            />
            <div style={style.city}>
              <Input
                id="city"
                inner="city"
                value={data.city}
                onChange={handleChange}
              />
              <Input
                id="province"
                inner="province"
                value={data.province}
                onChange={handleChange}
              />
            </div>

            <div style={{ textAlign: "center" }}>
              <br />
              <input
                type="submit"
                value="submit"
                style={{ backgroundColor: "white", fontSize: "1em" }}
              />
            </div>
          </form>
        </div>
      ) : (
        <div style={styles.modal}>
          <div>
            <p>please complete your information</p>
          </div>
        </div>
      )}
    </>
  );
};
export default StartSelling;
