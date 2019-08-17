import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ChromeStorageService } from "./chrome-storage.service";
import { Query } from "../models/query";

@Injectable({
  providedIn: 'root'
})
export class SavedQueryService {
  private key: string= "saved-query";  

  constructor(
    private chromeStorageService: ChromeStorageService
  ) { }

  all(): Observable<Array<Query>> {
    return new Observable((observer) => {
      let list: Array<Query> = new Array<Query>();
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          data.forEach((item) => {
            let query: Query = new Query();
            query.fromData(item);
            list.push(query);
          });
          observer.next(list);
        },
        (error) => observer.next([])
      );
    });
  }

  save(query: Query): Observable<boolean>  {
    return new Observable((observer) => {
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          data.push(query.toHash());
          this.chromeStorageService.set(this.key, data).subscribe(
            (result) => { observer.next(true) },
            (error) => { observer.next(false) }
          );
        },
        (error) => { observer.next(false) }
      );
    });
  }

  remove(query: Query): Observable<boolean> {
    return new Observable((observer) => {
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          let index = -1;
          data.forEach((item, idx) => {
            if(item.query == query.query) { index = idx; }
          });
          if(index != -1) { data.splice(index, 1); }          
          this.chromeStorageService.set(this.key, data).subscribe(
            (result) => { observer.next(true) },
            (error) => { observer.next(false) }
          );
        },
        (error) => { observer.next(false); }
      );
    });
  }
}
