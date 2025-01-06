import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  idmember: string | null = null;
  username = ""
  fullname = ""
  profile: any = {};

  constructor(private scheduleservice: ScheduleserviceService, private router: Router) { }

  ngOnInit() {
    this.idmember = localStorage.getItem("app_idmember");
    console.log("ID Member dari localStorage:", this.idmember);

    this.username = localStorage.getItem('app_username') || '';
    this.fullname = localStorage.getItem('app_fullname') || '';

    if (!this.username || !this.fullname) {
      this.router.navigate(['/login']);
    } else {
      if (this.idmember) {
        this.scheduleservice.getProfile(this.idmember).subscribe(
          (data) => {
            this.profile = data.member[0];
          },
          (error) => {
            console.error('Error fetching likes:', error);
          }
        );
      } else {
        console.error("ID Member tidak ditemukan di localStorage.");
      }
    }
  }
}