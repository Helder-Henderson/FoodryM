import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './register.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [RegisterComponent],
})

export class RegisterModule { }
