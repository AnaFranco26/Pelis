import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./Pages/LandingPage"
import { MovieDetails } from "./Pages/LandingPage/MovieDetails";
import { AppStyled} from "./styled";


function App() {
  return (
    <AppStyled>
    <BrowserRouter>
    
    <Routes>
      <Route path="/movies/:movieId" element={<MovieDetails/>}/>
      <Route path ="/" element={<LandingPage />} />

      
    </Routes>

    </BrowserRouter>
    </AppStyled>
  );
}

export default App;
