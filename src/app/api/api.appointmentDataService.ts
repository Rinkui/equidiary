import {EventEmitter, Injectable, Output} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Appointment} from './api.appointment';
import {tap} from 'rxjs/operators';

@Injectable()
export class AppointmentDataService {


  constructor(private api: ApiService) {
  }

  // Simulate POST /appointments
  addAppointment(todo: Appointment): Observable<Appointment> {
    return this.api.createAppointment(todo);
  }

  // Simulate DELETE /appointments/:id
  // deleteAppointmentById(id: number): Observable<{}> {
  //   return this.api.deleteAppointmentById(id);
  // }

  // Simulate PUT /appointments/:id
  updateAppointmentById(appointment: Appointment): Observable<Appointment> {
    return this.api.updateAppointment(appointment);
  }

  // Simulate GET /appointments
  getAllAppointment(): Observable<Appointment[]> {
    return this.api.getAllAppointment();
  }

  // Simulate GET /appointments/:id
  getAppointmentById(id: number): Observable<Appointment> {
    return this.api.getAppointmentById(id);
  }

  // Toggle todo complete
  // toggleTodoComplete(todo: Appointment) {
  //   let updatedTodo = this.updateTodoById(todo.id, {
  //     complete: !todo.complete
  //   });
  //   return updatedTodo;
  // }

}
