import axios from "axios";

const instance = axios.create({
    baseURL: 'https://fakestoreapi.com/',
})

export const marketAPI = {
    getItemsData() {
        return instance.get<apiResponseType[]>(`products`)
    }
}

export type apiResponseType = {
    category: string
    description: string
    id: number
    image: string
    price: number
    rating: {
        rate: number
        count: 120
    }
    title: string
}




