import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-whatweplay',
  templateUrl: './whatweplay.page.html',
  styleUrls: ['./whatweplay.page.scss'],
})
export class WhatweplayPage implements OnInit {
  games:any[] = []

  constructor(private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.games = this.scheduleservice.games
  }

}
