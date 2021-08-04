import { sign, verify } from "jsonwebtoken";
import { client } from "..";
require("dotenv").config();

export const verifyRefreshToken = (refreshToken: any): Promise<any> => {
  return new Promise((resolve, reject) => {
    verify(
      refreshToken,
      <string>process.env.REFRESH_TOKEN,
      (err: any, encode: any) => {
        if (err) reject(err);
        const id = encode.id;
        client.get(id, (err, ok) => {
          if (err) reject(err);
          if (refreshToken == ok) {
            resolve(id);
          } else {
            reject("unauthorize");
          }
        });
      }
    );
  });
};

export const createAccessToken = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    sign(
      { id: id },
      <string>process.env.SECRET_TOKEN,
      {
        expiresIn: "1m",
      },
      (err, encode) => {
        if (err) reject(err);
        resolve(encode);
      }
    );
  });
};
export const createRefreshToken = (id: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    sign(
      { id: id },
      <string>process.env.REFRESH_TOKEN,
      {
        expiresIn: "24h",
      },
      (err, encode) => {
        if (err) reject(err);
        if (encode != undefined) {
          client.set(id, encode, "EX", 24 * 60 * 60, (err, _ok) => {
            if (err) reject(err);
            resolve(encode);
          });
        } else {
          reject("error");
        }
      }
    );
  });
};
