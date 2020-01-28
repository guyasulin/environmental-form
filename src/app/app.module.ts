import { DataService } from './services/data.service';
import { ApplicantDetailsComponent } from './pages/applicant-details/applicant-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PagesComponent } from './pages/pages.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import { PagesModule } from './pages/pages.module';
import { MatIconModule } from '@angular/material/icon';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { SucsessComponent } from './popup/sucsess/sucsess.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SucsessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    PagesModule,
    MatDialogModule
  ],
  entryComponents: [
    SucsessComponent
  ],
  providers: [HttpService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
