import { LoaderFunction, useLoaderData } from "remix";
import { Film, getFilms } from "~/api/film";
import Search from "./Search";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const title = url.searchParams.get("title");
  return getFilms(title);
};
export default function FilmsIndex() {
  const films = useLoaderData<Film[]>();
  return (
    <div className="text-center">
      <h1 className="text-neutral-200 text-7xl  pb-8">STUDIO GHIBLI FILMS</h1>
      <Search />
      <div className="grid grid-cols-4 gap-5">
        {films.map((film: Film) => (
          <div className="flex flex-col items-center shadow-lg shadow-cyan-500/50 border-gray-800 rounded-md border hover:shadow-2xl:shadow-cyan-500/50 hover:scale-105  hover:font-bold  cursor-pointer">
            <h3 className="uppercase text-lg  text-neutral-300 font-semibold">
              {film.title}
            </h3>
            <img src={film.image} alt={film.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
