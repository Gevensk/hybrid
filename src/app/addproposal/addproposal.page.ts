import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproposal',
  templateUrl: './addproposal.page.html',
  styleUrls: ['./addproposal.page.scss'],
})
export class AddproposalPage implements OnInit {
  teams: any[] = [];
  idteam = 0
  description = ""
  idmember: string | null = null;

  constructor(private scheduleservice: ScheduleserviceService, private router: Router) { }

  ngOnInit() {
    this.idmember = localStorage.getItem("app_idmember");
    console.log("ID Member dari localStorage:", this.idmember);

    if (this.idmember) {
      this.scheduleservice.getAvailableTeam(this.idmember).subscribe(
        (response: any) => {
          console.log("Response dari API:", response);
          if (response.result === 'OK' && Array.isArray(response.data)) {
            this.teams = response.data;
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
  }

  addProposal() {
    if (this.idmember) {
      this.scheduleservice.addProposal(
        this.idmember,
        this.idteam,
        this.description
      ).subscribe((response: any) => {
        if (response.result === 'success') {
          this.router.navigate(['/proposallist']);
        } else {
          alert(response.message);
        }
      });
    } else {
      alert("ID Member tidak ditemukan.");
    }
  }
}
