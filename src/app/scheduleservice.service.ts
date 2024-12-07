import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {
  link = "https://ubaya.xyz/hybrid/160422173/projectuas/"

  schedules = []
  games = []
  achievements = []
  teams = []
  team_members = []

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "login_member.php", urlEncodedData, { headers });
  }

  register(fname: string, lname: string, username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('fname', fname);
    body.set('lname', lname);
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "register_member.php", urlEncodedData, { headers });
  }

  addProposal(idmember: string, idteam: number, description: string): Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', idmember.toString());
    body.set('idteam', idteam.toString());
    body.set('description', description);
    const urlEncodedData = body.toString();
    return this.http.post(this.link + "add_proposal.php", urlEncodedData, { headers });
  }

  scheduleList(): Observable<any> {
    return this.http.get(this.link + "getschedule.php")
  }

  gameList(): Observable<any>{
    return this.http.get(this.link + "getgame.php")
  }

  scheduleDetail(id: number): Observable<any> {
    return this.http.get(this.link + "scheduledetail.php?id=" + id);
  }

  proposalList(idmember: string): Observable<any>{
    return this.http.get(this.link + "getproposal.php?idmember=" + idmember)
  }

  getAvailableTeam(idmember: string): Observable<any>{
    return this.http.get(this.link + "get_available_team.php?idmember=" + idmember)
  }
}