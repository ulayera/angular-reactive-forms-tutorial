import { Component, OnInit } from '@angular/core';
import { OutputService } from './output.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.less']
})
export class OutputComponent implements OnInit {

  object: any;

  constructor(public outputService: OutputService) { }

  ngOnInit() {
  }

}
