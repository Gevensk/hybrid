import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  username = ""
  fullname = ""
  idmember = ""

  constructor(private route: ActivatedRoute, private scheduleservice: ScheduleserviceService, private router: Router) { }

  ngOnInit() {
    this.username = localStorage.getItem('app_username') || '';
    this.fullname = localStorage.getItem('app_fullname') || '';
    this.idmember = localStorage.getItem("app_idmember") || '';
    
    if (!this.username || !this.fullname) {
      this.router.navigate(['/login']);
    } else {
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
}
