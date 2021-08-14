import React, { FC, useState, ChangeEvent, FormEvent } from "react";
import { updateProfile } from "../../../../../services/profile.service";

import "../../assets/profile.css";
import { HandleImage, Row } from "./input";
import { ProfileTypes, UserTypes } from "../../../../../interface/profile";
import style from "./profile.style";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import Loading from "../../../../loading/loading";
import { setAvatar } from "../../../../../reducer/auth";

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

export const Profile: FC<{ userInfo: UserTypes }> = ({ userInfo }) => {
  const dispatch = useDispatch();
  const state = useSelector((target: RootState) => target.auth);
  const [isEditing, setEdit] = useState<Toogle>(ToogleInit);
  const [data, setData] = useState([userInfo.profile]);
  const [img, setImg] = useState<Blob>(new Blob());
  const [imgPreview, setImgPreview] = useState<string>(state.image);

  const updateData = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const update = async () => {
      try {
        await updateProfile(data[0].id, data);
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
        [e.target.id]: e.target.value,
      },
    ];
    setData(dataOnChange);
  };
  const imageOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const dataOnChange: Blob = e.target.files[0];
      let preview = URL.createObjectURL(e.target.files[0]);
      dispatch(setAvatar(preview));
      setImgPreview(preview);
      setImg(dataOnChange);
    }
  };
  const klik = (name: string) => {
    setEdit({ ...isEditing, [name]: true });
  };

  return (
    <>
      {state.isLoading == true ? (
        <Loading />
      ) : (
        <>
          {data.map((info: ProfileTypes) => {
            return (
              <>
                <div style={style.infoData} key={info.id}>
                  <div className="mydata">
                    <h3> change your information</h3>
                    <table>
                      <tbody>
                        <Row
                          id="fullname"
                          value={data[0].fullname}
                          change={handleChange}
                          submit={updateData}
                          type="text"
                          fieldValue={info.fullname}
                          editToogle={() => klik("fullname")}
                          isEditing={isEditing.fullname}
                          fieldTitle="Fullname"
                        />
                        <Row
                          id="address"
                          value={data[0].address}
                          change={handleChange}
                          submit={updateData}
                          type="text"
                          fieldValue={info.address}
                          editToogle={() => klik("address")}
                          isEditing={isEditing.address}
                          fieldTitle="Address"
                        />
                        <Row
                          id="noTelp"
                          value={data[0].noTelp}
                          change={handleChange}
                          submit={updateData}
                          type="number"
                          fieldValue={info.noTelp}
                          editToogle={() => klik("noTelp")}
                          isEditing={isEditing.noTelp}
                          fieldTitle="Phone Number"
                        />
                      </tbody>
                    </table>
                  </div>
                  <div style={style.content}>
                    <label style={style.upload}>
                      <img src={imgPreview} style={style.avatar} />
                      <HandleImage
                        change={imageOnChange}
                        profileId={info.id}
                        data={img}
                      />
                    </label>
                  </div>
                </div>
              </>
            );
          })}
        </>
      )}
    </>
  );
};
