import React, { ChangeEvent } from "react";
import style from "./modal.style";
import close from "./close.jpg";
import Input from "./input";
import { useState } from "react";
import axiosInstance from "../../../../config/axiosInstance";
import { FormEvent } from "react";

interface ModalTypes {
  isActive: boolean;
  closeModal: () => void;
  id: number;
}
interface product {
  nameProduct: "";
  price: "";
  total: "";
  images: Blob | null;
}

const Modal: React.FC<ModalTypes> = ({ isActive, closeModal, id }) => {
  const [data, setData] = useState<product>({
    nameProduct: "",
    price: "",
    total: "",
    images: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      let obj = { ...data, ["images"]: e.target.files[0] };
      setData(obj);
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("productName", data.nameProduct);
    formData.append("price", data.price);
    formData.append("total", data.total);
    formData.append("images", data.images || "");
    axiosInstance
      .post("/seller/add/" + id, formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then((res) => {
        closeModal();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div style={isActive == true ? style.container : style.hideContainer}>
      <div style={{ textAlign: "end" }}>
        <img
          src={close}
          alt=""
          onClick={closeModal}
          style={{ height: "50px" }}
        />
      </div>
      <form action="" onSubmit={submit}>
        <div style={style.input}>
          <Input
            type="text"
            placeholder="Name Product"
            value={data.nameProduct}
            id="nameProduct"
            change={handleChange}
          />
          <Input
            type="number"
            id="price"
            change={handleChange}
            placeholder="Price"
            value={data.price}
          />
          <Input
            type="number"
            id="total"
            change={handleChange}
            placeholder="total"
            value={data.total}
          />
          <Input type="file" change={handleImage} id="images" />
          <div>
            <Input type="submit" value="submit" id="submit" />
          </div>
        </div>
      </form>
    </div>
  );
};
export default Modal;
