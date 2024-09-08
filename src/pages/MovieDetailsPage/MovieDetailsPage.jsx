import { useState, useEffect, useRef } from "react";
import {
  useParams,
  Link,
  NavLink,
  useLocation,
  Outlet,
} from "react-router-dom";
import { getMoviesDetails } from "../../services/getData";
import { SlArrowLeft } from "react-icons/sl";
import classNames from "classnames";
import css from "./MovieDetailsPage.module.css";

const getItemStyle = ({ isActive }) =>
  classNames(css.navLink, {
    [css.isActive]: isActive,
  });

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    window.scrollTo(0, 0);
    async function fetchPopularMovies() {
      try {
        const MovieData = await getMoviesDetails(movieId);
        setMovie(MovieData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchPopularMovies();
  }, [movieId]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  const { title, backdrop_path, overview, genres, vote_average } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/original${backdrop_path}`;
  const score = (vote_average * 10).toFixed(0);

  return (
    <div className={css.container}>
      <Link to={goBack.current} className={css.goBack}>
        <SlArrowLeft />
        Go Back
      </Link>
      <div className={css.box}>
        <img src={imageUrl} alt={title} className={css.image} />
        <div className={css.description}>
          <h3 className={css.title}>{title}</h3>
          <p className={css.text}>Users score :{score}%</p>
          <p className={css.subtitle}>Overview</p>
          <p className={css.text}>{overview}</p>
          <p className={css.subtitle}>Genres</p>
          <ul className={css.list}>
            {genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className={css.addBox}>
<h2 className={css.moreInfo}>Additional information</h2>
<nav className={css.navInfo}>
    <NavLink to="cast" className={getItemStyle}>Cast</NavLink>
    <NavLink to="reviews" className={getItemStyle}>Reviews</NavLink>
</nav>
      </div>
      <Outlet/>
    </div>
  );
};
export default MovieDetailsPage