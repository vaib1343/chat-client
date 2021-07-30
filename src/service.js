import axios from "axios";

const appHeader = () => {
  return {
    token: window.localStorage.getItem("token"),
  };
};

export const post = async (url, payload) => {
  const res = await axios.post(url, payload, { headers: appHeader() });
  return res;
};
