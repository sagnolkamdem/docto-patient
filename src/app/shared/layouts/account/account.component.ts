import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  @Input() title!: string;

  showResponsiveSidebar: boolean = false;
  showAnimationResponsiveSideBar: boolean = false;

  toggleShowResponsiveSidebar() {
    if (!this.showResponsiveSidebar) {
      this.showResponsiveSidebar = !this.showResponsiveSidebar;
      setTimeout(() => this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar, 100);
    }else {
      this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar;
      setTimeout(() => this.showResponsiveSidebar = !this.showResponsiveSidebar, 200);
    }
  }

}
