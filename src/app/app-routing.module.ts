import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './itemShow/item/item.component';
import { ItemCollectionComponent } from './itemShow/item-collection/item-collection.component';


const routes: Routes = [
  { path: 'items', component: ItemCollectionComponent },
  { path: 'item/:id', component: ItemComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
