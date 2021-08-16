import React, { MouseEvent } from "react";
import style from "./style";
import "./style.css";
import { IMAGE_PRODUCT_URL } from "../../../helper/staticImage";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Convert from "../myStore/product/convertCurrency";
import { getBuyyerProduct } from "../../../services/selling.service";
import { Product } from "../../../interface/seller";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setLoading } from "../../../reducer/auth";
import Loading from "../../loading/loading";
import cartService from "../../../services/cart.service";

const ProductGlobal = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const loading = useSelector((state: RootState) => state.auth.isLoading);
  let dispatch = useDispatch();
  const fetchProduct = async () => {
    try {
      dispatch(setLoading(true));
      let data = await getBuyyerProduct();
      setProduct(data);
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  };
  const productToCart = async (productId: string) => {
    try {
      await cartService.moveToCart(productId);
    } catch (error) {
      console.log(error);
    }
  };
  const sendProduct = (e: MouseEvent, productId: string) => {
    e.preventDefault();
    productToCart(productId);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div style={style.bigContainer}>
      {product.map((item: Product) => {
        return (
          <>
            {loading == true ? (
              <Loading />
            ) : (
              <div style={style.container}>
                <div className="container-inside">
                  <div style={style.content}>
                    <div style={style.box}>
                      <ul className="describe">
                        <li>
                          <Link data-tip="Detail" to="/">
                            <i className="fa fa-search"></i>
                          </Link>
                        </li>
                        <li>
                          <a
                            href=""
                            data-tip="lihat nanti"
                            style={{ display: "block" }}
                          >
                            <i className="fa fa-shopping-bag"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            onClick={(e: MouseEvent) => sendProduct(e, item.id)}
                            href=""
                            data-tip="Tambahkan ke Keranjang"
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </a>
                        </li>
                      </ul>
                      <span className="label-produk">Sale</span>
                      <span className="label-diskon">20%</span>

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
                            <i
                              className="fa fa-star"
                              style={{ color: "yellow" }}
                            ></i>
                            {item.star}
                          </p>
                        </div>
                        <div>
                          <p>{item.total} Sold</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
};

export default ProductGlobal;
