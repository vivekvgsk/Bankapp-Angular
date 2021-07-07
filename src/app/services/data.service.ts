import { Injectable } from '@angular/core';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:any = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

}

  constructor() { }
  register(acno:any,username:any,password:any,actype:any){
    let accDetails=this.users;
    if(acno in accDetails){
      return false;
    }
    else{
      accDetails[acno]={
        acno,username,password,actype,balance:0
      }
      return true;
    }
  }


login(acno:any,pswd:any){
  var accDetails=this.users;
    if (acno in accDetails){
      if(pswd == accDetails[acno]["password"]){
        return true;
       
      }
      else{
        alert("invalid password");
        return false;
      }
    
    }
    else{
      alert("invalid user");
      return false;
    }

  }
  deposit(acno:any,pwd:any,amt:any){
    var amount=parseInt(amt)
    var accDetails=this.users
    if(acno in accDetails){
      if(pwd==accDetails[acno]["password"]){
        return accDetails[acno]["balance"]+=amount;
      }
      else{
        alert("invalid password")
        return false
      }
    }
    else{
      alert("invalid user");
      return false;
    }
      
    }
withdraw(accno:any,pswd:any,amnt:any){
  var amount=parseInt(amnt)
  var accDetails=this.users
  if(accno in accDetails){
    if(accDetails[accno]["balance"]>amount){
      if(pswd==accDetails[accno]["password"]){
        accDetails[accno]["balance"]-=amount;
        return accDetails[accno]["balance"]

      }
      else{
        alert("invalid password");
      }
    }
    else{
      alert("You does not have sufficcient Balance to do this Transaction")
    }
    }
  else{
    alert("invalid user")
  }
  }

  
  }

