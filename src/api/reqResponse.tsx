import axios from "axios";

export const reqResponseAPI = axios.create({
  baseURL: "https://reqres.in/api",
});
