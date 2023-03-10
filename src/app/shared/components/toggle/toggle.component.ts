import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  template: `
    <button (click)="toggledValue()" type="button" [ngClass]="{'tw-bg-primary-500': toggled, 'tw-bg-primary-100': !toggled}" class="tw-relative tw-inline-flex tw-h-6 tw-w-11 tw-flex-shrink-0 tw-cursor-pointer tw-rounded-full tw-border-2 tw-border-transparent tw-transition-colors tw-duration-200 tw-ease-in-out focus:tw-outline-none" role="switch" aria-checked="false">
      <span class="tw-sr-only">Use setting</span>
      <span aria-hidden="true" [ngClass]="{'tw-translate-x-5': toggled, 'tw-translate-x-0': !toggled}" class="tw-pointer-events-none tw-inline-block tw-h-5 tw-w-5 tw-transform tw-rounded-full tw-bg-white tw-shadow tw-ring-0 tw-transition tw-duration-200 tw-ease-in-out"></span>
    </button>
  `
})
export class ToggleComponent implements OnInit {

  @Input() toggled: boolean = false;
  @Input() backgroundClass!: string;

  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>();

  ngOnInit(): void {
    console.log(this.toggled);
  }

  toggledValue() {
    this.toggled = !this.toggled;
    this.result.emit(this.toggled);
  }

}
