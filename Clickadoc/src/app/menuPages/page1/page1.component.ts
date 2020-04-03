import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss'],
})
export class Page1Component implements OnInit {

  username: String;
  pastActivity: Array<any>;

  constructor(private user: UserService) {
    this.username = this.user.username
    this.pastActivity = this.user.pastActivity
  }

  ngOnInit() {}

}
