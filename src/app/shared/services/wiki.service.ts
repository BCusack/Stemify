import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface WikiSummary {
  type?: string;
  title?: string;
  displaytitle?: string;
  // namespace?: Namespace;
  wikibase_item?: string;
  //titles?:        Titles;
  pageid?: number;
  //thumbnail?:     Originalimage;
  // originalimage?: Originalimage;
  lang?: string;
  dir?: string;
  revision?: string;
  tid?: string;
  timestamp?: Date;
  description?: string;
  //content_urls?:  ContentUrls;
  //api_urls?:      APIUrls;
  extract?: string;
  extract_html?: string;
}

@Injectable({
  providedIn: 'any'
})
export class WikiService {

  constructor(private http: HttpClient) {

  }

  getWiki(title: string) {
    const tempTitle = title.replace(' ', '_') + '?redirect=true';
    const baseUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    return this.http.get<WikiSummary>(baseUrl + tempTitle);
  }
}
