import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import *  as  data from './categories.json';
export interface idata {
  Category: string;
  Subcategory: string;
}

const Categories = ["Science", "Technology", "Engineering", "Mathematics"];
const d = data;

@Injectable({
  providedIn: 'root'
})

export class CatDataService {


  constructor(private http: HttpClient) {

  }
  public getAll() {
    return d;
  }
  public getAllCategories() {
    return Categories;
  }

  public SubCategoryList(sub: string): idata[] {
    return d.data.filter(e => { return e["Category"] == sub });
  }

}
