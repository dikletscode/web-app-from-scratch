import React, { useEffect, useState, useContext, EffectCallback } from "react";
import axios from "axios";
import { Profile } from "./profile";
import { getProfile } from "../../../../services/profile.service";

export interface ProfileTypes {
  email: string;
  profile: {
    address: string;
    fullname: string;
    images: string;
    notelp: string;
  };
  role: object;
}

const DataFetch = ({ name }: any) => {
  const [profile, setProfile] = useState<ProfileTypes[]>([]);
  const getData = async () => {
    try {
      let data = await getProfile("7c34aa6d-2598-47f5-a795-a30911eabb1a");
      setProfile(() => [data.data.result]);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(profile, "pro");

  useEffect(() => {
    getData();
  }, []);

  if (profile === undefined || profile.length == 0) {
    return <></>;
  } else {
    return <Profile profile={profile} />;
  }
};

export default DataFetch;
