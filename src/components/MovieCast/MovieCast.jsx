import { useState, useEffect } from "react"
import { getCast } from "../../services/getData"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import css from "./MovieCast.module.css"

const MovieCast = () => {
    const [ movieCast, setMovieCast] = useState([]);
    const {movieId} = useParams();
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        window.scrollTo(0, 0);
        async function fetchPopularMovies() {
            try {
                setLoading(true)
                const castData = await getCast(movieId)
                setMovieCast(castData.cast)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }

        fetchPopularMovies();
    }, [movieId]);
    const filterCast = movieCast.filter(cast => cast.known_for_department === 'Acting' && cast.profile_path !== null && cast.popularity > 25); 

    return(
        <div className={css.cast}>
            {loading && <Loader/>}
            {!loading && filterCast.map(cast => (
                <div key={cast.id} className={css.item}>
                    <img src={`https://image.tmdb.org/t/p/h632${cast.profile_path}`} alt={cast.name}/>
                    <div className={css.description}>
                    <h3>{cast.name}</h3>
                    <p>Character: {cast.character}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default MovieCast