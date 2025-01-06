import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proposallist',
  templateUrl: './proposallist.page.html',
  styleUrls: ['./proposallist.page.scss'],
})
export class ProposallistPage implements OnInit {
  proposals: any[] = [];
  idmember: string | null = null;
  username = ""
  fullname = ""

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
        if (this.idmember) {
          this.scheduleservice.proposalList(this.idmember).subscribe(
            (response: any) => {
              console.log("Response dari API:", response);
    
              if (response.result === 'OK' && Array.isArray(response.data)) {
                this.proposals = response.data;
              } else {
                console.error("Response tidak sesuai format:", response);
              }
            },
            (error) => {
              console.error("Error fetching proposals:", error);
            }
          );
        } else {
          console.error("ID Member tidak ditemukan di localStorage.");
        }
      } else {
        console.error("ID Member tidak ditemukan di localStorage.");
      }
    }
  }
}
