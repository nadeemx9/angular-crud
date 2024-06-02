import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewDataComponent } from './components/view-data/view-data.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EditDataComponent } from './components/edit-data/edit-data.component'
import { ReactiveFormsModule } from '@angular/forms';
import { PostDataComponent } from './components/post-data/post-data.component';
import { DeleteDataComponent } from './components/delete-data/delete-data.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewDataComponent,
    EditDataComponent,
    PostDataComponent,
    DeleteDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
