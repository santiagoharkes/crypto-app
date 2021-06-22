import React, { createContext, useContext, useMemo } from "react";
import Axios from "axios";
import Cookies from "js-cookie";

export const AxiosContext = createContext(Axios);

export function AxiosProvider({ children }) {
  const axios = useMemo(() => {
    const axios = Axios.create({
      //   baseURL: `${process.env.REACT_APP_API_ENDPOINT}`,
      headers: {
        "Content-Type": "application/json",
      },
    });

    axios.interceptors.request.use((config) => {
      // Leer el token desde localStorage
      // const data = localStorage.getItem("authData") || null;
      // const authData = data ? JSON.parse(data) : null;

      // Leer el token desde Cookies
      const token = Cookies.get("token") || null;

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

    return axios;
  }, []);

  return (
    <AxiosContext.Provider value={axios}>{children}</AxiosContext.Provider>
  );
}

export const useAxios = () => useContext(AxiosContext);
