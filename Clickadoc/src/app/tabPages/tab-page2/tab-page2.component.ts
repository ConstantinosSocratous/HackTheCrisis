import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab-page2',
  templateUrl: './tab-page2.component.html',
  styleUrls: ['./tab-page2.component.scss'],
})
export class TabPage2Component implements OnInit {

  reason: String = ''
  date:Date// "2020-04-04"
  time:Date// = "2020-04-04T07:30Z"
  requestedAppointments: Array<any> = [
    {reason: 'Emergency', date: '7-4-2020', time: '09:00', status: "Waiting for approval"},
    {reason: 'Usual checkup', date: '12-4-2020', time: '10:30', status: "Scheduled"}
  ]

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
            // console.log('Confirm Cancel: blah');
            this.presentToast('Cacnel', 1500)
          }
        }, {
          text: 'Okay',
          handler: () => {
            // console.log('Confirm Okay');
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
    let dt = new Date(this.date)
    this.requestedAppointments.push({reason: this.reason, date: dt.getDate() + "-" +
    (dt.getMonth()+1) + "-" + dt.getFullYear(), time: tm.getHours() + ":" + tm.getMinutes(), status: "Waiting for approval"})
    // console.log(this.requestedAppointments.length)
  }

  cancel(index){
    let object = this.requestedAppointments[index] // Item to remove
    this.requestedAppointments = this.requestedAppointments.filter(obj => obj !== object);
    // console.log(this.requestedAppointments)
    // delete this.requestedAppointments[index]
    // console.log(this.requestedAppointments)
  } 
}
