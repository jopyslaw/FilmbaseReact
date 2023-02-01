export interface FilmData {
  image: string;
  title: string;
  rating?: string;
  content: string;
  id: string;
}

export interface AddFilm {
  title: string;
  image: string;
  content: string;
}
