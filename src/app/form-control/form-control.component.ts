import { Component, OnInit } from '@angular/core';
import { OutputService } from '../output/output.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.less', '../common/common.less']
})
export class FormControlComponent implements OnInit {
  firstName = new FormControl('', [Validators.minLength(3), Validators.required]);
  lastName = new FormControl('', [Validators.minLength(3), Validators.required]);

  constructor(private outputService: OutputService) { }

  ngOnInit() {
    this.outputService.object = undefined;
  }

  isSubmittable(): boolean {
    return this.firstName.valid && this.lastName.valid;
  }

  submit() {
    this.outputService.object = {
      firstName: this.firstName.value,
      lastname: this.lastName.value
    };
  }
}
