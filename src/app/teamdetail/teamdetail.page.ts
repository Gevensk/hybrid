import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teamdetail',
  templateUrl: './teamdetail.page.html',
  styleUrls: ['./teamdetail.page.scss'],
})
export class TeamdetailPage implements OnInit {
  indexGame = 0;
  indexTeam = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.indexGame = params['index'];
      this.indexTeam = params['memberindex'];
    });
  }
}
