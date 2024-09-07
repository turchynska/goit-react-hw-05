import css from "./MovieList.module.css"
import MoviesItem from "../MoviesItem/MoviesItem"

const MoviesList = ({movies}) => {
return(
    <div className={css.container}>
<ul className={css.list}>
{movies.map(movie =>(
    <li key={movie.id}
    className={css.item}
    >
    <MoviesItem movie={movie}/> 
    </li>
))}
</ul>
    </div>
)
}
export default MoviesList