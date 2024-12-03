import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username=""
  password=""
  fullname=""
  idmember="";

  constructor(private route:Router,private scheduleService:ScheduleserviceService) {
    this.username=localStorage.getItem("app_username") ?? ''
    this.fullname=localStorage.getItem("app_fullname") ?? ''
    this.idmember=localStorage.getItem("app_idmember") ?? ''
  }



  ngOnInit() {
  }

  login(){
    this.scheduleService.login(this.username,this.password).subscribe(
      (response: any) => {
         if(response.result==='success'){
            alert("success")
            this.fullname=response.fullname
            this.idmember = response.idmember;
            
            localStorage.setItem("app_username",this.username)
            localStorage.setItem("app_fullname",this.fullname)
            localStorage.setItem("app_idmember", this.idmember)

            this.route.navigate(['/whatweplay'], { replaceUrl: true }).then(() => {
              window.location.reload();
            });
          }
          else
          {
            alert(response.message)
          }
      }
    );
  }
}
