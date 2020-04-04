import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { ModalController } from '@ionic/angular';
import { NotesComponent } from 'src/app/modals/notes.component';

@Component({
  selector: 'app-tab-page1',
  templateUrl: './tab-page1.component.html',
  styleUrls: ['./tab-page1.component.scss'],
})
export class TabPage1Component implements OnInit {

  previousNotes: Array<any>

  constructor(private user: UserService, private photoViewer: PhotoViewer, private modalController: ModalController) {
    this.previousNotes = this.user.pastNotes
  }

  ngOnInit() {}

  fullscreen(note){
    this.photoViewer.show(note.image, note.text, {share: true});
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
