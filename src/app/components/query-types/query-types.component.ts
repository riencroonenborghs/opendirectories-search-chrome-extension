import { Component, OnInit } from '@angular/core';

import { QueryType } from "../../models/query-type";
import { QueryTypeService } from "../../services/query-type.service";

@Component({
  selector: 'app-query-types',
  templateUrl: './query-types.component.html',
  styleUrls: ['./query-types.component.sass']
})
export class QueryTypesComponent implements OnInit {
  list: Array<QueryType>;

  constructor(
    private queryTypeService: QueryTypeService
  ) { }

  ngOnInit() {
    this.loadAll();
  }

  private loadAll() {
    this.queryTypeService.all().subscribe(
      (data) => {
        this.list = data;
      }
    );
  }

  remove(queryType: QueryType) {
    this.queryTypeService.remove(queryType).subscribe(
      (data) => {
        this.loadAll();
      }
    );
  }
}
