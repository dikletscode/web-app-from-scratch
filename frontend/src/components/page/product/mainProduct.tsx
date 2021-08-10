import React from "react";
import style from "./style";
import { Product } from "../../../services/selling.service";
import { IMAGE_PRODUCT_URL } from "../../../helper/staticImage";
import { useEffect } from "react";
import { useState } from "react";
import Convert from "../myStore/product/convertCurrency";
import { getAllProduct } from "../../../services/selling.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { setLoading } from "../../../reducer/auth";
import Loading from "../../loading/loading";

const ProductGlobal = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const loading = useSelector((state: RootState) => state.auth.isLoading);
  let dispatch = useDispatch();
  const fetchProduct = async () => {
    try {
      dispatch(setLoading(true));
      let data = await getAllProduct();
      setProduct(data);
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
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
                <div style={style.content}>
                  <img
                    src={IMAGE_PRODUCT_URL + item.images}
                    alt=""
                    style={style.image}
                  />

                  <div style={style.desc}>
                    <p>{item.productName}</p>
                    <small>
                      <Convert number={`${item.price}`} />
                    </small>
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
            )}
          </>
        );
      })}
    </div>
  );
};

export default ProductGlobal;
