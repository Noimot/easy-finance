import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const loanApi = async() => {
  const request = await api.get("/loans");
  return request;
};
