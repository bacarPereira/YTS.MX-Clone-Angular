export interface IMovie{
  status:string;
  data:IMovieData;
}

export interface IMovieData {
  id: number;
  title: string;
  year: number;
  image: string;
  ranking: number;
  type: string;
  category:string;
  movie_count:number;
  limit:number;
  page_number:number
  movies:IMovieItem[];
}

export interface IMovieItem{
    id:number;
    url:string;
    title: string;
    title_long: string;
    slug: string;
    year: number;
    rating:number;
    genres:string[];
    summary:string;
    description_full:string;
    synopsis:string;
    language:string;
    background_image: string,
    background_image_original:string;
    small_cover_image: string;
    medium_cover_image: string;
    large_cover_image: string;
    state: string;
    torrents: ITorrent;
    date_uploaded: Date;
}

export interface ITorrent{
    url: string;
    quality: string;
    type: string;
    seeds: number;
    peers: number;
    size:string;
    date_uploaded:Date;
}
