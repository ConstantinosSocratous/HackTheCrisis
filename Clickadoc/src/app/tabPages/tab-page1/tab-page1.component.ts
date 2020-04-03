import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-tab-page1',
  templateUrl: './tab-page1.component.html',
  styleUrls: ['./tab-page1.component.scss'],
})
export class TabPage1Component implements OnInit {

  previousNotes: Array<any>

  constructor(private user: UserService, private photoViewer: PhotoViewer) {
    this.previousNotes = this.user.pastNotes
    console.log(this.previousNotes)
  }

  ngOnInit() {}

  fullscreen(note){
    this.photoViewer.show(note.image, note.text, {share: true});
  }

}
