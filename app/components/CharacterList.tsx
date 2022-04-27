import { NavLink } from 'remix'
import { FilmCharacter } from '~/api/film'

type CharacterListProps = {
  characters?: FilmCharacter[]
}

export default function CharacterList({ characters }: CharacterListProps) {
  return (
    <div className='flex-1 max-w-md'>
      <h3 className='text-3xl'>Characters</h3>
      <ul className='flex flex-col space-y-3 my-3'>
        {characters?.map((character) => (
          <li key={character.id}>
            <NavLink
              prefetch='intent'
              to={`characters/${character.id}`}
              className={({ isActive }) =>
                `w-full hover:underline p-3 rounded border border-slate-400 inline-block font-sans font-semibold text-lg ${
                  isActive
                    ? 'bg-gray-600 text-white font-bold border-2'
                    : 'text-white '
                } `
              }
            >
              {character.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
