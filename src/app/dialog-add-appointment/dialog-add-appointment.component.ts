import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Appointment} from '../api/api.appointment';

@Component({
  selector: 'app-dialog-add-appointment',
  templateUrl: './dialog-add-appointment.component.html',
  styleUrls: ['./dialog-add-appointment.component.css']
})
export class DialogAddAppointmentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogAddAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Appointment) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
