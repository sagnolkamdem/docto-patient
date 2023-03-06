import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

type position = "absolute" | "fixed";

@Component({
  selector: 'app-modal',
  template: `
    <div *ngIf="visible" class="tw-inset-0 tw-z-[1000]" [ngClass]="{'tw-absolute': position === 'absolute', 'tw-fixed': position === 'fixed'}" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div [@showHideBackdrop]="isOpen ? 'showBackdrop' : 'hideBackdrop'" class="tw-inset-0 tw-bg-gray-500 tw-bg-opacity-75 tw-transition-opacity" [ngClass]="{'tw-absolute': position === 'absolute', 'tw-fixed': position === 'fixed'}"></div>
      <div class="tw-inset-0 tw-z-10 tw-overflow-y-auto" [ngClass]="{'tw-absolute': position === 'absolute', 'tw-fixed': position === 'fixed'}">
        <div class="tw-flex tw-min-h-full tw-items-end tw-justify-center tw-p-4 tw-text-center tw-rounded-3xl tw-bg-transparent sm:tw-items-center sm:tw-p-0">
          <div [@showHidePanel]="isOpen ? 'showPanel' : 'hidePanel'" class="tw-relative tw-rounded-3xl tw-transform tw-bg-transparent tw-overflow-hidden tw-shadow-xl tw-transition-all" [ngClass]="class">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </div>
  `,
  animations: [
    trigger('showHideBackdrop', [
      state('showBackdrop', style({ opacity: 1 })),
      state('hideBackdrop', style({ opacity: 0 })),
      transition('hideBackdrop => showBackdrop', animate('.3s ease-in')),
      transition('showBackdrop => hideBackdrop', animate('.2s ease-out')),
    ]),

    trigger('showHidePanel', [
      state('showPanel', style({ opacity: 1, transform: 'scale(1)' })),
      state('hidePanel', style({ opacity: 0, transform: 'scale(.95)' })),
      transition('hidePanel => showPanel', animate('.3s ease-in')),
      transition('showPanel => hidePanel', animate('.2s ease-out')),
    ])
  ]
})
export class ModalComponent {
  
  @Input() class!: string;
  @Input() position: position = 'absolute';
  @Input() set visible(value: boolean) {
    if(!value) {
      this.isOpen = value;
      setTimeout(() => this._visible = value, 100);
    }else {
      this._visible = value;
      setTimeout(() => this.isOpen = value, 2);
    }
  }
  
  _visible!: boolean;
  isOpen!: boolean;

  get visible(): boolean { 
    return this._visible; 
  }

}
