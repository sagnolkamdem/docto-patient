import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = '#F5F5F5';
  }

  ngAfterViewInit(): void {
    document.body.style.backgroundColor = '#FFF';
  }

  ngOnInit(): void {
  }


}
