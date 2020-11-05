import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OutputService {
  private _object: any;

  constructor() { }

  get object(): any {
    return this._object;
  }

  set object(value: any) {
    this._object = value;
  }
}
