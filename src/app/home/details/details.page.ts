import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, convertToParamMap, Router} from '@angular/router';
import {OmdbService} from '../../omdb.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  filmDetail = [];
  constructor( private activatedRoute: ActivatedRoute, private omdb: OmdbService, private router: Router) { }
  titleSearch(title) {
    this.router.navigate(['/home/search/', title]);
  }
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if(!paramMap.has('filmID')){
        return;
      }
      const filmID = paramMap.get('filmID');
      this.omdb.searchID(filmID).subscribe((result) => {
        this.filmDetail = result;
        console.log(this.filmDetail);
      });
    });
  }

}
