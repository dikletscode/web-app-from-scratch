import { client } from "../index";

const setData = (key: string, value: string) => {
  console.log(`${key}`);
  client.set(key, value, "EX", 60 * 60);
};

const getData = async (key: string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    client.get(key, (err, data) => {
      if (err) reject("error");
      resolve(data);
    });
  });
};
const remove = (key: string) => {
  return new Promise((resolve, reject) => {
    client.del(key, function (err, succeeded) {
      if (err) reject(err);
      if (succeeded) {
        resolve("success");
      }
    });
  });
};

export default {
  getData,
  setData,
  remove,
};
