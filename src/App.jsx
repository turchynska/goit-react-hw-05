import { useState } from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation/Navigation";
import css from "./App.module.css";
import Loader from "./components/Loader/Loader";

const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const MoviePage = lazy(() => import("./pages/MoviesPage"));
const NotFound = lazy(() => import("./pages/NotFoundPage"));
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>import("./components/MovieReviews/MovieReviews"));

function App() {
  return (
    <div className={css.container}>
        <Navigation />
        <main>
      <Suspense fallback={ <Loader />}>
        <Routes>
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </main>
    </div>
  );
};

export default App