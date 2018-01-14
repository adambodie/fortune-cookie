import { Injectable } from '@angular/core';
import { Data } from './data';
import { FORTUNEDATA } from './mock-data';
@Injectable()
export class DataService {

  constructor() { }
  getData(): Promise<Data[]>{
    return Promise.resolve(FORTUNEDATA);
}
}
