import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = '03fb44085844ef77265b2e80b4c108f8';

  constructor(private http: HttpClient) { }

  private getParams(): HttpParams {
    const params = new HttpParams().set('api_key', this.apiKey).set('language', 'en-US');

    console.log(params.get('api_key'));
    return params;
  }

  public getGenreList() {
    const params: HttpParams = this.getParams();
    const path = '/genre/movie/list';
    return this.http.get(this.apiUrl + path, {params});
  }

  public getDiscoverMovies() {
    const params = this.getParams();
    params.set('include_adult', 'false').set('include_video', 'true').set('sort_by', 'vote_average.desc');
    const path = '/discover/movie';
    return this.http.get(this.apiUrl + path, {params});
  }
}
