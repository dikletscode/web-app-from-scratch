export const login = {
  success: (data: object) => {
    return { isLogin: true, result: data, token: null, err: null };
  },
  failed: (err: any) => {
    return { isLogin: false, result: null, token: null, err: err };
  },
};

export const signup = {
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
