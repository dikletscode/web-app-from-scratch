import React, { ChangeEvent, FormEvent } from "react";
import { FC } from "react";
import {
  ProfileTypes,
  updateImages,
  updateProfile,
} from "../../../../../services/profile.service";

interface Props {
  id: string;
  value?: string;
  type?: string;
  isEditing?: boolean;
  fieldValue: string;
  fieldTitle: string;
  change?: (e: ChangeEvent<HTMLInputElement>) => void;
  submit?: (e: FormEvent<HTMLFormElement>) => void;
  editToogle?: () => void;
}

export const Row: FC<Props> = ({
  id,
  type,
  submit,
  change,
  value,
  isEditing,
  editToogle,
  fieldValue,
  fieldTitle,
}) => {
  return (
    <tr>
      <td> {fieldTitle} </td>
      {isEditing ? (
        <td>
          <div>
            <form action="" onSubmit={submit}>
              <div style={{ display: "flex" }}>
                <input
                  type={type}
                  id={id}
                  onChange={change}
                  value={value}
                  style={{ width: "300px" }}
                />
                <input type="submit" value="submit" />
              </div>
            </form>
          </div>
        </td>
      ) : (
        <td style={{ width: "330px" }}>: {fieldValue}</td>
      )}
      <td>
        <button onClick={editToogle}>edit</button>
      </td>
    </tr>
  );
};

interface Image {
  change: (e: ChangeEvent<HTMLInputElement>) => void;
  data: Blob;
  profileId: number;
}

export const HandleImage: FC<Image> = ({ change, profileId, data }) => {
  const formData = new FormData();

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uploadImage = async () => {
      try {
        formData.append("images", data);
        let datas = await updateImages(profileId, formData);
        console.log(datas, "As");
      } catch (error) {
        console.log(error);
      }
    };
    uploadImage();
  };
  console.log(data, "blob");

  return (
    <form action="" onSubmit={submit}>
      <input
        name="images"
        type="file"
        id="images"
        onChange={change}
        style={{ display: "none" }}
        accept="image/"
      />
      <br />
      <button type="submit">Choose Photo</button>
    </form>
  );
};
