import { Component, OnInit } from '@angular/core';
import {AppointmentDataService} from '../api/api.appointmentDataService';
import {HorseDataService} from '../api/api.horseDataService';
import {Horse} from '../api/api.horse';

@Component({
  selector: 'app-horse-info',
  templateUrl: './horse-info.component.html',
  styleUrls: ['./horse-info.component.css']
})
export class HorseInfoComponent implements OnInit {
  horse: Horse;

  constructor(private horseDataService: HorseDataService) { }

  ngOnInit() {
    var toto = this.horseDataService.getAllHorses().subscribe((appointment) => {this.horse = appointment[0]});
  }

}
