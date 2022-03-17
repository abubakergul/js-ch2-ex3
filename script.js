'use strict';
const Mark={
    fullName:"markMillar",
    mass:78,
    height:1.69,
    calciBMI:function(){
     this.BMI=this.mass/this.height**2;
        return  this.BMI;
    }
}
  
const John={
    fullName:"johnSmith",
    mass:92,
    height:1.95,
    calciBMI:function(){
        this.BMI=this.mass/this.height**2;
        return  this.BMI;
    }
}
if(Mark.calciBMI()>John.calciBMI()) {  //or if(Mark.BMI>John.BMI)
    console.log(`${Mark.fullName} BMI (${Mark.calciBMI()}) is greater than ${John.fullName} BMI ${John.calciBMI()}!" ` )
    
}
  else if(Mark.calciBMI()<John.calciBMI()){
    console.log(`${John.fullName} BMI (${John.calciBMI()}) is greater than ${Mark.fullName} BMI ${Mark.calciBMI()}!" ` )
  }