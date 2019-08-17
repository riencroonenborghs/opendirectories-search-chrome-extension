import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { QueryBuilder } from "../../models/query-builder";
import { QueryType } from "../../models/query-type";
import { Blacklist } from "../../models/blacklist";
import { Query } from "../../models/query";

import { BlacklistService } from "../../services/blacklist.service";
import { QueryTypeService } from "../../services/query-type.service";
import { SavedQueryService } from "../../services/saved-query.service";

@Component({
  selector: 'app-query-builder',
  templateUrl: './query-builder.component.html',
  styleUrls: ['./query-builder.component.sass']
})
export class QueryBuilderComponent implements OnInit {
  private blacklist: Array<Blacklist>;

  query: Query = new Query();
  queryTypes: Array<QueryType>;

  error: string;

  constructor(
    private blacklistService: BlacklistService,
    private queryTypeService: QueryTypeService,
    private savedQueryService: SavedQueryService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loadBlacklists();
    this.loadQueryTypes();
  }

  clear() {
    this.query.clear();
  }

  save() {
    this.savedQueryService.save(this.query).subscribe(
      (result) => {
        this.router.navigateByUrl("/settings/saved-queries")
      },
      (error) => this.error = "Something went wrong :("
    );
  }

  search() {
    chrome.windows.create({
      url: this.query.url,
      incognito: this.query.incognito
    });
  }

  buildQuery() {
    this.query.build(this.blacklist);
  }

  private loadBlacklists() {
    this.blacklistService.all().subscribe(
      (data) => {
        this.blacklist = data;
      }
    );
  }

  private loadQueryTypes() {
    this.queryTypeService.all().subscribe(
      (data) => {
        this.queryTypes = data;
      }
    );
    this.query.queryType = this.queryTypes[0];
  }
}
