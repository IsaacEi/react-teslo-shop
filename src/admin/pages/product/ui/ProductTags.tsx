import { useRef, type KeyboardEvent, type FC } from 'react'
import type { UseFormGetValues, UseFormSetValue, UseFormWatch } from 'react-hook-form';
import type { FormInputs } from './ProductForm';
import { Plus, Tag, X } from 'lucide-react';
import { Button } from '@/components/ui/button';


interface Props {
    setValue: UseFormSetValue<FormInputs>;
    getValues: UseFormGetValues<FormInputs>;
    watch: UseFormWatch<FormInputs>
}

export const ProductTags: FC<Props> = ({ setValue, getValues, watch }) => {
    const selelectedTags = watch('tags');
    const inputRef = useRef<HTMLInputElement>(null);
    const handleInputTag = ( event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === ',' || event.key === ' ') {
            event.preventDefault();
            addTag();
            inputRef.current!.value = '';
        }
    };

    const handleButtonTag = () => {
        addTag();
        inputRef.current!.value = '';
    };

    const addTag = () => {
        const tag = inputRef.current!.value;
        if (!tag) return;
        const currentTags = new Set(getValues('tags'))
        currentTags.add(tag);
        setValue('tags', Array.from(currentTags));
    };

    const removeTag = (tag: string) => {
        const currentTags = new Set(getValues('tags'))
        currentTags.delete(tag);
        setValue('tags', Array.from(currentTags));
    };
    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6">
            <h2 className="text-xl font-semibold text-slate-800 mb-6">
                Etiquetas
            </h2>

            <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {selelectedTags.map((tag) => (
                        <span
                        key={tag}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 border border-green-200"
                        >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                        <button
                            type='button'
                            onClick={() => removeTag(tag)}
                            className="ml-2 text-green-600 hover:text-green-800 transition-colors duration-200"
                        >
                            <X className="h-3 w-3" />
                        </button>
                        </span>
                    ))}
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        ref={inputRef}
                        onKeyDown={handleInputTag}
                        placeholder="Añadir nueva etiqueta..."
                        className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                    <Button 
                        type="button" 
                        className='px-4 py-2 rounded-b-lg'
                        onClick={handleButtonTag}
                    >
                        <Plus className="w-4 h-4" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
