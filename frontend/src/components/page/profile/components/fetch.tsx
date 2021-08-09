import React, { useEffect, useState, useContext, EffectCallback } from "react";
import { Profile } from "./profile/profile";
import { getProfile } from "../../../../services/profile.service";
import { ProfileTypes, ProfileDb } from "../../../../services/profile.service";
import { useDispatch } from "react-redux";
import { setData, setLoading, User } from "../../../../reducer/auth";
import { profileInit } from "../../../../valueInit/profile";
import StartSelling from "./seller/startSelling";

const DataFetch = ({ name }: { name: string }) => {
  const [profile, setProfile] = useState<ProfileTypes[]>([]);
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoading(true));
      let data = await getProfile();
      let arr: ProfileTypes = data.result;
      let arr2: User = {
        username: data.result.username,
        image: data.result.profile.images,
      };
      dispatch(setData(arr2));
      setProfile(() => [arr]);
      setFetching(true);
      dispatch(setLoading(false));
    } catch (error) {
      setFetching(false);
      console.log(error);
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    getData();
  }, [isFetching]);

  if (name == "bio" && isFetching) {
    return <Profile profile={profile} />;
  } else if (name == "seller" && isFetching) {
    return <StartSelling profile={profile} />;
  } else {
    return <></>;
  }
};

export default DataFetch;
