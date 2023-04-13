import { lazy } from "react";
import { NotFound } from "./NotFound";
import { Route, Routes } from "react-router-dom"
import { Layout } from "./SharedLayout/SharedLayout";

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import("../pages/Movies/Movies"));
const MovieDetails = lazy(() => import("../pages/Details/MovieDetails"));
const Cast = lazy(() => import("../pages/Cast/Cast"));
const Reviews = lazy(() => import("../pages/Reviews/Reviews"));

const App = ()=>{

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="movies" element={<Movies/>}/>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="cast" element={<Cast/>}/>
            <Route path="reviews" element={<Reviews/>}/>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
   
  )
}

export default App;