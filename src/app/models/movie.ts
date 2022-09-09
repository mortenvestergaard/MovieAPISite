import { MovieGenre } from "./genre";

export class Movie {
  id: number | undefined;
  poster: string | undefined;
  title: string | undefined;
  description: string | undefined;
  genres: String[] | undefined;
  releaseDate: string | undefined;
  runtime: string | undefined;
}
