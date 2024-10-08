import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})

export class TeamsPage implements OnInit {
  teams: any[] = []
  index = 0

  constructor(private route: ActivatedRoute, private scheduleservice: ScheduleserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.teams = this.scheduleservice.teams;
      this.index = params['index'];
    });
  }
}
