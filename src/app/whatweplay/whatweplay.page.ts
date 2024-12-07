import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-whatweplay',
  templateUrl: './whatweplay.page.html',
  styleUrls: ['./whatweplay.page.scss'],
})
export class WhatweplayPage implements OnInit {
  games:any[] = []
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
      this.scheduleservice.gameList().subscribe(
        (data) => {
          console.log(data);
          this.games = data
        }
      )
    }
  }
}