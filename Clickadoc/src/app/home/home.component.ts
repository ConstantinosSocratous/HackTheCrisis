import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NotesComponent } from '../modals/notes.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  logoPath = "../../assets/logo.png"

  constructor(private user: UserService, private router: Router, private modalController: ModalController) { }

  ngOnInit() {}

  navigateTo(path){
    this.router.navigate([path])
  }

  async showModal(){
    const modal = await this.modalController.create({
      component: NotesComponent,
      componentProps: { obj: this }
    });
    return await modal.present();
  }

  getModal(){
    return this.modalController;
  }

}
