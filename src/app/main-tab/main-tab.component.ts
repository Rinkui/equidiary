import { Component, OnInit } from '@angular/core';
import {AppointmentDataService} from '../api/api.appointmentDataService';
import {Appointment} from '../api/api.appointment';
import {ApiService} from '../api/api.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-main-tab',
  templateUrl: './main-tab.component.html',
  styleUrls: ['./main-tab.component.css']
})
export class MainTabComponent implements OnInit {

  appointments: Appointment[] = [];
  sortedData: Appointment[];
  columns: string[] = ['date', 'type', 'commentaire', 'edit'];

  constructor(private appointmentDataService: AppointmentDataService,
              private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllAppointements();
    this.apiService.appointmentAdded.subscribe(_ => this.getAllAppointements());

  }

  private getAllAppointements()
  {
    this.appointmentDataService.getAllAppointment()
        .subscribe((appointment) => {
          this.appointments = appointment;
          this.sortedData = appointment;
        });
  }

  sortData(sort: Sort) {
    const data = this.appointments.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      return compare(a.date, b.date, isAsc);
    });


  function compare(a: string, b: string, isAsc: boolean): number{
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

  }

// onRemoveProf(appointment) {
  //   this.appointmentDataService
  //       .deleteAppointmentById(appointment.id)
  //       .subscribe(
  //         (_) => {
  //           this.appointments = this.appointments.filter((t) => t.id !== appointment.id);
  //         }
  //       );
  // }

}
