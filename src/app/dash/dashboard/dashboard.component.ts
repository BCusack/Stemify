
import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CatDataService, idata } from 'src/app/shared/services/cat-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  categories: string[] | undefined;

  subs: idata[] | undefined;

  constructor(private dataservice: CatDataService) { }

  ngOnInit(): void {
    // this.getAllData();
    this.categories = this.getCategoriesList();
  }
  getAllData() {
    this.dataservice.getAll().subscribe(console.log);
  }
  getCategoriesList() {
    return this.dataservice.getAllCategories();
  }
  getSubs(cat: string) {
    this.dataservice.SubCategoryList("Science").subscribe(
      expenses => {
        this.subs = expenses;
      },
      error => {
        console.log("Error retrieving expenses");
        console.error(error);
      }
    );

  }
  getList() { }
}
