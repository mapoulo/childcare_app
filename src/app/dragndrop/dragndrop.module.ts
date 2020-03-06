import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DragndropPageRoutingModule } from './dragndrop-routing.module';
import { DragulaModule } from 'ng2-dragula';
import { DragndropPage } from './dragndrop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DragulaModule,
    DragndropPageRoutingModule
  ],
  declarations: [DragndropPage]
})
export class DragndropPageModule {}
