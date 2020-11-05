import { Component, OnInit } from '@angular/core';
import { OutputService } from '../output/output.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.less', '../common/common.less']
})
export class FormGroupComponent implements OnInit {
  myForm = new FormGroup({
    firstName: new FormControl('', [Validators.minLength(3), Validators.required]),
    lastName: new FormControl('', [Validators.minLength(3), Validators.required])
  });

  constructor(private outputService: OutputService) { }

  ngOnInit() {
    this.outputService.object = undefined;
  }

  submit() {
    this.outputService.object = this.myForm.value;
  }
}
