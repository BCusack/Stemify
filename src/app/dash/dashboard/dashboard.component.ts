
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { CatDataService } from 'src/app/shared/services/cat-data.service';
import { WikiService } from 'src/app/shared/services/wiki.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  categories: string[];
  cat: any;

  constructor(private dataservice: CatDataService, private wikidata: WikiService) {
    this.categories = this.dataservice.getAllCategories();
    this.cat = this.getWikis(this.categories).subscribe(console.log);

  }

  getWikis(cate: string[]) {
    return from(cate)
      .pipe(mergeMap((d) =>
        this.wikidata.getWiki(d)
      ))
  }


}
