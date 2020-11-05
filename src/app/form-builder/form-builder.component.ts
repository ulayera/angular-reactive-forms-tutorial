import { Component, OnInit } from '@angular/core';
import { OutputService } from '../output/output.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.less', '../common/common.less']
})
export class FormBuilderComponent implements OnInit {
  myForm = this.fb.group({
    firstName: ['', [Validators.minLength(3), Validators.required]],
    lastName: ['', [Validators.minLength(3), Validators.required]],
    phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
    email: ['', [Validators.email, Validators.required]]
  });

  constructor(private outputService: OutputService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.outputService.object = undefined;
  }

  submit(): void {
    return this.outputService.object = this.myForm.value;
  }
}
