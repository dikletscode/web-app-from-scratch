import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getStore, StoreInfo } from "../../../services/selling.service";
import { getStoreId } from "../../../helper/localstorage";
import images from "./productEmpty/images.jpeg";
import Empty from "./productEmpty/empty";
import style from "./etalase.style";
import { List } from "./list/biodata";
import money from "./1.png";

const Etalase = () => {
  let [data, setData] = useState<StoreInfo[]>([]);
  let [isFetching, setFeching] = useState(true);
  const getData = async () => {
    if (getStoreId() != "") {
      try {
        let data: StoreInfo = await getStore(getStoreId());
        setData(() => [data]);
        setFeching(true);
      } catch (error) {
        console.log(error);
        setFeching(false);
      }
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data, "data");
  if (isFetching == false) {
    return <div></div>;
  } else {
    return (
      <>
        {data.map((item: StoreInfo) => {
          return (
            <div style={{ display: "flex" }}>
              <div style={style.left}>
                <ul style={style.list}>
                  <List key={"name-store"} inner={item.nameStore + "'store"} />
                  <li style={{ display: "flex" }}>
                    <img
                      src={money}
                      style={{ height: "22px", paddingTop: "9px" }}
                      alt=""
                    />
                    <List key={"saldo"} inner="Saldo" />
                  </li>

                  <ul>
                    <List key={"saldo"} inner="Refund" />
                    <List key={"saldo"} inner="Sales Balance" />
                  </ul>
                  <List key={"inbox"} inner="Inbox" />
                  <ul>
                    <List key={"read"} inner="read" />
                    <List key={"spam"} inner="spam" />
                  </ul>
                  <ul></ul>
                </ul>
              </div>
              <div
                style={{
                  display: "flex",
                  backgroundColor: "#fdfffc",
                  width: "80vw",
                  flexDirection: "column",
                }}
              >
                <div style={style.nav}>
                  <div style={{ borderBottom: "3px solid red" }}>
                    last added
                  </div>
                  <div style={{ borderBottom: "3px solid red" }}>
                    top product
                  </div>
                  <div style={{ borderBottom: "3px solid red" }}>
                    Complained product
                  </div>
                  <div>
                    <button>add Product</button>
                  </div>
                  <div>
                    <button>add Product</button>
                  </div>
                </div>
                {item.etalase.length == 0 ? (
                  <Empty />
                ) : (
                  <div style={style.box}>
                    <div style={style.product}>1</div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </>
    );
  }
};
export default Etalase;
