import axios from "axios";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const baseURL = `${process.env.REACT_APP_BASE_URL_API}`;


export const useAxios = (auth) => {
  // auth = true or false to inform when authentication in needed

  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const navigate = useNavigate();

  const axiosInstance = axios.create({
    baseURL,
    headers: auth ? { Authorization: `Bearer ${authTokens?.access}` } : {},
  });

  if (!auth) return axiosInstance;

  axiosInstance.interceptors.request.use(async (req) => {
    const user = jwt_decode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!user) navigate('/login');
    if (!isExpired) return req;

    const response = await axios.post(`${baseURL}/auth/token/refresh/`, {
      refresh: authTokens.refresh,
    });

    response.status === 401 
    ? navigate('/login') 
    : localStorage.setItem("authTokens", JSON.stringify(response.data));

    setAuthTokens(response.data);
    setUser(jwt_decode(response.data.access));

    req.headers.Authorization = `Bearer ${response.data.access}`;
    return req;
  });

  return axiosInstance;
};
