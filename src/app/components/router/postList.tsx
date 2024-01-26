import axios from "axios";

export const postList = async (userId: string, list: any) => {
  var res = false;
  const payload = JSON.stringify({ userId: userId, list: list });
  await axios
    .post(process.env.API_URL + "/list/create", { payload })
    .then((response) => {
      if (response.status === 200) {
        res = true;
      }
    });
  return res;
};
