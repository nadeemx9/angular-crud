import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyServicesService } from 'src/app/services/my-services.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent implements OnInit {
  id: number = 0
  data: any = {}
  constructor(private activatedRoute: ActivatedRoute, private service: MyServicesService) {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id']
      this.id = id
    })

    this.service.getById(this.id).subscribe((data: any) => {
      this.data = data
      console.log(this.data)
    })

  }

  ngOnInit(): void {

  }
}
