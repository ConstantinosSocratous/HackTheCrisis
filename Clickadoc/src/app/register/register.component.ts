import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {}

  navigateTo(path){
    this.router.navigate([path])
  }

  register(form){
    let values = form.value
    let result = this.auth.register(values.name, values.email, values.password, values.gesy)

    if(result){
      this.navigateTo('page1')
    }
  }
}
