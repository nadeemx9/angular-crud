import { Component, OnInit } from '@angular/core';
import { tick } from '@angular/core/testing';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MyServicesService } from 'src/app/services/my-services.service';

@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.scss']
})
export class EditDataComponent {

  id: number = 0
  data: any = {}
  formGroup = this.fb.group({
    id: ['', Validators],
    name: [''],
    email: [''],
    location: ['']
  }) // Reactive FormControl
  constructor(private activatedRoute: ActivatedRoute,
    private service: MyServicesService,
    private fb: FormBuilder,
    private route: Router) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
    })

    this.service.getById(this.id).subscribe((data: any) => {
      this.data = data
      this.formGroup.setValue(this.data);
    })

  }

  updateData() {
    this.service.updateData(this.formGroup.value).subscribe((resp: any) => {
      this.route.navigate([''])
    })    
  }
}
