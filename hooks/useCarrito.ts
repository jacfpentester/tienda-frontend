import useSWR, { SWRConfiguration } from 'swr';
import { ICarrito } from '../interfaces/carrito/ICarrito';


export const useCarrito = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICarrito[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        carrito: data || [],
        isLoading: !error && data,
        isError: error
    }
}