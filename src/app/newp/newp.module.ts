import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewpPageRoutingModule } from './newp-routing.module';
import { DragulaModule } from 'ng2-dragula';

import { NewpPage } from './newp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewpPageRoutingModule,
    DragulaModule
    
  ],
  declarations: [NewpPage]
})
export class NewpPageModule {}
