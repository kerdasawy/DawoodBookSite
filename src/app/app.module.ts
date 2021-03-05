import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './itemShow/item/item.component';
import { ItemCollectionComponent } from './itemShow/item-collection/item-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
