import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-scheduledetail',
  templateUrl: './scheduledetail.page.html',
  styleUrls: ['./scheduledetail.page.scss'],
})
export class ScheduledetailPage implements OnInit {
  index = 0
  schedules: any = {};
  alertButtons = ['OK']

  constructor(private route: ActivatedRoute, private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
      this.scheduleservice.scheduleDetail(params['index']).subscribe(
        (data) => {
          this.schedules = data;
        }
      );
    });
  }
}
