import classNames from 'classnames';
import css from './MoviesItem.module.css'
import { Link, useLocation } from 'react-router-dom'

const MoviesItem = ({ movie }) => {
  const { id, title, backdrop_path } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
  const location = useLocation();

return(
    <>
    <Link state={{ from: location }} to={`/movies/${id}`} className={css.link}>
      <img src={imageUrl} alt={title} className={css.img}/>
      <p className={css.name}>{title}</p>
    </Link>
    </>
)
}
export default MoviesItem