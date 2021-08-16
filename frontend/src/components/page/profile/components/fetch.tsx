import React, { useEffect, useState } from "react";
import { Profile } from "./profile/profile";
import { getUserInfo } from "../../../../services/profile.service";
import { ProfileTypes, UserTypes } from "../../../../interface/profile";
import { useDispatch } from "react-redux";
import { setImage, setLoading, User } from "../../../../reducer/auth";
import StartSelling from "./seller/startSelling";
import Loading from "../../../loading/loading";
import { AVATAR_URL } from "../../../../helper/staticImage";

enum Role {
  SELLER = 1,
  BUYYER = 2,
}

const DataFetch = ({ name }: { name: string }): JSX.Element => {
  const [userInfo, setUserInfo] = useState<UserTypes>();
  const [isFetching, setFetching] = useState(false);
  const [sharingState, setState] = useState("");
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(setLoading(true));
      let data = await getUserInfo();
      setState(data?.profile.images || "");
      setUserInfo(() => data);
      setFetching(true);
      dispatch(setLoading(false));
    } catch (error) {
      setFetching(false);
      console.log(error);
      dispatch(setLoading(true));
    }
  };

  useEffect(() => {
    getData();
    dispatch(setImage(AVATAR_URL + sharingState));
  }, [isFetching, sharingState]);

  if (userInfo == undefined) {
    return <Loading />;
  }
  switch (name) {
    case "bio":
      return <Profile userInfo={userInfo} />;
    case "seller":
      return <StartSelling profile={[userInfo.profile]} />;
    default:
      return <Profile userInfo={userInfo} />;
  }
};

export default DataFetch;
