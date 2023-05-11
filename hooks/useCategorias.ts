import useSWR, { SWRConfiguration } from 'swr';
import { ICategorias } from '../interfaces/categorias/ICategorias';


export const useCategorias = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<ICategorias[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        categorias: data || [],
        isLoading: !error && data,
        isError: error
    }
}