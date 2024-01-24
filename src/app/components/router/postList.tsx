import axios from "axios";

export const postList = async (userId: string, list: any) => {
  var res = false;
  const payload = JSON.stringify({ userId: userId, list: list });
  await axios
    .post("http://localhost:8080/list/create", { payload })
    .then((response) => {
      if (response.statusText === "OK") {
        res = true;
      }
    });
  return res;
};
