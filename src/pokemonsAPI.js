import axios from "axios";
const BASE_URL = `https://interview.donkeymob.com/api/pokemon`;
const call = async (endpoint) => {
  const {
    data: { result }
  } = await axios.get(endpoint);

  return result;
};

export const getAll = () => call(BASE_URL);

export const search = (params) => call(`${BASE_URL}?q=${params}`);
