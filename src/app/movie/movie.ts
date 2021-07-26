export interface MoviesList {
    Response: boolean;
    Search: Movie[];
    TotalResults: string;
}

export interface Movie {
    Poster: string;
    Type: string;
    Year: string;
    Title: string;
    imdbId: string;
}