import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { QueryTypeService } from "../../services/query-type.service";

@Component({
  selector: 'app-new-query-type',
  templateUrl: './new-query-type.component.html',
  styleUrls: ['./new-query-type.component.sass']
})
export class NewQueryTypeComponent implements OnInit {
  label: string;
  extensions: string;
  error: string;

  constructor(
    private router: Router,
    private queryTypeService: QueryTypeService
  ) { }

  ngOnInit() {
  }

  save() {
    this.queryTypeService.save(this.label, this.extensions.split(",")).subscribe(
      (result) => this.router.navigateByUrl("/settings/query-types"),
      (error) => this.error = "Something went wrong :("
    );
  }
}
