import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';

const routes: Routes = [
  {
    path: 'view-data',
    component: ViewDataComponent
  },
  {
    path: 'edit-data/:id',
    component: EditDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
