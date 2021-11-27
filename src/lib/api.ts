import { axiosInstance } from "src/utils/axiosHelper";

export const getPlanets = async () => {
    const {data} = await axiosInstance.get('/planets')
    return data
}