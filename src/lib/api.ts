import { axiosInstance } from "../utils/axiosHelper";

export const getPlanets = async () => {
  const { data } = await axiosInstance.get("/planets");
  return data;
};

export const getFilms = async () => {
  const { data } = await axiosInstance.get("/films");
  return data;
};

export const getPeople = async (id: string) => {
  const { data } = await axiosInstance.get(`/people/${id}`);
  return data
};
