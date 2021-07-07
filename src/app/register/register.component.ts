import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
acctype=""
acno=""
uname=""
pswd=""
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var acno=this.acno;
    var uname=this.uname;
    var pwd=this.pswd;
    var actype=this.acctype
    var result=this.ds.register(acno,uname,pwd,actype)
    if(result){
      alert("Successfully Registerd")
      this.router.navigateByUrl("")


    }
    else{
      alert("The account number is already exist")
      this.router.navigateByUrl("")
    }

    
  }

}
