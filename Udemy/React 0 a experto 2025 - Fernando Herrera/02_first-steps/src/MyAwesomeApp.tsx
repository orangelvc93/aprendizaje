
export const MyAwesomeApp = () => {

    const firstName = 'Orangel';
    const lastName = "Valdespino";
    const isActive = false;

    const favoriteGames = ['Elden Ring', 'Smatch', 'Metal Gear', 'COD']
    return (
        <>
            <h1>{firstName}</h1>
            <h3>{lastName}</h3>

            <p>{favoriteGames.join(', ')}</p>
            <p>{2 + 2}</p>
            <p>{isActive ? 'Activo' : 'No activo'}</p>

        </>
    )
}
