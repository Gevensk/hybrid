import { Component } from '@angular/core';
import { ScheduleserviceService } from './scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  username=""
  password=""
  fullname=""


  constructor(private route:Router, private scheduleService:ScheduleserviceService) {
    this.username=localStorage.getItem("app_username") ?? ''
    this.fullname=localStorage.getItem("app_fullname") ?? ''  
  }

  logout()
  {
    this.username=""
    this.fullname=""
    localStorage.removeItem("app_username")
    localStorage.removeItem("app_fullname")
    
    this.route.navigate(['/login'], { replaceUrl: true }).then(() => {
      window.location.reload();
    });
  }
}
