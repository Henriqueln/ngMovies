import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AppConfig } from "../app.config";
import { Movie, MoviesList } from "./movie";

@Injectable()
export class MovieService {
    constructor(private http: HttpClient) { }

    getMovies(title: string, year?: number, type?: string, page?: number): Observable<MoviesList> {
        let params = `&s=${title}`;
        if(year) params += `&y=${year}`;
        if(type) params += `&type=${type}`;
        if(page) params += `&page=${page}`;
        return this.http.get<MoviesList>(`${AppConfig.url}?apikey=${AppConfig.apiKey}${params}`);
    }

    getMoviesByID(id: string): Observable<Movie> {
        return this.http.get<Movie>(`${AppConfig.url}?apikey=${AppConfig.apiKey}&i=${id}`);
    }
}