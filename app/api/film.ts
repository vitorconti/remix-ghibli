export type Film = {
    id : string;
    title: string;
    original_title: string;
    description: string;
    image: string;
    movie_banner: string;
    people: string[]
}

export async function getFilms() {
    try {
        const films: Film[] = await (await fetch('https://ghibliapi.herokuapp.com/films')).json()
        return films
    } catch (err: unknown) {
        return err
    }
}