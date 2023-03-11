import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardTabs } from './interfaces/dashboard-tabs.interface';

@Component({
  selector: 'app-dashboard-tabs',
  template: `
    <div [ngClass]="class" class="tw-flex tw-justify-between tw-items-center tw-gap-y-6 tw-flex-col sm:tw-flex-row">
        <div class="sm:tw-hidden">
          <label for="tabs" class="tw-sr-only">Select a tab</label>
          <select id="tabs" name="tabs" [(ngModel)]="page" (change)="changePage()" class="tw-block tw-w-full tw-rounded-md tw-border-primary-500 tw-py-2 tw-pl-3 tw-pr-10 tw-text-base focus:tw-border-primary-500 focus:tw-outline-none focus:tw-ring-primary-500 sm:tw-text-sm">
            <option *ngFor="let tab of tabs" [value]="tab.link">{{tab.name}}</option>
          </select>
        </div>
        <div class="tw-hidden sm:tw-flex tw-justify-between tw-px-5 tw-pt-5">
          <div class="tw-border-b tw-border-gray-200">
            <nav class="-tw-mb-px tw-flex tw-space-x-8" aria-label="Tabs">
              <a *ngFor="let tab of tabs" [routerLink]="tab.link" routerLinkActive="active" class="tw-border-transparent tw-no-underline tw-text-tertiary hover:tw-border-gray-300 tw-whitespace-nowrap tw-px-1 tw-border-b-2 tw-font-semibold tw-text-lg">{{tab.name}}</a>
            </nav>
          </div>
        </div>
        <ng-content></ng-content>
    </div> 
  `,
  styles: [
    `.active{
      border-color: #50D6B6 !important,
    }`
  ]
})
export class DashboardTabsComponent {

  @Output() position: EventEmitter<string> = new EventEmitter<string>();

  @Input() tabs!: DashboardTabs[];
  @Input() class!: string;

  currentTabs!: number;
  page!: string;

  constructor(private router: Router){}

  moveToPage(page: number) {
    this.currentTabs === page;
  }

  changePage(){
    this.router.navigate([this.page]);
  }

}
