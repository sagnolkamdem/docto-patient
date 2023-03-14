import { Component } from '@angular/core';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent {

  showResponsiveSideBar: boolean = false;
  showAnimationResponsiveSideBar: boolean = false;

  toggleShowResponsiveSideBar(): void {
    if (!this.showResponsiveSideBar) {
      this.showResponsiveSideBar = !this.showResponsiveSideBar;
      setTimeout(() => this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar, 100);
    }else {
      this.showAnimationResponsiveSideBar = !this.showAnimationResponsiveSideBar;
      setTimeout(() => this.showResponsiveSideBar = !this.showResponsiveSideBar, 200);
    }
  }

  close() {
    this.toggleShowResponsiveSideBar();
  }

}
