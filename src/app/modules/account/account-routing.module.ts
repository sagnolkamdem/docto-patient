import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './note/note.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NoteComponent,
    data: {
      title: 'Mes notes'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
