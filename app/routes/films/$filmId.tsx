import { LoaderFunction, Outlet, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { Film, getFilmById } from "~/api/film";
import CharacterList from "~/components/CharacterList";
import FilmBanner from "~/components/FilmBanner";

export const loader: LoaderFunction = async ({ params }) => {
  invariant(params.filmId, "expect params.filmId");

  const film = await getFilmById(params.filmId);

  return film;
};

export default function Film() {
  const film = useLoaderData<Film>();
  return (
    <>
      <FilmBanner film={film} />
      <div className="p-10">
        <p>{film.description}</p>
        <div className="flex py-5 space-x-5">
          <CharacterList characters={film.characters} />
          <div className="flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
