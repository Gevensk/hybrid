import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.page.html',
  styleUrls: ['./achievements.page.scss'],
})
export class AchievementsPage implements OnInit {
  achievements:any[] = []
  game: any = null;
  index = 0
  year = ""
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
        const idgame = params['index'];
        console.log("idgame = " + idgame)
        this.fetchAchievements(idgame, this.year);
      });
    }
  }
  
  fetchAchievements(idgame: string, year: string) {
    console.log('Fetching achievements for idgame:', idgame, 'and year:', year);
    this.scheduleservice.getAchievement(idgame, year).subscribe(
      (response: any) => {
        console.log('API Response:', response);
        this.game = response.game;
        this.achievements = response.achievement || [];
      },
      (error) => {
        console.error('Error fetching achievements:', error);
      }
    );
  }  
  
  onYearChange() {
    this.route.params.subscribe(params => {
      const idgame = params['index'];
      this.fetchAchievements(idgame, this.year);
    });
  }  
}
