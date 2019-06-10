import { Component, OnInit } from '@angular/core';

import { FilmsService } from '../../services/films.service';

interface Genre {
  id: number;
  name: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {
  genres: Array<Genre> = new Array<Genre>();

  constructor(private filmApi: FilmsService) { }

  ngOnInit() {
    this.filmApi.getGenreList().subscribe((data: any) => {
      this.genres = data.genres;
      console.log(data);
    });
  }

  openGenre(id: number) {
    console.log(id);
  }

}
