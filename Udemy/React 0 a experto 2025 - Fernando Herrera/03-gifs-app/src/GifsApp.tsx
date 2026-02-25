import { useState } from "react"
import { CustomeHeader } from "./components/CustomeHeader"
import { SearchBar } from "./components/SearchBar"
import { GifList } from "./gifs/components/GifList"
import { PreviousSearches } from "./gifs/components/PreviousSearches"
import { mockGifs } from "./mock-data/gifs.mock"

export const GifsApp = () => {

    const [previousSearch, setPreviousSearch] = useState(['Dragon Ball Z']);

    const handleAddSearch = (search: string) => {
        console.log({ search });
    }

    const handleSearch = (query: string) => {
        console.log({ query });
    }
    return (
        <>
            {/* Header */}
            <CustomeHeader title="Búscador de Gifs" description="Descubre y comparte el gif perfecto" />

            {/* Search Input */}
            <SearchBar title="Buscar" placeholder="Buscar gifs..." onSearch={handleSearch} />

            {/* Busquedas previas */}
            <PreviousSearches searches={previousSearch} onSearchClick={handleAddSearch} />

            {/* Gifs */}
            <GifList gifs={mockGifs} />
        </>
    )
}
