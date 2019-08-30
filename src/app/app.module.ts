import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MainTabComponent} from './main-tab/main-tab.component';
import {AppointmentDataService} from './api/api.appointmentDataService';
import {ApiService} from './api/api.service';
import {HttpClientModule} from '@angular/common/http';
import {AddAppointmentComponent} from './add-appointment/add-appointment.component';
import {DialogAddAppointmentComponent} from './dialog-add-appointment/dialog-add-appointment.component';
import {
  MAT_DATE_LOCALE,
  MatButtonModule, MatDatepickerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule, MatNativeDateModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CdkColumnDef} from '@angular/cdk/table';
import {FormsModule} from '@angular/forms';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { HorseInfoComponent } from './horse-info/horse-info.component';
import {HorseDataService} from './api/api.horseDataService';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment.component';
import { DialogEditAppointmentComponent } from './dialog-edit-appointment/dialog-edit-appointment.component';

registerLocaleData(localeFr);

// @ts-ignore
@NgModule({
  declarations    : [
    AppComponent,
    MainTabComponent,
    AddAppointmentComponent,
    DialogAddAppointmentComponent,
    HorseInfoComponent,
    EditAppointmentComponent,
    DialogEditAppointmentComponent,
  ],
  imports : [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSortModule
  ],
  entryComponents : [
    DialogAddAppointmentComponent, DialogEditAppointmentComponent
  ],
  providers: [HorseDataService, AppointmentDataService, ApiService, CdkColumnDef, {provide: MAT_DATE_LOCALE, useValue: 'fr'}, {provide: LOCALE_ID, useValue: 'fr' }],
  bootstrap: [AppComponent]
})
export class AppModule
{
}
