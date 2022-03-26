import { LoaderFunction, useLoaderData } from "remix";
import { Film, getFilms } from "~/api/film";

export const loader: LoaderFunction = async () => {
  return getFilms();
};
export default function FilmsIndex() {
  const films = useLoaderData<Film[]>();
  return (
    <div>
      <h1 className="text-neutral-500 text-7xl pb-8">FILMS</h1>
      <div className="grid grid-cols-4 gap-5">
        {films.map((film: Film) => (
          <div className="flex flex-col items-center border-gray-800 rounded-md border hover:scale-105 hover:font-bold cursor-pointer">
            <h3 className="uppercase text-neutral-400 font-semibold">
              {film.title}
            </h3>
            <img src={film.image} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
