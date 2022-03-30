import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment }from '../../../environments/environment'
import { ImgModel } from '../models/ImgModel';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  //Startregion functions

  public async getImgData(): Promise<ImgModel[]> {
    let res = await this._httpClient.get<ImgModel[]>(environment.baseDevUrl +'/Imgs').toPromise();
    return res;
  }

  public async postImgData(newImage: ImgModel) {
    await this._httpClient.post(environment.baseDevUrl +'/Imgs', newImage).toPromise();
  }

  public async deleteImgRecord(id: number) {
    await this._httpClient.delete(environment.baseDevUrl +'/Imgs/' + id.toString()).toPromise();
  }

  //Endregion functions
}
 