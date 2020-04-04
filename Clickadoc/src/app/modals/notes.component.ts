import { Component, OnInit, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss'],
})
export class NotesComponent implements OnInit{

  @Input() obj: any;
  image: any = null
  text: string = ""

  constructor(private camera: Camera, private alertController: AlertController,
    private toastController: ToastController) { }

  dismissModal(){
    this.obj.getModal().dismiss();
  }

  ngOnInit(){

  }

  takePicture(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.image = imageData
      console.log("PICTURE PATH: " + imageData)

     }, (err) => {
      // Handle error
      console.log("error: " + err)
     });
  }

  send(){   
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Send message to doctor?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.presentToast('Cacnel')
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.image = null
            this.text= ""
            this.presentToast('Message sent successfully')
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
