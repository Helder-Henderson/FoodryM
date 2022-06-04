import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IonicModule} from '@ionic/angular';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IndexComponent],
})
export class IndexModule { }
