import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { updateProfile } from "../../../../services/profile.service";

import foto from "../assets/1.png";
import "../assets/profile.css";
import { HandleImage, Row } from "./input";
import { ProfileTypes } from "../../../../services/profile.service";
import style from "../assets/profile.style";

interface Toogle {
  fullname: boolean;
  address: boolean;
  noTelp: boolean;
}
const ToogleInit: Toogle = {
  fullname: false,
  address: false,
  noTelp: false,
};

export const Profile = (props: { profile: ProfileTypes[] }) => {
  const [isEditing, setEdit] = useState<Toogle>(ToogleInit);
  const [data, setData] = useState(props.profile);
  const [img, setImg] = useState(props.profile);
  const updateData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const update = async () => {
      try {
        await updateProfile(data[0].profile.id, data);
        setEdit(ToogleInit);
      } catch (error) {
        console.log(error);
      }
    };
    update();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dataOnChange: ProfileTypes[] = [
      {
        ...data[0],
        ["profile"]: { ...data[0].profile, [e.target.id]: e.target.value },
      },
    ];
    setData(dataOnChange);
  };
  const imageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const dataOnChange: ProfileTypes[] = [
        {
          ...data[0],
          ["profile"]: { ...data[0].profile, ["images"]: e.target.files[0] },
        },
      ];
      setImg(dataOnChange);
    }
  };
  const klik = (name: string) => {
    setEdit({ ...isEditing, [name]: true });
  };
  console.log(img);

  return (
    <>
      {data.map((info: any) => {
        return (
          <div style={style.infoData} key={info.username}>
            <div style={style.content}>
              <label style={style.upload}>
                <img
                  src={`http://localhost:2021/uploads/${info.profile.images}`}
                  style={style.avatar}
                />
                <HandleImage
                  change={imageOnChange}
                  profileId={info.profile.id}
                  data={img[0].profile.images}
                />
              </label>
            </div>
            <div className="mydata">
              <h3> change your information</h3>
              <table>
                <tbody>
                  <tr>
                    <td>Username </td>
                    <td>: {info.username}</td>
                  </tr>
                  <Row
                    id="fullname"
                    value={data[0].profile.fullname}
                    change={handleChange}
                    submit={updateData}
                    type="text"
                    fieldValue={info.profile.fullname}
                    editToogle={() => klik("fullname")}
                    isEditing={isEditing.fullname}
                    fieldTitle="Fullname"
                  />
                  <Row
                    id="address"
                    value={data[0].profile.address}
                    change={handleChange}
                    submit={updateData}
                    type="text"
                    fieldValue={info.profile.address}
                    editToogle={() => klik("address")}
                    isEditing={isEditing.address}
                    fieldTitle="Address"
                  />
                  <Row
                    id="noTelp"
                    value={data[0].profile.noTelp}
                    change={handleChange}
                    submit={updateData}
                    type="number"
                    fieldValue={info.profile.noTelp}
                    editToogle={() => klik("noTelp")}
                    isEditing={isEditing.noTelp}
                    fieldTitle="No Telephone"
                  />

                  <tr>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );
      })}
    </>
  );
};
