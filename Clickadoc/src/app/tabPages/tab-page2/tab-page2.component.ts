import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab-page2',
  templateUrl: './tab-page2.component.html',
  styleUrls: ['./tab-page2.component.scss'],
})
export class TabPage2Component implements OnInit {

  reason: String = ''
  date = "2020-04-04"
  time = "2020-04-04T07:30Z"
  requestedAppointments: Array<any> = []

  constructor(private alertController: AlertController,
    private toastController: ToastController) { }

  ngOnInit() {}

  submit(){
    this.presentAlertConfirm()
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Request appointment with your personal doctor?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
            this.presentToast('Cacnel', 1500)
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.presentToast('Request sent successfully',2500)
            this.addRequest()
          }
        }
      ]
    });

    await alert.present();
  }

  async presentToast(msg, dur) {
    const toast = await this.toastController.create({
      message: msg,
      duration: dur
    });
    toast.present();
  }

  addRequest(){
    let tm = new Date(this.time)
    // console.log(this.time, tm)
    this.requestedAppointments.push({reason: this.reason, date: this.date, time: tm.getHours() + ":" + tm.getMinutes()})
    // console.log(this.requestedAppointments.length)
  }
}
