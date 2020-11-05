import { Component, OnInit } from '@angular/core';
import { OutputService } from '../output/output.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.less', '../common/common.less']
})
export class FormArrayComponent implements OnInit {
  contactFormsList = this.fb.array([]);

  myForm = this.fb.group({
    firstName: ['', [Validators.minLength(3), Validators.required]],
    lastName: ['', [Validators.minLength(3), Validators.required]],
    contacts: this.contactFormsList
  });

  constructor(private outputService: OutputService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.outputService.object = undefined;
    this.add();
  }

  submit(): void {
    return this.outputService.object = this.myForm.value;
  }

  remove(i: number): void {
    this.contactFormsList.removeAt(i);
  }

  add(): void {
    this.contactFormsList.push(this.fb.group({
      phone: ['', [Validators.minLength(10), Validators.maxLength(10), Validators.required]],
      email: ['', [Validators.email, Validators.required]]
    }));
  }
}
