import { useState } from "react";

type Props = {
    title: string;
    placeholder?: string;
    onSearch: (query: string) => void;
}


export const SearchBar = ({ title, placeholder = 'Buscar', onSearch }: Props) => {

    const [search, setSearch] = useState('');
    const handleSearch = () => {
        onSearch(search);
        setSearch('');
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearch();
    }

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeholder}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKeyDown} />
            <button onClick={handleSearch}>{title}</button>
        </div>
    )
}
