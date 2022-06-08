import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { FoodsPageRoutingModule } from './foods-routing.module';

import { FoodsPage } from './foods.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [FoodsPage]
})
export class FoodsPageModule {}
