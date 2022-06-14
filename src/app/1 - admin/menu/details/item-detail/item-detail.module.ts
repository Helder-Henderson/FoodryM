import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FoodsPageRoutingModule } from 'src/app/1 - admin/foods/foods-routing.module';
import { ItemDetailComponent } from './item-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations:[ItemDetailComponent]
})
export class ItemDetailModule { }
