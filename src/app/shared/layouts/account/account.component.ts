import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  @Input() title!: string;

}
