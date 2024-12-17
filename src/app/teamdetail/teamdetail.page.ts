import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
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
