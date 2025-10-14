type Props = {
    searches: string[],
    onSearchClick: (search: string) => void
}


export const PreviousSearches = ({ searches, onSearchClick }: Props) => {
    return (
        <div className="previous-searches">
            <h2>Búsquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map(search => (
                        <li key={search} onClick={() => onSearchClick(search)}>{search}</li>
                    ))
                }
            </ul>
        </div>
    )
}
