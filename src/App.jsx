
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import css from "./App.module.css";
import Loader from "./components/Loader/Loader";

const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviesPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>import("./components/MovieReviews/MovieReviews"));

function App() {
  return (
    <div className={css.container}>
        <Navigation />
        <main>
      <Suspense fallback={ <Loader />}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="movies" element={<MoviePage/>}/>
          <Route path="movies/:movieId" element={<MovieDetailsPage/>}/>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews/>}/>
         <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </main>
    </div>
  );
};

export default App