import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CatDataService, idata } from 'src/app/shared/services/cat-data.service';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent implements OnInit {
  param: string;
  listData: idata[] | undefined;


  constructor(private dataservice: CatDataService, private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');
    this.listData = this.dataservice.SubCategoryList(this.param);
    // console.log(this.listData);

  }

}
