import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { BlacklistService } from "../../services/blacklist.service";

@Component({
  selector: 'app-new-blacklist',
  templateUrl: './new-blacklist.component.html',
  styleUrls: ['./new-blacklist.component.sass']
})
export class NewBlacklistComponent implements OnInit {
  url: string;
  error: string;

  constructor(
    private router: Router,
    private blacklistService: BlacklistService
  ) { }

  ngOnInit() {
  }

  save() {
    this.blacklistService.save(this.url).subscribe(
      (result) => this.router.navigateByUrl("/settings/blacklist"),
      (error) => this.error = "Something went wrong :("
    );
  }
}
