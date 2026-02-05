
import { useSearchParams } from 'react-router'

export const useProductGrid = () => {
    const [ searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get('page') || '1';
    const limit = searchParams.get('limit') || '10';
    const viewMode = searchParams.get('viewMode') || 'grid';
    const sizes = searchParams.get('size') || undefined;
    const price = searchParams.get('price') || 'any';
    const query = searchParams.get('query') || undefined;

    return { 
        viewMode, 
        page,
        limit,
        sizes,
        price,
        query,
        searchParams,
        setSearchParams  
    };
}
