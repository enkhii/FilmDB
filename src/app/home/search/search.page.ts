import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OmdbService} from '../../omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  result: [];
  constructor( private activatedRoute: ActivatedRoute, private omdb: OmdbService, private router: Router ) {
    this.result=[];
  }
  titleSearch(title) {
    this.router.navigate(['/home/search/', title]);
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('filmSearch')){
        return;
      }
      const filmID = paramMap.get('filmSearch');
      this.omdb.searchMovie(filmID).subscribe((result) => {
        this.result = result;
        console.log(this.result);
      });
    });
  }

}
