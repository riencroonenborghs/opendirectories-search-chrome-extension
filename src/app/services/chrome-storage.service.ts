import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})

export class ChromeStorageService {
  constructor() { }

  get(key: string): Observable<Array<any>> {
    return new Observable((observer) => {
      let storageData = localStorage.getItem(key);
      if(storageData != null) {
        let data = JSON.parse(storageData);
        observer.next(data);
      } else {
        observer.next([]);
      }
    });
  }

  set(key: string, storageData: any): Observable<boolean> {
    return new Observable((observer) => {
      try {
        localStorage.setItem(key, JSON.stringify(storageData));
        observer.next(true);
      } catch(_) {
        observer.next(false);
      }
    });
  }

  clear(key: string): Observable<boolean> {
    return new Observable((observer) => {
      localStorage.removeItem(key);
      observer.next(true);
    });
  }
}
