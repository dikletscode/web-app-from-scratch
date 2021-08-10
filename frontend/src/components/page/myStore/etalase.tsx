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
import Modal from "./modal/modal";
import { IMAGE_PRODUCT_URL } from "../../../helper/staticImage";
import ProductCard from "./product/products";

const Etalase = () => {
  const [data, setData] = useState<StoreInfo[]>([]);
  const [modal, setModal] = useState(false);
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

  const toogle = () => {
    modal == false ? setModal(true) : setModal(false);
  };
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
                    <List key={"refund"} inner="Refund" />
                    <List key={"balance"} inner="Sales Balance" />
                  </ul>
                  <List key={"inbox"} inner="Inbox" />
                  <ul>
                    <List key={"read"} inner="read" />
                    <List key={"spam"} inner="spam" />
                  </ul>
                  <ul></ul>
                </ul>
              </div>
              <div style={style.content}>
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
                    <button onClick={() => toogle()}>add Product</button>
                  </div>
                  <div>
                    <button>add Product</button>
                  </div>
                </div>
                <Modal
                  isActive={modal}
                  closeModal={() => setModal(false)}
                  id={item.id}
                />
                {item.etalase.length == 0 ? (
                  <>
                    {console.log(item, "a")}

                    <Empty />
                  </>
                ) : (
                  <ProductCard product={item.etalase} />
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
