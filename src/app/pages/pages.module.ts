
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ApplicantDetailsComponent } from './applicant-details/applicant-details.component';
import { CommodityDetailsComponent } from './commodity-details/commodity-details.component';
import { SavingDetailsComponent } from './saving-details/saving-details.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule  } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { IngredientPipe } from './pipes/pipesIngredient';
import { SucsessComponent } from './popup/sucsess/sucsess.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    PagesComponent, 
    ApplicantDetailsComponent, 
    CommodityDetailsComponent, 
    SavingDetailsComponent,
    IngredientPipe,
    SucsessComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    MatMenuModule,
    MdePopoverModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule
  ],
  exports: [
    PagesComponent,
    ApplicantDetailsComponent, 
    CommodityDetailsComponent, 
    SavingDetailsComponent,
    SucsessComponent,
  ],
  entryComponents: [
    SucsessComponent
  ],
})
export class PagesModule { }
