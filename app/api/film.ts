
export type FilmCharacter = {
    id:string,
    name:string,
    gender?:string;
    age?:string;
    eye_color?: string;
    hair_color?: string;
}
export type Film = {
    id : string;
    title: string;
    original_title: string;
    description: string;
    image: string;
    movie_banner: string;
    people: string[]
    characters?: FilmCharacter[]
}

export async function getFilms(title?: string | null) {
    try {
        const films: Film[] = await (await fetch('https://ghibliapi.herokuapp.com/films')).json()
        return films.filter((film) => 
            title ? film.title.toLowerCase().includes(title.toLocaleLowerCase()): true
        )
    } catch (err: unknown | any) {
        return err.message()
    }
}


export async function getFilmById(filmId:string) {
    try {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films/${filmId}`)
        const film : Film  = await response.json()
        const characters = await Promise.all(
            film.people
            .filter((url) => url !== 'https://ghibliapi.herokuapp.com/people/')
            .map((url) => fetch(url).then((res) => res.json()))
        )
        return {...film, characters}
    } catch (error: any) {
        return error.message
    }
}