import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy} from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './2 - public/index/index.module';
import { RegisterModule } from './1 - admin/register/register.module';
import { ToastComponent } from './components/toast/toast.component';
import { ItemDetailComponent } from './1 - admin/menu/details/item-detail/item-detail.component';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     HttpClientModule,
     IndexModule,
     RegisterModule],
  providers: [ToastComponent,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
