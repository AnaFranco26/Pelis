import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ResponseApiMovies } from "../../../Interfaces/ResponseApiMovies";
import { Spinner } from "../../../Components/Spinner";
import { getMovies } from "../../../Utils/GetMovies";
import { MoviDet, MoviesDetails } from "./styled";

export function MovieDetails() {
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<ResponseApiMovies>();

  useEffect(() => {
    setIsLoading(true);

    getMovies("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

    if (isLoading) {
      return <Spinner />;
    }

  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie?.poster_path;
  return (
    <div>
      <MoviesDetails src={imageUrl} alt={movie?.title} ></MoviesDetails>
      <MoviDet>
        <p>
          <strong></strong> {movie?.title}
        </p>
        <p>
          <strong>Description:</strong> {movie?.overview}
        </p>
        <p>
          <strong>Popularity:</strong>{movie?.popularity}
        </p>
        <p>
          <strong>Idioma:</strong>{movie?.original_language}
        </p>
        <p>
          <strong> Release date:</strong> {movie?.release_date}
        </p>
      </MoviDet>
    </div>
  );
}
