import { Film } from "~/api/film";
import { Link } from "remix";

type FilmBannerProps = {
  film: Film;
};

export default function FilmBanner({ film }: FilmBannerProps) {
  return (
    <div>
      <div className="w-full h-96 overflow-hidden relative">
        <div className="w-full h-full flex flex-col absolute  justify-between items-start">
          <Link
            to="/films"
            className="text-white p-3 text-4xl bg-slate-700/60  hover:underline"
          >
            {"<"}
          </Link>
          <div className="bg-slate-700/60 p-5">
            <div className="text-6xl font-bold">{film.title}</div>
          </div>
        </div>
        <img
          src={film.movie_banner}
          className="w-full h-auto"
          style={{ marginTop: -100 }}
        />
      </div>
    </div>
  );
}
