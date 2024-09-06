import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        'Authorization' : 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjhkYTRkNmM1ZDViMmFmYzA3ZmU3MDUwYTkyMDc1OSIsIm5iZiI6MTcyNTYyNDkwMi4xNTYzODUsInN1YiI6IjY2ZDg1OTFmYmNmYTMxODg2MTlkMzI3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JzTodvCXdVDk41fR-NGMLQ6D9KmXGEiuPHButzv-YmA'
    }
})

export default instance