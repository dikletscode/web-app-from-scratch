export const loginMessage = {
  success: (data: object, token: string, refreshToken: string) => {
    return {
      isLogin: true,
      result: data,
      token: token,
      refreshToken: refreshToken,
      err: null,
    };
  },
  failed: (err: any) => {
    return {
      isLogin: false,
      result: null,
      token: null,
      refreshToken: null,
      err: err,
    };
  },
};

export const signupMessage = {
  success: () => {
    return { messages: "account created successfully" };
  },
  failed: (err: any) => {
    if (err.code == "P2002") {
      return { error: "usename or email has been used" };
    } else {
      return { error: "an error occured" };
    }
  },
};
