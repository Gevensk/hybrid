import { Component, OnInit } from '@angular/core';
import { ScheduleserviceService } from '../scheduleservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  
  fname: string = "";
  lname: string = "";
  username: string = "";
  password: string = "";
  pwconfirm: string = "";
  checkButton: boolean = false;

  constructor(private route:Router,private scheduleservice:ScheduleserviceService) {}

   register(){
    this.scheduleservice.register(this.fname,this.lname,this.username,this.password).subscribe((response: any) => {
      if(this.password !== this.pwconfirm){
        alert("Passwords do not match")
      }
      else{
        if(response.result==='success'){
          alert("Registration Successful")
          this.route.navigate(['/login'])
        } else {
          alert("Registration Failed")
        }
      }
    })
   }

  ngOnInit() {
  }
}
