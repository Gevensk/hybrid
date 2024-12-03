import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';

@Component({
  selector: 'app-proposallist',
  templateUrl: './proposallist.page.html',
  styleUrls: ['./proposallist.page.scss'],
})
export class ProposallistPage implements OnInit {
  proposals: any[] = [];
  idmember: string | null = null;

  constructor(private scheduleservice: ScheduleserviceService) {}

  ngOnInit() {
    this.idmember = localStorage.getItem("app_idmember");
    console.log("ID Member dari localStorage:", this.idmember);

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
  }
}
