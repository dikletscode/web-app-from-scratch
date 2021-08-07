import React, { useEffect, useState, useContext, EffectCallback } from "react";
import { Profile } from "./profile";
import { getProfile } from "../../../../services/profile.service";
import { ProfileTypes, ProfileDb } from "../../../../services/profile.service";
import { useDispatch } from "react-redux";
import { setData, User } from "../../../../reducer/auth";

localStorage.getItem("userId");

const DataFetch = ({ name }: any) => {
  const [profile, setProfile] = useState<ProfileTypes[]>([]);
  const [mainInfo, setMainInfo] = useState<User[]>([
    {
      image: "",
      username: "",
    },
  ]);
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      let data = await getProfile();
      let arr: ProfileTypes = data.result;
      let arr2: ProfileDb = data.result;
      setMainInfo(() => [
        {
          username: arr2.username,
          image: arr2.profile.images,
        },
      ]);
      setProfile(() => [arr]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    dispatch(setData(mainInfo[0]));
  }, [mainInfo[0].image]);

  console.log(mainInfo, "aspoasd");

  if (profile === undefined || profile.length == 0) {
    return <></>;
  }

  if (name == "bio") {
    return <Profile profile={profile} />;
  } else {
    return <></>;
  }
};

export default DataFetch;
