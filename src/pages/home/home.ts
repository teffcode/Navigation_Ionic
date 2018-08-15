import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController) { }

  goToPerfil(perfil) {
    this.navCtrl.push(PerfilPage, { Perfil: perfil });
  }

}