import React from "react";
import style from "./style";
import cartService from "../../../services/cart.service";
import { useEffect } from "react";
import Confirm from "./confirm";
import store from "./icon-store.png";
import { CartUser } from "../../../interface/cart";
import { useState } from "react";
import { IMAGE_PRODUCT_URL } from "../../../helper/staticImage";
import Convert from "../myStore/product/convertCurrency";
import { useRef } from "react";

const Cart = () => {
  const [cart, setCart] = useState<CartUser[]>([]);
  const [checked, setChecked] = useState<boolean[]>([]);
  const [count, setCount] = useState<number[]>([]);
  const [price, setPrice] = useState<number[]>([]);
  const [total, setTotal] = useState(0);

  const value = useRef<number>(0);
  const getCart = async () => {
    try {
      let data: CartUser[] | undefined = await cartService.getCart();
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
  const increment = (index: number, limit: number) => {
    const arrs = [...count];
    if (arrs[index] >= limit) {
      arrs[index] = arrs[index] + 0;
    } else {
      arrs[index] = arrs[index] + 1;
    }
    setCount(arrs);
  };

  const decrement = (index: number) => {
    const arrs = [...count];
    if (arrs[index] > 0) {
      arrs[index] = arrs[index] - 1;
    } else {
      arrs[index] = arrs[index] - 0;
    }
    setCount(arrs);
  };

  useEffect(() => {
    setChecked([...new Array(cart.length).fill(true)]);
    getCart();
    setCount(new Array(cart.length).fill(1));
    cart.forEach((item, index) => {
      setPrice((prev) => [...prev, parseInt(item.product.price)]);
    });
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
                    <div style={style.oneProduct}>
                      <div style={{ width: "110px" }}>
                        <img
                          src={IMAGE_PRODUCT_URL + item.product.images}
                          alt=""
                          style={style.images}
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
                            onClick={() =>
                              increment(cart.indexOf(item), item.product.total)
                            }
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
                            style={style.check}
                            id={item.productId}
                            defaultChecked={true}
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
      <Confirm cart={cart} count={count} checked={checked} price={price} />
    </div>
  );
};
export default Cart;
