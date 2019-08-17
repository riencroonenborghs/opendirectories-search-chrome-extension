import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ChromeStorageService } from "./chrome-storage.service";
import { Blacklist } from "../models/blacklist";

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {
  private key: string= "blacklist";  

  constructor(
    private chromeStorageService: ChromeStorageService
  ) { }

  all(): Observable<Array<Blacklist>> {
    return new Observable((observer) => {
      let list: Array<Blacklist> = this.defaultList();
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          data.forEach((item) => {
            list.push(new Blacklist(item, false));
          });
          observer.next(list);
        },
        (error) => observer.next([])
      );
    });
  }

  save(url: string): Observable<boolean>  {
    return new Observable((observer) => {
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          data.push(url);
          this.chromeStorageService.set(this.key, data).subscribe(
            (result) => { observer.next(true) },
            (error) => { observer.next(false) }
          );
        },
        (error) => { observer.next(false) }
      );
    });
  }

  remove(blacklist: Blacklist): Observable<boolean> {
    return new Observable((observer) => {
      this.chromeStorageService.get(this.key).subscribe(
        (data) => {
          data.splice(data.indexOf(blacklist.url), 1);
          this.chromeStorageService.set(this.key, data).subscribe(
            (result) => { observer.next(true) },
            (error) => { observer.next(false) }
          );
        },
        (error) => { observer.next(false); }
      );
    });
  }

  private defaultList(): Array<Blacklist> {
    let list: Array<Blacklist> = new Array<Blacklist>();
    list.push(new Blacklist("watchtheshows.com"));
    list.push(new Blacklist("mmnt.net"));
    list.push(new Blacklist("listen77.com"));
    list.push(new Blacklist("unknownsecret.info"));
    list.push(new Blacklist("trimediacentral.com"));
    list.push(new Blacklist("wallywashis.name"));
    list.push(new Blacklist("ch0c.com"));
    list.push(new Blacklist("hypem.com"));
    list.push(new Blacklist("www.mkvtvseries.com"));
    list.push(new Blacklist("www.dlfox.xyz"));
    return list;
  }
}
