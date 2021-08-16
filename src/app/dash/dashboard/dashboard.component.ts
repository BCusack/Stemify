
import { Component, OnInit } from '@angular/core';

import { CatDataService } from 'src/app/shared/services/cat-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories: string[] | undefined;

  constructor(private dataservice: CatDataService) {

  }

  ngOnInit(): void {
    // this.getAllData();
    this.categories = this.getCategoriesList();
  }

  getCategoriesList() {
    return this.dataservice.getAllCategories();
  }


}
