import { useRef, type FC, type KeyboardEvent } from 'react';
import { Search, Bell, MessageSquare, Settings } from 'lucide-react';
import { CustomMenu } from '@/shop/components/CustomMenu';
import { useProductGrid } from '@/shop/hooks/useProductGrid';

export const AdminHeader: FC = () => {
  const { query, setSearchParams } = useProductGrid();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = ( event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    const newSearchParams = new URLSearchParams();
    const query = inputRef.current?.value;
    if (!query) {
        newSearchParams.delete('query');
    } else {
        newSearchParams.set('query', query || '');
    }
    
    setSearchParams(newSearchParams);
  };
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 h-18">
      <div className="flex items-center justify-between">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              ref={inputRef}
              onKeyDown={handleSearch}
              defaultValue={query}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <MessageSquare size={20} />
          </button>
          
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            <Settings size={20} />
          </button>

          <CustomMenu />
        </div>
      </div>
    </header>
  );
};
