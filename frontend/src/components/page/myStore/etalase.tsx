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
import Nav from "../../navigation/navigation";

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
            <div style={{ display: "flex" }} key={item.id}>
              <div style={style.left}>
                <ul style={style.list}>
                  <List
                    keyProps="name-store"
                    inner={item.nameStore + "'store"}
                  />
                  <ul>
                    <img
                      src={money}
                      style={{ height: "22px", paddingTop: "9px" }}
                      alt=""
                    />
                    <List keyProps="saldo" inner="Saldo" />
                  </ul>

                  <ul>
                    <List keyProps="refund" inner="Refund" />
                    <List keyProps="balance" inner="Sales Balance" />
                  </ul>
                  <List keyProps="inbox" inner="Inbox" />
                  <ul>
                    <List keyProps="read" inner="read" />
                    <List keyProps="spam" inner="spam" />
                  </ul>
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
