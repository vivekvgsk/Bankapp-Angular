import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
aim="WELCOME TO LUMINAR BANK";
account="";
accno="Please Enter your Account No";
pwd="";
  

  constructor(private router: Router,private ds:DataService) { }

  ngOnInit(): void {
    
  }
  // accChange(event:any){
  //   this.accno=event.target.value;
  //   console.log(this.accno);
    

  // }
  // pwdChange(event:any){
  //   this.pwd=event.target.value;
  //   console.log(this.pwd);
  
  // }


  login(){
    var acno=this.accno;
    var pswd=this.pwd;
    var res=this.ds.login(acno,pswd)
    
    if(res){
      
        alert("login successfull");
        this.router.navigateByUrl("dashboard")
      }
     
    
    }
   

  }
  

  //LOGIN USING TEMPLATE VARIABLE
//   login(a:any,p:any){
//     var acno=a.value;
//     var pswd=p.value;
//     var accDetails=this.users;
//     if (acno in accDetails){
//       if(pswd == accDetails[acno]["password"]){
//         alert("login successfull");
//       }
//       else{
//         alert("invalid password");
//       }
    
//     }
//     else{
//       alert("invalid user");
//     }

//     alert("login successful");
//   }
// }


//   login(){
//     var acno=this.accno;
//     var pswd=this.pwd
//     var accDetails=this.users;
//     if (acno in accDetails){
//       if(pswd == accDetails[acno]["password"]){
//         alert("login successfull");
//       }
//       else{
//         alert("invalid password");
//       }
    
//     }
//     else{
//       alert("invalid user");
//     }

//     alert("login successful");
//   }
// }
