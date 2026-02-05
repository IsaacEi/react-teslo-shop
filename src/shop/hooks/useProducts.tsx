import { useQuery } from "@tanstack/react-query"
import { getProductsAction } from '@/shop/actions/get-products.action';
import { useProductGrid } from '@/shop/hooks/useProductGrid';
import { useParams } from "react-router";

export const useProducts = () => {
    const { gender } = useParams();
    const { limit: limitNumber, page, sizes, price: priceRange, query } = useProductGrid()
    const limit = isNaN(Number(limitNumber)) ? 10 : Number(limitNumber);
    const offsetNumber = (Number(page) - 1) * Number(limit);
    const offset = isNaN(offsetNumber) ? 0 : offsetNumber;
    
    let minPrice = undefined;
    let maxPrice = undefined;

    switch (priceRange) {
        case '0-50':
            minPrice = 0;
            maxPrice = 50;
            break;
        case '50-100':
            minPrice = 50;
            maxPrice = 100;
            break;
        case '100-200':
            minPrice = 100;
            maxPrice = 200;
            break;
        case '200+':
            minPrice = 200;
            maxPrice = undefined;
            break;
    }
    
    return useQuery({
        queryKey: ['products', { limit, offset, sizes, gender, minPrice, maxPrice, query }],
        queryFn: () => getProductsAction({ limit, offset, sizes, gender, minPrice, maxPrice, query }),
        staleTime: 1000 * 60 * 5, // 5 minutos
    });
}
