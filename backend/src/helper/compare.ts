import bcrypt from "bcrypt";

export const compare = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    bcrypt.compare(password, hash, (err, same) => {
      if (err) {
        console.log(err);
        reject(false);
      } else {
        if (same) {
          resolve(true);
        } else {
          reject(false);
        }
      }
    });
  });
};
