import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyServicesService } from 'src/app/services/my-services.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent {

  constructor(private fb: FormBuilder,
    private service: MyServicesService,
    private route: Router) { }

  formGroup = this.fb.group({
    // id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    location: ['', [Validators.required]]
  })
  postData() {
    this.service.postData(this.formGroup.value).subscribe((resp: any) => {
      console.log(resp)
      this.route.navigate([''])
    },
      error => {
        console.log(error)
      }
    )
  }

}
