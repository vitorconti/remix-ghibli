import { LoaderFunction, useLoaderData } from "remix";
import invariant from "tiny-invariant";
import { Film, getFilmById } from "~/api/film";
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
      <div className="p-10"></div>
    </>
  );
}
