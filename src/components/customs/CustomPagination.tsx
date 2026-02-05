import { useSearchParams } from 'react-router';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'

interface Props {
    totalPages: number;
}

export const CustomPagination = ({ totalPages }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryPage = searchParams.get('page') ?? 1;
  const page = isNaN(Number(queryPage)) ? 1 : Number(queryPage);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > totalPages) return;
    searchParams.set('page', newPage.toString());
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center justify-center space-x-2">
        <Button variant="outline" size="sm" disabled={page === 1} onClick={() => handlePageChange(page - 1)}>
          <ChevronLeft className="h-4 w-4" />
          Anteriores
        </Button>

        {
            Array.from({ length: totalPages }, (_, i) => (
                <Button 
                    key={i} 
                    variant={page === i + 1 ? 'default' : 'outline'} 
                    size="sm"
                    onClick={() => handlePageChange(i + 1)}
                >
                    {i + 1}
                </Button>
            ))
        }
        {/* 

        <Button variant="default" size="sm">
          1
        </Button>
        <Button variant="outline" size="sm">
          2
        </Button>
        <Button variant="outline" size="sm">
          3
        </Button> */}
        <Button variant="ghost" size="sm" disabled>
          <MoreHorizontal className="h-4 w-4" />
        </Button>

        <Button variant="outline" size="sm" disabled={page === totalPages} onClick={() => handlePageChange(page + 1)}>
          Siguientes
          <ChevronRight className="h-4 w-4" />
        </Button>
    </div>
  )
}
