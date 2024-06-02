import { Component, OnInit } from '@angular/core';
import { MyServicesService } from 'src/app/services/my-services.service';

@Component({
  selector: 'app-view-data',
  templateUrl: './view-data.component.html',
  styleUrls: ['./view-data.component.scss']
})
export class ViewDataComponent {
  data: any = ''
  constructor(private service: MyServicesService) {
    this.service.getData().subscribe((resp: any) => {
      this.data = resp
    },
      error => {
        console.log(error)
      })
  }
}
