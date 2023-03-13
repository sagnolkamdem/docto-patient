import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  @ViewChild('responsiveSideBar') responsiveSideBar!: ElementRef;

  @Input() title!: string;

  showResponsiveSideBar: boolean = false;
  showAnimationResponsiveSideBar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleShowResponsiveSideBar(): void {
    if (!this.showResponsiveSideBar) {
      this.showResponsiveSideBar = !this.showResponsiveSideBar;
      setTimeout(() => this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar, 100);
    }else {
      this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar;
      setTimeout(() => this.showResponsiveSideBar = !this.showResponsiveSideBar, 200);
    }
  }

}
