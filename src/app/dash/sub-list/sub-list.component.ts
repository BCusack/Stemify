import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { CatDataService, idata } from 'src/app/shared/services/cat-data.service';
import { WikiService, WikiSummary } from 'src/app/shared/services/wiki.service';

@Component({
  selector: 'app-sub-list',
  templateUrl: './sub-list.component.html',
  styleUrls: ['./sub-list.component.scss']
})
export class SubListComponent implements OnInit {
  param: string;
  listData: idata[];

  dataObj: any;
  breif: WikiSummary[];

  constructor(private dataservice: CatDataService, private articleService: WikiService, private route: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');
    this.listData = this.dataservice.SubCategoryList(this.param);
  }

}
