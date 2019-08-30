import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Appointment} from '../api/api.appointment';

@Component({
  selector: 'app-dialog-edit-appointment',
  templateUrl: './dialog-edit-appointment.component.html',
  styleUrls: ['./dialog-edit-appointment.component.css']
})
export class DialogEditAppointmentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogEditAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Appointment) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
