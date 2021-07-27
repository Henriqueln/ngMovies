export interface MoviesList {
    Response: boolean;
    Error: string;
    Search: Movie[];
    totalResults: string;
}

export interface Movie {
    Poster: string;
    Type: string;
    Year: string;
    Title: string;
    imdbID: string;
    Actors: string;
    Director: string;
    Genre: string;
    Writer: string;
    Language: string;
    Country: string;
    Plot: string;
    Metascore: string;
}