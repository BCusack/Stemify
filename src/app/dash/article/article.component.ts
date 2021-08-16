import { Component, OnInit } from '@angular/core';
import { WikiService, WikiSummary } from 'src/app/shared/services/wiki.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  data: WikiSummary;

  constructor(private wiki: WikiService) { }

  ngOnInit(): void {
    this.wiki.getWiki('Addax').subscribe(d => {
      this.data = d;
    });
  }

}
