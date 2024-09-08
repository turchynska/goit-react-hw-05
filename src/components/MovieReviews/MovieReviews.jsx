import { useState, useEffect, } from "react"
import { useParams } from "react-router-dom"
import { getReviews } from "../../services/getData"
import Loader from "../Loader/Loader"
import css from "./MovieReviews.module.css"

const MovieReviews = () => {
    const [ reviews, setReviews ] = useState([]);
    const {movieId} = useParams();
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        window.scrollTo(0, 0);
        async function fetchReviews() {
            try {
                setLoading(true);
                const castData = await getReviews(movieId)
                setReviews(castData.results)
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false);
            }
        }
        fetchReviews();
    }, [movieId])

    if(reviews.length === 0) {
        return <p className={css.noReviews} >There are no reviews</p>
    }
    return(
        <div className={css.reviews}>
{loading && <Loader />}
{loading && reviews.map(review => (
    <div key={review.id} className={css.item}>
        <h3 className={css.title}>Author: {review.author}</h3>
        <p className={css.text}>{review.content}</p>
    </div>
))}
        </div>
    )
}
export default MovieReviews;