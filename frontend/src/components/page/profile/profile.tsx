import React, { useContext, useState } from "react";
import "./assets/profile.css";
import DataFetch from "./components/fetch";
import style from "./assets/profile.style";
import { List } from "./assets/menu";

import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

const Personal = () => {
  const mainInfo = useSelector((state: RootState) => state.auth.userInfo);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  console.log(mainInfo, "asd");
  let query = useQuery();

  return (
    <>
      <div style={style.info}>
        <div className="info-transac">
          <img
            alt=""
            src={`http://localhost:2021/uploads/${mainInfo.image}`}
            style={{ height: "80px", borderRadius: "100px" }}
          />
          <p>{mainInfo.username}</p>
          <div>
            <p>kotak masuk</p>
            <p>Chat</p>
            <p>Ulasan</p>
            <p>Pesanan Dikomplain</p>
          </div>
        </div>
        <div style={style.infoPersonal}>
          <nav>
            <ul style={style.navBar}>{List}</ul>
          </nav>
          <DataFetch name={query.get("tab")} />
        </div>
      </div>
    </>
  );
};
export default Personal;
