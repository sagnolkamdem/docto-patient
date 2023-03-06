import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  underscorepersonalinformation:boolean=true;
  underscoremedicalhistory:boolean=false;
  fieldTextType: boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  underscore(n:boolean){
    if(n){
    this.underscorepersonalinformation= true;
    this.underscoremedicalhistory= false;
    }else{
      this.underscorepersonalinformation= false
      this.underscoremedicalhistory= true
    }
  }
  showInput(v:any){}
  next(){
 
    document.getElementById("medical-history-tab")?.click();
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}

