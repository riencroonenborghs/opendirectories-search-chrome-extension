import { Component, OnInit } from "@angular/core";

import { Blacklist } from "../../models/blacklist";
import { BlacklistService } from "../../services/blacklist.service";

@Component({
  selector: "app-blacklist",
  templateUrl: "./blacklist.component.html",
  styleUrls: ["./blacklist.component.sass"]
})
export class BlacklistComponent implements OnInit {
  list: Array<Blacklist>;

  constructor(
    private blacklistService: BlacklistService
  ) { }
  
  ngOnInit() {
    this.loadAll();
  }

  private loadAll() {
    this.blacklistService.all().subscribe(
      (data) => {
        this.list = data;
      }
    );
  }

  remove(blacklist: Blacklist) {
    this.blacklistService.remove(blacklist).subscribe(
      (data) => {
        this.loadAll();
      }
    );
  }
}
