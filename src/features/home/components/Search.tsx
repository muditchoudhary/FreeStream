import qs from 'query-string';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, X } from 'lucide-react';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function Search() {
    const navigate = useNavigate();
    const [value, setValue] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!value) return;

        const url = qs.stringifyUrl({
            url: '/search',
            query: {
                term: value,
            },
        });

        navigate(url);
    };

    const onClear = () => {
        setValue('');
    };
    return (
        <form
            onSubmit={onSubmit}
            className="relative w-full lg:w-[400px] flex items-center gap-x-1  "
        >
            <Input
                placeholder="Search"
                className="border-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 bg-[#303031]"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {value && (
                <X
                    className="absolute top-2.5 right-14 h-5 w-5 text-muted-foreground cursor-pointer hover:opacity-75 transition"
                    onClick={onClear}
                />
            )}
            <Button
                type="submit"
                size="sm"
                variant="secondary"
                className="rounded-full bg-[#151514] hover:bg-[#303031]"
            >
                <SearchIcon className="h-8 w-5 text-muted-foreground" />
            </Button>
        </form>
    );
}

export default Search;
