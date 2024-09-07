import { useState, useEffect } from "react";
import MovieList from '../components/MovieList/MovieList'
import { getTrendingMovies } from "../services/getData";
import { Slide, toast, ToastContainer } from "react-toastify";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);


    const fetchPopularMovies = async() => {
        try{
            setLoading(true);
            const responce = await getTrendingMovies();
            setMovies(responce.results);
        }catch(error){
console.log(error);
return toast.error("Try again, can`t load movies at this time", {
    position: "top-right",
    hideProgressBar: false,
    closeOnClick: true,
    theme: "colored",
});
        }finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPopularMovies()
    }, []);
    return(
        <>
        <h2 className="title">Popular today</h2>
        {loading && <Loader />}
        <MovieList movies={movies}/>
        <ToastContainer transition={Slide}/>
        </>
    )
}
export default HomePage