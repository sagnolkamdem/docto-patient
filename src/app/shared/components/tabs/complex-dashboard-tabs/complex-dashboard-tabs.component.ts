import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-complex-dashboard-tabs',
  template: `
    <div class="">
      <ng-content></ng-content>
    </div>
  `,
})
export class ComplexDashboardTabsComponent {

}