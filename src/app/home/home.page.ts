import { Component, OnInit } from '@angular/core';
import { CloudantService } from '../services/cloudant.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  
  constructor(public cloudantService : CloudantService) {
   
  }
  ngOnInit() {
   
  }

  createDatabase(dbname) {
    this.cloudantService.createDB(dbname);
  }

}
