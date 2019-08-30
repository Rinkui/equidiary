import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Appointment} from './api.appointment';
import {tap} from 'rxjs/operators';
import {Horse} from './api.horse';

const API_URL = environment.apiUrl;

const httpOptions = {
  headers: new HttpHeaders({'Content-Type':  'application/json'})
};

@Injectable()
export class ApiService {
  static readonly road = '/appointment/';
  static readonly horseRoad = '/horse/';

  @Output() appointmentAdded: EventEmitter<string> = new EventEmitter<string>();


  public constructor(private http: HttpClient) {}

  public getAllHorses(): Observable<Horse[]> {
    return this.http.get<Horse[]>(API_URL + ApiService.horseRoad);
  }

  // API: GET /professors
  public getAllAppointment(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(API_URL + ApiService.road);
  }

  // API: POST /appointments
  public createAppointment(prof: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(API_URL + ApiService.road, prof, httpOptions).pipe(
      tap(_ => this.appointmentAdded.emit())
    );
  }

  // API: GET /appointments/:id
  public getAppointmentById(profId: number): Observable<Appointment> {
    return this.http.get<Appointment>(API_URL + ApiService.road + profId);
  }

  // API: PUT /appointments/:id
  public updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(API_URL + ApiService.road + appointment.id, appointment);
  }

  // DELETE /appointments/:id
  // public deleteAppointmentById(id: number): Observable<{}> {
  //   return this.http.delete(API_URL + ApiService.road + id);
  // }
}
