import { AdminTitle } from '@/admin/components/AdminTitle';
import { Button } from '@/components/ui/button';
import { SaveAll, X } from 'lucide-react';
import { type FC } from 'react'
import { Link } from 'react-router';

interface Props {
    title: string;
    subtitle: string;
    isPending: boolean;
}

export const ProductHeader: FC<Props> = ({ title, subtitle, isPending }) => {
  return (
    <div className="flex justify-between items-center">
        <AdminTitle title={title} subtitle={subtitle} />
        <div className="flex justify-end mb-10 gap-4">
        <Button type='button' variant="outline">
            <Link to="/admin/products" className="flex items-center gap-2">
            <X className="w-4 h-4" />
            Cancelar
            </Link>
        </Button>

        <Button type="submit" disabled={isPending}>
            <SaveAll className="w-4 h-4" />
            Guardar cambios
        </Button>
        </div>
    </div>
  )
}
