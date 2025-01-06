import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ourschedule',
  templateUrl: './ourschedule.page.html',
  styleUrls: ['./ourschedule.page.scss'],
})
export class OurschedulePage implements OnInit {
  schedules: any = {};
  username = ""
  fullname = ""
  idmember = ""

  constructor(private scheduleservice: ScheduleserviceService, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('app_username') || '';
    this.fullname = localStorage.getItem('app_fullname') || '';
    this.idmember = localStorage.getItem("app_idmember") || '';

    if (!this.username || !this.fullname) {
      this.router.navigate(['/login']);
    } else {
      this.scheduleservice.scheduleList().subscribe(
        (data) => {
          console.log(data);
          this.schedules = data
        }
      )
    }
  }
}