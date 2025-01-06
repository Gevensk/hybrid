import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})

export class TeamsPage implements OnInit {
  game: any = {}; // Data game
  teams: any[] = []; // Data tim
  index = 0
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
        const idgame = params['index']; // Ambil ID game dari URL
        this.scheduleservice.getTeam(idgame).subscribe(
          (response: any) => {
            this.game = response.game; // Data game
            this.teams = response.teams; // Data tim
          },
          (error) => {
            console.error("Error fetching teams:", error);
          }
        );
      });
    }
  }
}
