import { Component, OnInit } from '@angular/core';
import { OutputService } from '../output/output.service';

@Component({
  selector: 'app-non-reactive-form',
  templateUrl: './non-reactive-form.component.html',
  styleUrls: ['./non-reactive-form.component.less', '../common/common.less']
})
export class NonReactiveFormComponent implements OnInit {
  firstName: string;
  lastName: string;

  constructor(private outputService: OutputService) { }

  ngOnInit() {
    this.outputService.object = undefined;
  }

  isSubmittable(): boolean {
    return this.firstName && this.firstName.length >= 3 && this.lastName && this.lastName.length >= 3;
  }

  submit() {
    this.outputService.object = {
      firstName: this.firstName,
      lastname: this.lastName
    };
  }
}
