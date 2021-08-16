import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getStore } from "../../../services/selling.service";
import { StoreInfo } from "../../../interface/seller";
import Empty from "./productEmpty/empty";
import style from "./etalase.style";
import { List } from "./list/biodata";
import money from "./1.png";
import Modal from "./modal/modal";
import ProductCard from "./product/products";
import Loading from "../../loading/loading";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../reducer/auth";
import get from "../../../helper/localstorage";

const Etalase = () => {
  const [data, setData] = useState<StoreInfo[]>([]);
  const [modal, setModal] = useState(false);
  const [isFetching, setFeching] = useState(false);
  const dispatch = useDispatch();
  const getData = async () => {
    if (get.storeId != "") {
      try {
        let data: StoreInfo = await getStore(get.storeId);
        setData(() => [data]);
        setFeching(true);
      } catch (error) {
        setFeching(false);
      }
    }
  };
  useEffect(() => {
    getData();
    if (data[0] == null) {
      dispatch(setLoading(true));
    }
  }, []);

  const toogle = () => {
    modal == false ? setModal(true) : setModal(false);
  };

  if (isFetching == false) {
    return <div></div>;
  } else {
    return (
      <>
        {data[0] != null ? (
          data.map((item: StoreInfo) => {
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
                      <Empty />
                    </>
                  ) : (
                    <ProductCard product={item.etalase} />
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <Loading />
        )}
      </>
    );
  }
};
export default Etalase;
