import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-ourschedule',
  templateUrl: './ourschedule.page.html',
  styleUrls: ['./ourschedule.page.scss'],
})
export class OurschedulePage implements OnInit {
  schedules:any[] = []

  constructor(private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.schedules = this.scheduleservice.schedules
  }

}
