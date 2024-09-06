import instance from "instance";

const fetchPopularMovies = async (url, errorMessage) => {
    try{
        const responce = await instance.get(url);
        return responce.data;
    }catch(error){
console.error(errorMessage, error);
throw error;
}
};

export const getData = async (query) => {
    if(!query) {
        return;  
    }

    const searchParams = new URLSearchParams({
        query,
    });

    return fetchPopularMovies('/search/movie?${searchParams.toString()}', "Error Fetching Data");
}

export const getTrendingMovies = () => fetchPopularMovies('/trending/movie/day', "Error fetching movies");
export const getMoviesDetails = () => fetchPopularMovies('/movie/${movieId}', "Error fetching details");
export const getCast = () => fetchPopularMovies('movie/${movieId}/credits', "Error fetching credits");
export const getReviews = () => fetchPopularMovies('/movie/${movieId}/reviews', "Error fetching reviews");