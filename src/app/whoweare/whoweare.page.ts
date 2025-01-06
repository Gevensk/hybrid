import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.page.html',
  styleUrls: ['./whoweare.page.scss'],
})
export class WhowearePage implements OnInit {
  like = 0;
  idmember: string | null = null;
  username = ""
  fullname = ""
  isLiked = false;

  constructor(private scheduleservice: ScheduleserviceService, private router: Router) {}

  ngOnInit() {
    this.idmember = localStorage.getItem("app_idmember");
    console.log("ID Member dari localStorage:", this.idmember);

    this.username = localStorage.getItem('app_username') || '';
    this.fullname = localStorage.getItem('app_fullname') || '';

    if (!this.username || !this.fullname) {
      this.router.navigate(['/login']);
    } else {
      if (this.idmember) {
        this.scheduleservice.getLikes(this.idmember).subscribe(
          (data) => {
            console.log('Likes data:', data);
            this.like = data.likes || 0;
            this.isLiked = data.userLiked || false;
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

  addLike() {
    if (this.idmember) {
      this.scheduleservice.addLikes(this.idmember).subscribe(
        (response) => {
          if (response && response.action === 'liked') {
            this.like++;
            this.isLiked = true;
          } else if (response && response.action === 'disliked') {
            this.like--;
            this.isLiked = false;
          } else {
            console.error('Unexpected response format:', response);
          }
        },
        (error) => {
          console.error('Error toggling like:', error);
        }
      );
    } else {
      console.error("ID Member tidak ditemukan di localStorage.");
    }
  }
}