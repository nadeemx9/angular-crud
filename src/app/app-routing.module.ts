import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { EditDataComponent } from './components/edit-data/edit-data.component';
import { PostDataComponent } from './components/post-data/post-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';

const routes: Routes = [
  {
    path: '',
    component: ViewDataComponent
  },
  {
    path: 'edit-data/:id',
    component: EditDataComponent
  },
  {
    path: 'create-data',
    component: PostDataComponent
  },
  {
    path: 'delete-data/:id',
    component: DeleteDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
