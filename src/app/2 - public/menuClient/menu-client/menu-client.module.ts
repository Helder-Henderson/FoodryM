import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuClientPageRoutingModule } from './menu-client-routing.module';

import { MenuClientPage } from './menu-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuClientPageRoutingModule
  ],
  declarations: [MenuClientPage]
})
export class MenuClientPageModule {}
