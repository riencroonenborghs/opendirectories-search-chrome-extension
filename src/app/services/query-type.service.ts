import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ChromeStorageService } from "./chrome-storage.service";
import { QueryType } from "../models/query-type";

@Injectable({
  providedIn: 'root'
})
export class QueryTypeService {
  private key: string= "query-type";  

  constructor(
    private chromeStorageService: ChromeStorageService
  ) { }

  all(): Observable<Array<QueryType>> {
    return new Observable((observer) => {
      let list: Array<QueryType> = this.defaultList();
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          data.forEach((item) => {
            list.push(new QueryType(item.label, item.extensions, false));
          });
          observer.next(list);
        },
        (error) => observer.next([])
      );
    });
  }

  save(label: string, extensions: Array<string>): Observable<boolean>  {
    return new Observable((observer) => {
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          data.push({label: label, extensions: extensions});
          this.chromeStorageService.set(this.key, data).subscribe(
            (result) => { observer.next(true) },
            (error) => { observer.next(false) }
          );
        },
        (error) => { observer.next(false) }
      );
    });
  }

  remove(queryType: QueryType): Observable<boolean> {
    return new Observable((observer) => {
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          let index = -1;
          data.forEach((item, idx) => {
            if(item.label == queryType.label) { index = idx; }
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

  private defaultList(): Array<QueryType> {
    let list: Array<QueryType> = new Array<QueryType>();
    list.push(new QueryType("Movies", ["avi", "mp4", "mkv", "vob", "divx"]));
    list.push(new QueryType("Music", ["mp3", "flac", "aac"]));
    list.push(new QueryType("Books", ["pdf", "epub", "mob"]));
    list.push(new QueryType("Mac Software", ["dmg", "sit"]));
    list.push(new QueryType("General", []));
    return list;
  }
}
