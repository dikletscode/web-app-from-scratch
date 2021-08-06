export const loginMessage = {
  success: (data: object) => {
    return {
      isLogin: true,
      result: data,
      error: null,
    };
  },
  failed: (err: any) => {
    return {
      isLogin: false,
      result: null,
      error: err,
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
