import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/services/films.service';

interface DiscoverFilm {
  id: number;
  vote_average: number;
  title: string;
  poster_path: string;
  genre_ids: Array<string>;
  backdrop_path: string;
  overview: string;
}

@Component({
  selector: 'app-big-thumbnail',
  templateUrl: './big-thumbnail.component.html',
  styleUrls: ['./big-thumbnail.component.sass']
})
export class BigThumbnailComponent implements OnInit {
  private discovered: Array<DiscoverFilm>;
  public hero: DiscoverFilm;

  constructor(private filmApi: FilmsService) { }

  ngOnInit() {
    this.discoverFilms();
  }

  async discoverFilms() {
    await this.filmApi.getDiscoverMovies().subscribe((data: any) => {
      this.discovered = data.results;
      this.hero = this.discovered[Math.floor(Math.random() * (19))];
    });
  }

  openDetail(id: number) {
    console.log(id);
  }
}
