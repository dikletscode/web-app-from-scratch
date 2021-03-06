import React from "react";
import style from "./product.style";
import { IMAGE_PRODUCT_URL } from "../../../../helper/staticImage";
import { useEffect } from "react";
import { useState } from "react";
import Convert from "./convertCurrency";
import { ProductSeller } from "../../../../interface/seller";

interface ArrProduct {
  product: ProductSeller[];
}

const ProductCard: React.FC<ArrProduct> = ({ product }) => {
  return (
    <div style={style.bigContainer}>
      {product.map((item: ProductSeller) => {
        return (
          <div style={style.container} key={item.images}>
            <div style={style.content}>
              <img
                src={IMAGE_PRODUCT_URL + item.images}
                alt=""
                style={style.image}
              />

              <div style={style.desc}>
                <p>{item.productName}</p>
                <small>{Convert(item.price.toString())}</small>
              </div>
              <div style={style.footer}>
                <div>
                  <p>
                    <i className="fa fa-star" style={{ color: "yellow" }}></i>
                    {item.star}
                  </p>
                </div>
                <div>
                  <p>{item.total} Sold</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
