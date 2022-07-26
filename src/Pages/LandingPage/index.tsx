import React from "react";
import { Search } from "../../Components/Search";
import { MovieGrid} from "../../Components/MovieGrid"

export const LandingPage = ()=>{
    return ( <div>
        <Search />
        <MovieGrid />

       
    </div>
    );
}