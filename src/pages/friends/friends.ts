import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})

export class FriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendsPage');
  }

  goToHome() {
    this.navCtrl.push(HomePage);
  }

  setRootHome() {
    // Quita el botón de regresar - Es mucho mejor
    this.navCtrl.setRoot(HomePage);
  }

}
