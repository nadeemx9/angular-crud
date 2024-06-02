import { Component } from '@angular/core';
import { tick } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServicesService } from 'src/app/services/my-services.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent {
  constructor(private route: Router,
    private service: MyServicesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.service.deleteData(params['id']).subscribe(resp => {
        this.route.navigate([''])
      }
      )
    })
  }
}
