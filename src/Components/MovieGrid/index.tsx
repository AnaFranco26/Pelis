import React, { useEffect, useState } from "react";
import { useQuery } from "../../Hooks/useQuery";
import { ResponseApiMovies } from "../../Interfaces/ResponseApiMovies";
import { getMovies } from "../../Utils/GetMovies";
import { MovieCard } from "../MovieCard";
import { GridContainer } from "./styled";

export const MovieGrid =()=>{
    
   const [isLoading, setIsloading]= useState(true)
   const [listMovies, setlistMovies]= useState<ResponseApiMovies[]>([])
   const query = useQuery();
  const search = query.get("search");
   useEffect(() => {
    setIsloading(true);
    const searchUrl = search
      ? "/search/movie?query=" + search
      : "/discover/movie";
      getMovies(searchUrl).then((data) => {
      setlistMovies(data.results);
      setIsloading(false);
    });
  }, [search]);

    return ( 
      
        <GridContainer>
                 {listMovies.map((movie)=>{
                return (
                <MovieCard Movie={movie} key={movie.id}/>
                )
            })}
        </GridContainer>
    );
    
}