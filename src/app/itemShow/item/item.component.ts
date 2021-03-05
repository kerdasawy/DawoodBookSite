import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Item } from '../item';
import { LoadItemsService } from '../../load-items.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input()
  public ItemToShow: Item
  constructor(private location: Location, private route: ActivatedRoute, public service: LoadItemsService) {
    const id = +this.route.snapshot.paramMap.get('id');
     service.getItems().subscribe(s => {
      var list = s.filter(i => i.ID == id);
      if (list.length > 0) {
        this.ItemToShow = JSON.parse(JSON.stringify(list[0]));
        this.ItemToShow.Desc = this.service.transform(this.ItemToShow.Desc, this.service.searchtext);
        var Scraper = require('images-scraper');

        const google = new Scraper({
          puppeteer: {
            headless: false,
          },
        });
        var searchKeyword = String(this.ItemToShow.Name);
        (async () => {
          const results = await google.scrape(String(searchKeyword), 2);
          console.log('results', results);
        })();
      }
    });
  }

  ngOnInit() {
  }
  public goBack() {
    this.location.back()
  }
}
