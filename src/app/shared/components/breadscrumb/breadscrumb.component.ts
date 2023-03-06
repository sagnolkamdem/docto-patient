import { Component, Input } from '@angular/core';
import { Breadscrump } from './interfaces/breadscrump.interface';

@Component({
  selector: 'app-breadscrumb',
  template: `
    <nav aria-label="breadcrumb" [ngClass]="class">
        <ol class="tw-py-5 tw-flex tw-space-x-2.5 tw-pl-0 tw-mb-0">
          <li class="tw-text-xs tw-flex tw-items-center tw-text-slate-500">
            <a class="tw-text-slate-500 tw-no-underline" [routerLink]="'/account/profile'">Tableau de bord</a>
          </li>
          <li class="tw-text-xs tw-flex tw-items-center tw-text-slate-500" *ngFor="let bread of breadcrumb">
            <svg class="tw-text-slate-500 tw-w-5 tw-h-5" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.52092 5.25L11.4792 9L7.52091 12.75" stroke="#868AA5" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <a class="tw-ml-2.5 tw-text-slate-500 tw-no-underline tw-capitalize" [routerLink]="bread.link">{{bread.name}}</a>
          </li>
        </ol>
    </nav>
  `,
})
export class BreadscrumbComponent {

  @Input() breadcrumb!: Breadscrump[];
  @Input() class!: string;

}
