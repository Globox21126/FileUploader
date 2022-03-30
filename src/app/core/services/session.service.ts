import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ImgModel } from '../models/ImgModel';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  //Startregion variables

  data = new BehaviorSubject<ImgModel[]>(null);

  //Endregion variables

}
