var date = new Date();
date.setTime(date.getTime() + 24 * 60 * 60 * 1000);

export const cookieOption: object = {
  httpOnly: true,
  sameSite: "strict",
  secure: true,
  expires: date,
};
