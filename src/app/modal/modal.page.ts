import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Round2Service } from '../round2.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private routes: Router,public round:Round2Service,public modalController: ModalController) {



   }

  ngOnInit() {
  }

  start() {
    this.routes.navigateByUrl('/dragndrop')
    this.round.roundtwo =true;
    this.modalController.dismiss()
  }

}
