import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    $('.menu-burger').on('click', (e) => {
      $('.page-content .sidebar').toggleClass('open');
      $('.overlay').toggleClass('visible');
    });
  }

}
