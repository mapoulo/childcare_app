import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.page.html',
  styleUrls: ['./dragndrop.page.scss'],
})
export class DragndropPage implements OnInit {

  q1 = [
    { value: 'Buy Milk', color: 'primary',pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { value: 'Write new Post', color: 'primary',pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
  ];
  q2 = [
    { value: 'Schedule newsletter', color: 'secondary',pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { value: 'Find new Ionic Academy topics', color: 'secondary',pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }
  ];
  q3 = [
    { value: 'Improve page performance', color: 'tertiary' ,pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'},
    { value: 'Clean the house', color: 'tertiary' ,pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
  ];
  q4 = [
    { value: 'Unimportant things', color: 'warning',pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' },
    { value: 'Watch Netflix', color: 'warning' ,pic:'https://images.pexels.com/photos/3828240/pexels-photo-3828240.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
  ];
 
  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';
 

  constructor(private dragulaService: DragulaService, private toastController: ToastController) {
    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      el.setAttribute('color', 'danger');
    });
 
    this.dragulaService.removeModel('bag')
    .subscribe(({ item }) => {
      this.toastController.create({
        message: 'Good Job!',
        position:"middle",
        duration: 2000
      }).then(toast => toast.present());
    });
 
    this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        item['color'] = 'success';
      });
 
    this.dragulaService.createGroup('bag', {
      removeOnSpill: true
    });
  }
  ionViewDidLeave()
  {
    this.dragulaService.destroy('bag')
  }

  addTodo() {
    switch (this.selectedQuadrant) {
      case 'q1':
        this.todo.color = 'primary';
        break;
      case 'q2':
        this.todo.color = 'secondary';
        break;
      case 'q3':
        this.todo.color = 'tertiary';
        break;
      case 'q4':
        this.todo.color = 'warning';
        break;
    }
    this[this.selectedQuadrant].push(this.todo);
    this.todo = { value: '', color: '' };
  }


  slideOpts = {
    initialSlide: 0,
    speed: 400,
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },on: {
      beforeInit: function() {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
        const overwriteParams = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true,
        };
  
        this.params = Object.assign(this.params, overwriteParams);
        this.originalParams = Object.assign(this.originalParams, overwriteParams);
      }
    
  }

  ngOnInit() {
  }

}
