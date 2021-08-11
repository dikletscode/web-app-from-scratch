import React, { useContext, useState } from "react";
import "./assets/profile.css";
import DataFetch from "./components/fetch";
import style from "./personal.style";
import { List } from "./assets/menu";

import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { useEffect } from "react";

const Personal = () => {
  const mainInfo = useSelector((state: RootState) => state.auth.image);
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  useEffect(() => {});

  return (
    <>
      <div style={style.info}>
        <div className="info-transac">
          {mainInfo == "" ? (
            <></>
          ) : (
            <img alt="" src={mainInfo} style={style.avatar} />
          )}

          <div>
            <p>kotak masuk</p>
            <p>Chat</p>
            <p>Ulasan</p>
            <p>Pesanan Dikomplain</p>
          </div>
        </div>
        <div style={style.infoPersonal}>
          <nav>
            <ul style={style.navBar}>
              <List />
            </ul>
          </nav>
          <DataFetch name={query.get("tab") || ""} />
        </div>
      </div>
    </>
  );
};
export default Personal;
