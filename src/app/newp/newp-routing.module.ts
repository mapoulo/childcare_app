import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewpPage } from './newp.page';

const routes: Routes = [
  {
    path: '',
    component: NewpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewpPageRoutingModule {}
