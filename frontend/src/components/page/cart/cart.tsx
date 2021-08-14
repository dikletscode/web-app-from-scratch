import React from "react";
import style from "./style";
import cartService from "../../../services/cart.service";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import store from "./icon-store.png";
import { CartUser } from "../../../interface/cart";
import { useState } from "react";
import { IMAGE_PRODUCT_URL } from "../../../helper/staticImage";
import Convert from "../myStore/product/convertCurrency";

const Cart = () => {
  const [cart, setCart] = useState<CartUser[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [count, setCount] = useState<number[]>([]);
  const getCart = async () => {
    try {
      let data: CartUser[] | undefined = await cartService.getCart();
      console.log(data, "daua");
      if (data != undefined) setCart(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (index: number) => {
    const arr = [...checked];
    arr[index] == true ? (arr[index] = false) : (arr[index] = true);
    setChecked(arr);
  };
  const increment = (index: number) => {
    const arrs = [...count];
    arrs[index] = arrs[index] + 1;
    setCount(arrs);
  };
  const decrement = (index: number) => {
    const arrs = [...count];
    arrs[index] = arrs[index] - 1;
    setCount(arrs);
  };
  useEffect(() => {
    getCart();

    setChecked(new Array(cart.length).fill(false));
    setCount(new Array(cart.length).fill(0));
  }, [cart.length]);

  return (
    <div style={style.container}>
      <div style={style.cart}>
        <div style={style.list}>
          <div
            style={{
              backgroundColor: "white",
              height: "100%",
            }}
          >
            {cart.map((item: CartUser) => {
              return (
                <div style={style.product}>
                  <div style={{ display: "flex", backgroundColor: "#feeafa" }}>
                    <img
                      src={store}
                      alt=""
                      style={{
                        height: "50px",
                        width: "50px",
                      }}
                    />
                    <p>{item.product.storeAddress.nameStore} Store</p>
                  </div>
                  <>
                    <div
                      style={{
                        padding: "2px",
                        display: "flex",
                        width: "90%",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div style={{ width: "110px" }}>
                        <img
                          src={IMAGE_PRODUCT_URL + item.product.images}
                          alt=""
                          style={{
                            height: "110px",
                            width: "100px",
                            borderRadius: "5%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <div style={{ width: "200px", padding: "20px" }}>
                        <p>{item.product.productName} </p>
                      </div>

                      <div style={{ width: "50%" }}>
                        <p>Highest Quality,100% SATISFACTION</p>
                        <small>1 Year Guarantee</small>
                      </div>
                      <div
                        style={{
                          width: "40%",
                          textAlign: "center",
                        }}
                      >
                        <p>total</p>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                          }}
                        >
                          <i
                            className="fa fa-chevron-up"
                            onClick={() => increment(cart.indexOf(item))}
                          ></i>
                          <p>{count[cart.indexOf(item)]}</p>
                          <i
                            className="fa fa-chevron-down"
                            onClick={() => decrement(cart.indexOf(item))}
                          ></i>
                        </div>
                      </div>
                      <div style={{ width: "40%", textAlign: "center" }}>
                        <label className="container">
                          <input
                            type="checkbox"
                            id={item.productId}
                            onChange={() => handleChange(cart.indexOf(item))}
                          />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </div>
                  </>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div style={style.confirm}>
        <div>
          <p>Konfirmmasi Pembayaran</p>
          <p>total Pembayaran :</p>
          {cart.map((item) => {
            if (checked[cart.indexOf(item)] == true) {
              return (
                <p>
                  {" "}
                  {item.product.productName}:{" "}
                  {parseInt(item.product.price) * count[cart.indexOf(item)]}
                </p>
              );
            }
          })}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignContent: "flex-end",
          }}
        >
          <p>Paymen Method : </p>
          <select
            name=""
            id=""
            style={{ border: "none", backgroundColor: "white", height: "30px" }}
          >
            <option value="Alfamart">Alfamart</option>
            <option value="Alfamart">Indomaret</option>
            <option value="Alfamart">M-Banking</option>
            <option value="Alfamart">Gopay</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default Cart;
