import { Component, Input, OnInit } from '@angular/core';
import { Shape, Size } from './badge.interface';

@Component({
  selector: 'app-badge',
  template: `
    <span 
      [ngClass]="bgClass"
      class="tw-inline-flex tw-items-center tw-py-0.5 tw-font-medium"
    >
      <ng-content></ng-content>
    </span>
  `
})
export class BadgeComponent implements OnInit {

  @Input() bgClass!: string;
  @Input() size: Size = "lg";
  @Input() shape: Shape = 'circular';

  sizeMap = {
    "sm": "tw-px-2.5 tw-text-xs",
    "lg": "tw-px-3 tw-text-sm",
  }

  shapeMap = {
    "circular": "tw-rounded-full",
    "rounded": "tw-rounded-md",
  }

  constructor() { }

  ngOnInit(): void {
    this.customyzeSize();
    this.customyzeShape();
  }

  customyzeSize() {
    this.bgClass = this.bgClass + " " + this.sizeMap[this.size]
  }

  customyzeShape() {
    this.bgClass = this.bgClass + " " + this.shapeMap[this.shape]
  }

}
