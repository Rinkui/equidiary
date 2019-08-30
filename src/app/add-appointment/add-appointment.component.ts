import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DialogAddAppointmentComponent} from '../dialog-add-appointment/dialog-add-appointment.component';
import {AppointmentDataService} from '../api/api.appointmentDataService';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: AppointmentDataService) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddAppointmentComponent, {
      width: '350px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      if ( result !== undefined ) {
        this.service.addAppointment(result).subscribe();
      }
    });
  }
}
