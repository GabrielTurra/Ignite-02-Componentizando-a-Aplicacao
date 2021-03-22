import { Button } from '../components/Button';
import  { GenreResponseProps } from '../App';

interface sidebarPropsTypes{
  selectedGenreId: number;
  genres: Array<GenreResponseProps>;
  handleClickButton: (id: number) => void;
}

export function SideBar({ selectedGenreId, genres, handleClickButton}: sidebarPropsTypes) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}