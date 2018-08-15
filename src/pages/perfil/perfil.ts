import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsPage } from '../friends/friends';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfil: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.perfil = navParams.get('Perfil')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  navigateBack() {
    this.navCtrl.pop();
  }

  navigateNext() {
    this.navCtrl.push(FriendsPage);
  }

}
