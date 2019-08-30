import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {AppointmentDataService} from '../api/api.appointmentDataService';
import {DialogAddAppointmentComponent} from '../dialog-add-appointment/dialog-add-appointment.component';
import {DialogEditAppointmentComponent} from '../dialog-edit-appointment/dialog-edit-appointment.component';
import {Appointment} from '../api/api.appointment';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  @Input() appointment: Appointment;

  constructor(public dialog: MatDialog, private service: AppointmentDataService) {}

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogEditAppointmentComponent, {
      width: '350px',
      data: this.appointment
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result !== undefined ) {
        this.service.updateAppointmentById(result).subscribe();
      }
    });
  }
}
