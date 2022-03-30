import { Link } from "remix";
import { FilmCharacter } from "~/api/film";

type CharacterListProps = {
  characters?: FilmCharacter[];
};

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className="flex-1 max-w-md">
      <h3 className="text-3xl">Characters</h3>
      <ul className="flex flex-col space-y-3 my-3">
        {characters?.map((characters) => (
          <li>
            <Link
              to={`character/${characters.id}`}
              className="w-full hover:underline p-3 rounded border border-slate-400 inline-block"
            >
              {characters.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
