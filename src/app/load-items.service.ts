
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Item } from '../app/itemShow/item'

@Injectable({
  providedIn: 'root'
})
export class LoadItemsService {

  private _url: string = "../assets/Data/CoreData.json";
  constructor(private http: HttpClient) {

  }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this._url);
  }
  public searchtext: string = "";
  public searchType: string = "Title";

  public transform(value: any, args: any): any {
    if (!args) { return value; }
    var re = new RegExp(args, 'gi'); //'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
    return value.replace(re, "<mark>$&</mark>");
  }
}
