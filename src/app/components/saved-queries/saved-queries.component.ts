import { Component, OnInit } from '@angular/core';

import { Query } from "../../models/query";
import { SavedQueryService } from "../../services/saved-query.service";
import { BlacklistService } from "../../services/blacklist.service";

@Component({
  selector: 'app-saved-queries',
  templateUrl: './saved-queries.component.html',
  styleUrls: ['./saved-queries.component.sass']
})
export class SavedQueriesComponent implements OnInit {

  list: Array<Query>; 

  constructor(
    private savedQueryService: SavedQueryService,
    private blacklistService: BlacklistService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  remove(query: Query) {
    this.savedQueryService.remove(query).subscribe(
      (data) => {
        this.loadAll();
      }
    );
  }

  search(query: Query) {
    this.blacklistService.all().subscribe(
      (blacklist) => {
        query.build(blacklist);
        chrome.windows.create({
          url: query.url,
          incognito: query.incognito
        });
      }
    );
  }

  private loadAll() {
    this.savedQueryService.all().subscribe(
      (data) => {
        this.list = data;
      },
      (error) => {}
    );
  }
}
