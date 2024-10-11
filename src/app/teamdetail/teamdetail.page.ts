import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-teamdetail',
  templateUrl: './teamdetail.page.html',
  styleUrls: ['./teamdetail.page.scss'],
})
export class TeamdetailPage implements OnInit {
  indexGame = 0;
  indexTeam = 0;
  team_members: any[] = []
  games: any[] = []

  constructor(private route: ActivatedRoute, private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const team_members = this.scheduleservice.team_members
      this.games = this.scheduleservice.games
      this.indexGame = params['index'];
      this.indexTeam = params['memberindex'];

      const selectedTeam = team_members.find(
        team => team.idgame == this.indexGame && team.idteam == this.indexTeam
      );

      if (selectedTeam) {
        this.team_members = selectedTeam.members;
      }
    });
  }
}
