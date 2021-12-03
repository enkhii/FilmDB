import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {
  constructor(private http: HttpClient) {
  }
  searchMovie(title: string){
    const url = 'http://www.omdbapi.com/?apikey=6927e8a6&type=movie&s=' + title;
    return this.http.get(url).pipe(map((response: Response)=> JSON.parse(JSON.stringify(response))));
  }
  searchID(id){
    const url = 'http://www.omdbapi.com/?apikey=6927e8a6&type=movie&i=' + id;
    return this.http.get(url).pipe(map((response: Response)=> JSON.parse(JSON.stringify(response))));
  }
}
