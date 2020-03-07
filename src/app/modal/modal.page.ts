import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(private routes: Router) { }

  ngOnInit() {
  }

  start() {
    this.routes.navigateByUrl('/dragndrop')
  }

}
