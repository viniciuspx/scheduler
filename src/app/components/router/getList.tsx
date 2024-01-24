import axios from "axios";

export const getList = async (userId: string) => {
  const res = await axios.get(`http://localhost:8080/list/get/${userId}`);
  return res.data.list;
};
