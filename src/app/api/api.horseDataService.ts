import {EventEmitter, Injectable, Output} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {Appointment} from './api.appointment';
import {tap} from 'rxjs/operators';
import {Horse} from './api.horse';

@Injectable()
export class HorseDataService {


  constructor(private api: ApiService) {
  }

  // Simulate POST /appointments
  getAllHorses(): Observable<Horse[]> {
    return this.api.getAllHorses();
  }
}
