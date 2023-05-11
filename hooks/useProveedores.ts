import useSWR, { SWRConfiguration } from 'swr';
import { IProveedores } from '../interfaces/proveedores/IProveedores';


export const useProveedores = (url: string, config: SWRConfiguration={}) => {
    console.log(url);
    const { data, error } = useSWR<IProveedores[]>(`http://localhost:3000/api${url}`, config);
    console.log("data = ", data, error);
    return {
        proveedores: data || [],
        isLoading: !error && data,
        isError: error
    }
}