import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-teamdetail',
  templateUrl: './teamdetail.page.html',
  styleUrls: ['./teamdetail.page.scss'],
})
export class TeamdetailPage implements OnInit {
  index = 0
  team_members: any[] = []
  team: any = null;
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
        const idteam = params['index'];
        this.scheduleservice.getTeamMembers(idteam).subscribe(
          (response: any) => {
            // Proses data dari API
            this.team = response.team;
            this.team_members = response.members;
          },
          (error) => {
            console.error('Error fetching team details:', error);
          }
        );
      });
    }
  }
}
