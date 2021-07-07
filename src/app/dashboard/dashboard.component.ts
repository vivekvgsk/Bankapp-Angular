import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 
  acno=""
  pwd=""
  amt=""
  accno=""
  pswd=""
  amnt=""

  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }
  deposit(){
   var acno=this.acno;
   var pwd=this.pwd;
   var amt=this.amt;
   var result=this.ds.deposit(acno,pwd,amt);
   if(result){
     alert("your account credited with Rs."+amt+"and your new balance is Rs."+result)
   }
    
  }
  withdraw(){
    var acno=this.accno;
    var pwd=this.pswd;
    var amt=this.amnt;
    var result=this.ds.withdraw(acno,pwd,amt)
    if(result){
      alert("your account is debited with Rs."+amt+"and your current balance is Rs."+result)
    }
   
  }

}
