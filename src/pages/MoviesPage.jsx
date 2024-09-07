import { useEffect, useState, useMemo } from "react";
import SearchBar from '../components/SearchBar/SearchBar';
import MoviesList from "../components/MovieList/MovieList";
import { getData } from "../services/getData";
import { Slide, toast, ToastContainer } from "react-toastify";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";

const MoviePage = () => {
    const [movieList, setMovieList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [loading, setLoading] = useState(false);

    const query = searchParams.get("query");

    const fetchPopularMovies = async (searchQuery) => {
        try {
           setLoading(true);
           const response = await getData(searchQuery); 

           if(!response || response.results){
            toast.info("No movies found for your request.",{
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored"
            });
            setMovieList([]);
            return;
           }
           setMovieList(response.results);
        } catch (error) {
            console.log(error);
            return toast.error("Can`t load more movie, try later",{
                position: "top-right",
                hideProgressBar: false,
                closeOnClick: true,
                theme: "colored"
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if(query){
            fetchPopularMovies(query);
        }else{
            setMovieList([]);
        }
    }, [query]);

    const handleSearch = (newQuery) => {
        setSearchParams({"query": newQuery});
    };

    const filteredMovies = useMemo(() => movieList.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase()) && movie.backdrop_path !== null
    ), [movieList, query]);

    return(
        <>
        <SearchBar defaultSearchValue={query} onSubmit={handleSearch} />
        {loading && <Loader/>}
        {!loading && query && filteredMovies.length === 0 && (
        <p className="text">There are no movies that match the query</p>
      )}
      {!loading && filteredMovies.length > 0 && (
        <MoviesList movies={filteredMovies} />
      )}
      <ToastContainer transition={Slide} />
        </>
    );
};
export default MoviePage;