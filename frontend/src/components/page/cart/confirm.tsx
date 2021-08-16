import React from "react";
import { CartUser } from "../../../interface/cart";
import style from "./style";
import Convert from "../myStore/product/convertCurrency";
import { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
const calculate = (arr: number[], arr2: number[]) => {
  let a = 0;
  arr.map((item, index) => {
    a += item * arr2[index];
  });
  return a;
};

const Confirm = ({
  cart,
  count,
  checked,
  price,
}: {
  cart: CartUser[];
  count: number[];
  checked: boolean[];
  price: number[];
}) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (count.length != 0 && price.length != 0) {
      setTotal(calculate(count, price));
    }
  }, [count, price]);
  return (
    <div style={style.confirm}>
      <p>Konfirmmasi Pembayaran</p>
      {cart.map((item) => {
        if (checked[cart.indexOf(item)] == true) {
          return (
            <div>
              <p
                onChange={() => {
                  console.log("chane");
                }}
              >
                {item.product.productName} :Rp.
                {Convert(
                  (
                    parseInt(item.product.price) * count[cart.indexOf(item)]
                  ).toString()
                )}
              </p>
            </div>
          );
        } else {
          return (
            <div>
              <p> </p>
            </div>
          );
        }
      })}
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
      <p>total pembayaran : Rp.{Convert(total.toString())}</p>
      <button>Buy</button>
    </div>
  );
};

export default Confirm;
