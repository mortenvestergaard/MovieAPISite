import { Genre } from "./genre";

export class Movie {
  id: number | undefined;
  poster: string | undefined;
  name: string | undefined;
  description: string | undefined;
  genres: Array<String> | undefined
  releaseDate: string | undefined;
  runtime: string | undefined;
}
