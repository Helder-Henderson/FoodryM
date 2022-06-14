import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuClientPage } from './menu-client.page';

const routes: Routes = [
  {
    path: '',
    component: MenuClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuClientPageRoutingModule {}
