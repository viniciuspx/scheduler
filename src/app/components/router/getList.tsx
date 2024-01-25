import axios from "axios";

export const getList = async (userId: string) => {
  const res = await axios.get(process.env.API_URL + `/list/get/${userId}`);
  return res.data.list;
};
