import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.page.html',
  styleUrls: ['./whoweare.page.scss'],
})
export class WhowearePage implements OnInit {
  like = 0

  constructor() { }

  ngOnInit() {
  }

  addLike(){
    this.like ++
  }

}
