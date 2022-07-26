import { FC } from "react";
import { Link } from "react-router-dom";
import { ResponseApiMovies } from "../../Interfaces/ResponseApiMovies"
import { ContainerCard, ContainerImage, TextCard } from "./styled";

interface PropsMovieCard {

  Movie:ResponseApiMovies
}
export const MovieCard :FC<PropsMovieCard>=({ Movie })=> {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + Movie.poster_path;
  return (
    <div> 
    <ContainerCard >  
      
      <Link to={"/movies/" + Movie.id}>
        <ContainerImage
          width={230}
          height={345}
          src={imageUrl}
          alt={Movie.title}
        />
        <div>{Movie.title}</div>
        <TextCard>Puntuación: {Movie.vote_average}</TextCard>
      </Link>
      </ContainerCard>
      </div>
  );
}