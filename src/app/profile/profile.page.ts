import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  idmember: string | null = null;
  profile: any = {};

  constructor(private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.idmember = localStorage.getItem("app_idmember");
    console.log("ID Member dari localStorage:", this.idmember);

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