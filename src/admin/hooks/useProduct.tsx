import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getProductByIdAction } from '@/admin/actions/get-product-by-id';
import { createUpdateProductAction } from "@/admin/actions/create-update-product.action";

export const useProduct = (id: string) => {

  const queryClient = useQueryClient();
    
  const query = useQuery({
    queryKey: ['product-by-id', id],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5, // 5 minutes
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationKey: ['product-create-update'],
    mutationFn: createUpdateProductAction,
    onSuccess: (product) => {
      // Invalidate products list to refetch updated data
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({ queryKey: ['product-by-id', product.id]});
      // Update the specific product query data
      queryClient.setQueryData(['products', product.id], product);
    }
  });

  return {
    ...query,
    mutation,
  }
}
