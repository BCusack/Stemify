import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WikiService, WikiSummary } from 'src/app/shared/services/wiki.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  data: WikiSummary;
  param: string;

  constructor(private wiki: WikiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.param = this.route.snapshot.paramMap.get('id');
    this.wiki.getWiki(this.param).subscribe(d => {
      this.data = d;
    });
  }

}
