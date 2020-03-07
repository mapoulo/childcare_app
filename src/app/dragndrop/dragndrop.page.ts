import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import {IonSlides} from '@ionic/angular';
import { ViewChild } from '@angular/core'

import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-dragndrop',
  templateUrl: './dragndrop.page.html',
  styleUrls: ['./dragndrop.page.scss'],
})




export class DragndropPage implements OnInit {
  ngOnInit() {

  }

  @ViewChild('slides', {static: true}) slides : IonSlides;

  
  q1 = [
    { value: 'Buy Milk', color: 'primary',pic:'https://media.giphy.com/media/3o6Mb8wu97ApZElWaQ/giphy.gif' },
   
  ];
  q2 = [
    { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
   
  ];
  q3 = [
    { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
    
  ];

 
  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';
 
counter =15;
res =0
  constructor(private dragulaService: DragulaService, private toastController: ToastController) {


    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      console.log(this.counter)
      if(this.counter == 0){ 
        this.counter=15
        this.slides.slideNext()

  this.slides.getActiveIndex().then(res=>{
    console.log(res)
   let num =res
   
  this.res =num+1;
    if(this.res==1)
    {
      this.q1 = [
        { value: 'Buy Milk', color: 'primary',pic:'https://media.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif' },
       
      ];
      this.q2 = [
        { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
       
      ];
     this.q3 = [
        { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
        
      ];
    }
    else if(this.res == 2)
    {
      this.q1 = [
        { value: 'Buy Milk', color: 'primary',pic:'https://media.giphy.com/media/AOVDDuySk6o3m/giphy.gif' },
       
      ];
      this.q2 = [
        { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
       
      ];
     this.q3 = [
        { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
        
      ];
    }
    if(this.res==3)
    {
      this.q1 = [
        { value: 'Buy Milk', color: 'primary',pic:'https://media1.tenor.com/images/a3c98dddaca3b15d1746a62a44abbc2b/tenor.gif?itemid=6183864' },
       
      ];
      this.q2 = [
        { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
       
      ];
     this.q3 = [
        { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
        
      ];
    }
    else
    if(this.res==4)
    {
      this.q1 = [
        { value: 'Buy Milk', color: 'primary',pic:'https://data.whicdn.com/images/271728632/original.gif' },
       
      ];
      this.q2 = [
        { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
       
      ];
     this.q3 = [
        { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
        
      ];
    }
    else if(this.res==5)
    {
      this.q1 = [
        { value: 'Buy Milk', color: 'primary',pic:'https://i.pinimg.com/originals/ce/d4/51/ced4512db73c75e0a683ce0bc2b2f2d9.gif' },
       
      ];
      this.q2 = [
        { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
       
      ];
     this.q3 = [
        { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
        
      ];
    }
    else if(this.res==6)
    {
      this.q1 = [
        { value: 'Buy Milk', color: 'primary',pic:'https://media0.giphy.com/media/13FD3rp8IqYUXm/giphy.gif' },
       
      ];
      this.q2 = [
        { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
       
      ];
     this.q3 = [
        { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
        
      ];
    }
  else  if(this.res==7)
  {
    this.q1 = [
      { value: 'Buy Milk', color: 'primary',pic:'https://i.pinimg.com/originals/3d/ac/62/3dac62954ab3ed18fd27b4a3aafcf260.gif' },
     
    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
     
    ];
   this.q3 = [
      { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
      
    ];
  }
  
  


  
})

        this.toastController.create({
          message: 'Good Job!',
          position:"middle",
          duration: 2000
        }).then(toast => toast.present());
      
        
      }

  }, 1000)





    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      el.setAttribute('color', 'primary');
    });
 
    this.dragulaService.removeModel('bag')
    .subscribe(({ item }) => {
      this.slides.slideNext()

console.log()
this.slides.getActiveIndex().then(res=>{
  console.log(res)
  console.log(this.slides.ionSlideDidChange)
this.res =res;
  if(this.res==1)
  {
    this.q1 = [
      { value: 'Buy Milk', color: 'primary',pic:'https://media.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif' },
     
    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
     
    ];
   this.q3 = [
      { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
      
    ];
  }
  else if(this.res == 2)
  {
    this.q1 = [
      { value: 'Buy Milk', color: 'primary',pic:'https://media.giphy.com/media/AOVDDuySk6o3m/giphy.gif' },
     
    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
     
    ];
   this.q3 = [
      { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
      
    ];
  }
  if(this.res==3)
  {
    this.q1 = [
      { value: 'Buy Milk', color: 'primary',pic:'https://media1.tenor.com/images/a3c98dddaca3b15d1746a62a44abbc2b/tenor.gif?itemid=6183864' },
     
    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
     
    ];
   this.q3 = [
      { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
      
    ];
  }
  else
  if(this.res==4)
  {
    this.q1 = [
      { value: 'Buy Milk', color: 'primary',pic:'https://data.whicdn.com/images/271728632/original.gif' },
     
    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
     
    ];
   this.q3 = [
      { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
      
    ];
  }
  else if(this.res==5)
  {
    this.q1 = [
      { value: 'Buy Milk', color: 'primary',pic:'https://i.pinimg.com/originals/ce/d4/51/ced4512db73c75e0a683ce0bc2b2f2d9.gif' },
     
    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
     
    ];
   this.q3 = [
      { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
      
    ];
  }
  else if(this.res==6)
  {
    this.q1 = [
      { value: 'Buy Milk', color: 'primary',pic:'https://media0.giphy.com/media/13FD3rp8IqYUXm/giphy.gif' },
     
    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
     
    ];
   this.q3 = [
      { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
      
    ];
  }
else  if(this.res==7)
{
  this.q1 = [
    { value: 'Buy Milk', color: 'primary',pic:'https://i.pinimg.com/originals/3d/ac/62/3dac62954ab3ed18fd27b4a3aafcf260.gif' },
   
  ];
  this.q2 = [
    { value: 'Schedule newsletter', color: 'secondary',pic:'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },
   
  ];
 this.q3 = [
    { value: 'Improve page performance', color: 'tertiary' ,pic:'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg'},
    
  ];
}

})



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
  ionViewDidLeave() {
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
    }, on: {
      beforeInit: function () {
        const swiper = this;
        swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
        swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
  
  
      }
    
  }
}


}
