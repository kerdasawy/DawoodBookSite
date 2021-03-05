import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Item } from '../item';

import { LoadItemsService } from 'src/app/load-items.service';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'app-item-collection',
  templateUrl: './item-collection.component.html',
  styleUrls: ['./item-collection.component.css']
})
export class ItemCollectionComponent implements OnInit {

  public items: Item[];
  public allItems: Item[];
  public showItems: Item[];
  public dataLoaded: boolean;
  public showMode: string;
  public filter: string;
  public showModes: string[] = ["All", "Title", "Item"];
  constructor(public  service: LoadItemsService) {
    this.dataLoaded = false;
    
    this.showMode = "Title";

    this.service.getItems().subscribe
      ((data: Item[]) => {
        this.allItems = data;
        this.dataLoaded = true;
        if (this.service.searchtext != "") {
          this.onSearch(this.service.searchtext);

        }
      });
  }
  onSearch(filterInput: string): void {
   
    if (String(filterInput).length > 1) {
      this.filter = String(filterInput);
      this.dataLoaded = false;
      var wait = new Observable<string>((observer: Observer<string>) => {
        if (this.service.searchType == "Title") {
        this.items =  this.allItems.filter(i => i.Name.search(filterInput) >= 0) ;
      }
      
      else {
          this.items = this.allItems.filter(i => i.Desc.search(filterInput) >= 0) ;
         
        }
        this.dataLoaded = true;
        return observer.next("");
      });
      var x = wait.subscribe(s => s );
    }
  }


  onItemClick(id: string): void {
    this.showMode = "Item";
    this.onSearch(id);
  }
  ngOnInit() {
  }

}
