import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { ToastController, ModalController } from '@ionic/angular';
import { Round2Service } from '../round2.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalPage } from '../modal/modal.page';


@Component({
  selector: 'app-newp',
  templateUrl: './newp.page.html',
  styleUrls: ['./newp.page.scss'],
})
export class NewpPage implements OnInit {

  q1:any = [
    { value: 'Buy Milk', color: 'primary' },
   
  ];
  q2:any = [
    { value: 'Schedule newsletter', color: 'secondary' },
   
  ];
  q3:any = [
    { value: 'Improve page performance', color: 'tertiary' },
  
  ];
 
 
  todo = { value: '', color: '' };
  selectedQuadrant = 'q1';
 res=0
 num =0
  constructor(public modalController:ModalController,public router:Router,public round:Round2Service,private dragulaService: DragulaService, private toastController: ToastController,public loadingController: LoadingController) {
    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      el.setAttribute('color', 'danger');
    });
 
    this.dragulaService.removeModel('bag')
    .subscribe(async item => {
     
    
    
      this.res = this.res+1;
      console.log(this.res)

      const loading = await this.loadingController.create({
        message: 'GOOD!',
        spinner:'bubbles',
        duration: 3000
      });
      await loading.present();

      loading.onDidDismiss().then(async res=>{
        if(this.round.roundtwo == true)
        {
        if (this.res == 1) {
         
          this.q1 = [
            { value: 'Buy Milk', color: 'primary', pic: 'https://media.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif' },

          ];
          this.q2 = [
            { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

          ];
          this.q3 = [
            { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

          ];
          console.log("value 1")
          console.log('q1',this.q1)
          console.log('q2',this.q2)
          console.log('q3',this.q3)
        }
        else if (this.res == 2) {
          this.q1 = [
            { value: 'Buy Milk', color: 'primary', pic: 'https://media.giphy.com/media/AOVDDuySk6o3m/giphy.gif' },

          ];
          this.q2 = [
            { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

          ];
          this.q3 = [
            { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

          ];

          console.log('q1',this.q1)
          console.log('q2',this.q2)
          console.log('q3',this.q3)

        }
        if (this.res == 3) {
          this.q1 = [
            { value: 'Buy Milk', color: 'primary', pic: 'https://media1.tenor.com/images/a3c98dddaca3b15d1746a62a44abbc2b/tenor.gif?itemid=6183864' },

          ];
          this.q2 = [
            { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

          ];
          this.q3 = [
            { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

          ];

          console.log("value 2")
          console.log('q1',this.q1)
          console.log('q2',this.q2)
          console.log('q3',this.q3)
        }
        else
          if (this.res == 4) {
            this.q1 = [
              { value: 'Buy Milk', color: 'primary', pic: 'https://data.whicdn.com/images/271728632/original.gif' },

            ];
            this.q2 = [
              { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

            ];
            this.q3 = [
              { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

            ];

            console.log("value 3")
          console.log('q1',this.q1)
          console.log('q2',this.q2)
          console.log('q3',this.q3)
          }
          else if (this.res == 5) {
            this.q1 = [
              { value: 'Buy Milk', color: 'primary', pic: 'https://i.pinimg.com/originals/ce/d4/51/ced4512db73c75e0a683ce0bc2b2f2d9.gif' },

            ];
            this.q2 = [
              { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

            ];
            this.q3 = [
              { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

            ];

            
          console.log('q1',this.q1)
          console.log('q2',this.q2)
          console.log('q3',this.q3)
          }
          else if (this.res == 6) {
            this.q1 = [
              { value: 'Buy Milk', color: 'primary', pic: 'https://media0.giphy.com/media/13FD3rp8IqYUXm/giphy.gif' },

            ];
            this.q2 = [
              { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

            ];
            this.q3 = [
              { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

            ];

            console.log("value 4")
          console.log('q1',this.q1)
          console.log('q2',this.q2)
          console.log('q3',this.q3)
          }
          else if (this.res == 7) {
            this.q1 = [
              { value: 'Buy Milk', color: 'primary', pic: 'https://i.pinimg.com/originals/3d/ac/62/3dac62954ab3ed18fd27b4a3aafcf260.gif' },

            ];
            this.q2 = [
              { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

            ];
            this.q3 = [
              { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

            ];


            console.log("value 5")
          console.log('q1',this.q1)
          console.log('q2',this.q2)
          console.log('q3',this.q3)
          }
          else if (this.res == 8) {
            {
                
              

                 
              const modal = await this.modalController.create({
                component: ModalPage
              });
              return await modal.present();

              modal.onDidDismiss().then(res=>{
                this.res = 1
                
              })
             
          }
          }

        }else
          if(this.round.roundtwo==false)
          {

            if (this.res == 1) {
              this.q1 = [
                { value: 'Buy Milk', color: 'primary', pic: 'https://media.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif' },
  
              ];
              this.q2 = [
                { value: 'Schedule newsletter', color: 'secondary', pic: 'https://giffiles.alphacoders.com/880/8803.gif' },
  
              ];
              this.q3 = [
                { value: 'Improve page performance', color: 'tertiary', pic: 'https://thumbs.gfycat.com/AnguishedVastDorking-small.gif' },
  
              ];
              console.log("value 1")
              console.log('q1',this.q1)
              console.log('q2',this.q2)
              console.log('q3',this.q3)
            }
            else if (this.res == 2) {
              this.q1 = [
                { value: 'Buy Milk', color: 'primary', pic: 'https://media.giphy.com/media/AOVDDuySk6o3m/giphy.gif' },
  
              ];
              this.q2 = [
                { value: 'Schedule newsletter', color: 'secondary', pic: 'https://giffiles.alphacoders.com/880/8803.gif' },
  
              ];
              this.q3 = [
                { value: 'Improve page performance', color: 'tertiary', pic: 'https://thumbs.gfycat.com/AnguishedVastDorking-small.gif' },
  
              ];
              console.log("value 2")
              console.log('q1',this.q1)
              console.log('q2',this.q2)
              console.log('q3',this.q3)
            }
            if (this.res == 3) {
              this.q1 = [
                { value: 'Buy Milk', color: 'primary', pic: 'https://media1.tenor.com/images/a3c98dddaca3b15d1746a62a44abbc2b/tenor.gif?itemid=6183864' },
  
              ];
              this.q2 = [
                { value: 'Schedule newsletter', color: 'secondary', pic: 'https://giffiles.alphacoders.com/880/8803.gif' },
  
              ];
              this.q3 = [
                { value: 'Improve page performance', color: 'tertiary', pic: 'https://thumbs.gfycat.com/AnguishedVastDorking-small.gif' },
  
              ];
              console.log("value 3")
              console.log('q1',this.q1)
              console.log('q2',this.q2)
              console.log('q3',this.q3)
            }
            else
              if (this.res == 4) {
                this.q1 = [
                  { value: 'Buy Milk', color: 'primary', pic: 'https://data.whicdn.com/images/271728632/original.gif' },
  
                ];
                this.q2 = [
                  { value: 'Schedule newsletter', color: 'secondary', pic: 'https://giffiles.alphacoders.com/880/8803.gif' },
    
                ];
                this.q3 = [
                  { value: 'Improve page performance', color: 'tertiary', pic: 'https://thumbs.gfycat.com/AnguishedVastDorking-small.gif' },
    
                ];
                console.log("value 4")
                console.log('q1',this.q1)
                console.log('q2',this.q2)
                console.log('q3',this.q3)
              }
              else if (this.res == 5) {
                this.q1 = [
                  { value: 'Buy Milk', color: 'primary', pic: 'https://i.pinimg.com/originals/ce/d4/51/ced4512db73c75e0a683ce0bc2b2f2d9.gif' },
  
                ];
                this.q2 = [
                  { value: 'Schedule newsletter', color: 'secondary', pic: 'https://giffiles.alphacoders.com/880/8803.gif' },
    
                ];
                this.q3 = [
                  { value: 'Improve page performance', color: 'tertiary', pic: 'https://thumbs.gfycat.com/AnguishedVastDorking-small.gif' },
    
                ];


                console.log('q1',this.q1)
                console.log('q2',this.q2)
                console.log('q3',this.q3)
              }
              else if (this.res == 6) {
                this.q1 = [
                  { value: 'Buy Milk', color: 'primary', pic: 'https://media0.giphy.com/media/13FD3rp8IqYUXm/giphy.gif' },
  
                ];
                this.q2 = [
                  { value: 'Schedule newsletter', color: 'secondary', pic: 'https://giffiles.alphacoders.com/880/8803.gif' },
    
                ];
                this.q3 = [
                  { value: 'Improve page performance', color: 'tertiary', pic: 'https://thumbs.gfycat.com/AnguishedVastDorking-small.gif' },
    
                ];


                console.log('q1',this.q1)
                console.log('q2',this.q2)
                console.log('q3',this.q3)
              }
              else if (this.res == 7) {
                this.q1 = [
                  { value: 'Buy Milk', color: 'primary', pic: 'https://i.pinimg.com/originals/3d/ac/62/3dac62954ab3ed18fd27b4a3aafcf260.gif' },
  
                ];
                this.q2 = [
                  { value: 'Schedule newsletter', color: 'secondary', pic: 'https://giffiles.alphacoders.com/880/8803.gif' },
    
                ];
                this.q3 = [
                  { value: 'Improve page performance', color: 'tertiary', pic: 'https://thumbs.gfycat.com/AnguishedVastDorking-small.gif' },
    
                ];

console.log("value 7")
                console.log('q1',this.q1)
                console.log('q2',this.q2)
                console.log('q3',this.q3)
              }
              else if (this.res == 8) {
                
              

                 
                  const modal = await this.modalController.create({
                    component: ModalPage
                  });
                  return await modal.present();
    
                  modal.onDidDismiss().then(res=>{
                    this.res = 1
                    
                  })
                 
              }
  






          }

    

      })
  
   

        
    





    });
 
    this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        item['color'] = 'success';
      });
 
    this.dragulaService.createGroup('bag', {
      removeOnSpill: true
    });
  }
 

ngOnInit()
{

}


ionViewDidEnter()
{
  if(this.round.roundtwo == true)
  {
  
   
    this.q1 = [
      { value: 'Buy Milk', color: 'primary', pic: 'https://media.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif' },

    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

    ];
    this.q3 = [
      { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

    ];
  }
  else
  {

    this.q1 = [
      { value: 'Buy Milk', color: 'primary', pic: 'https://media.giphy.com/media/xT9DPzhNGA8MKjxwFG/giphy.gif' },

    ];
    this.q2 = [
      { value: 'Schedule newsletter', color: 'secondary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/2335/2335153.svg' },

    ];
    this.q3 = [
      { value: 'Improve page performance', color: 'tertiary', pic: 'https://www.flaticon.com/premium-icon/icons/svg/1991/1991275.svg' },

    ];
  }


  
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
}