import axios from "axios";

const eventServices = axios.create({
    baseURL: 'http://localhost:3000/api/cities'
})

export const getAllCities = async () =>{
    try {
        const response = await eventServices()
        return response.data.res
    } catch (error) {
        return []
    }
}