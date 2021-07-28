import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinct, filter, map } from 'rxjs/operators';
export interface idata {
  Category: string;
  Subcategory: string;
}
const Categories = ["Science", "Technology", "Engineering", "Mathamatics"];
@Injectable({
  providedIn: 'root'
})

export class CatDataService {

  private url = "../../assets/categories.json";
  constructor(private http: HttpClient) {

  }
  public getAll(): Observable<any> {
    return this.http.get(this.url);
  }
  public getAllCategories() {
    return Categories;
  }

  public SubCategoryList(date: string): Observable<idata[]> {
    return this.http.get<idata[]>(this.url).pipe(
      map(expenses => {
        return expenses.filter(e => e.Category.includes(date));
      })
    );
  }
}
