import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/core/enums/Colors';
import { ImgModel } from 'src/app/core/models/ImgModel';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.scss']
})

export class FilelistComponent implements OnInit {
  
  //Startregion variables

  btnConfig = {
    styles: {
      height: '40px',
      width: '135px',
      backgroundColor: Colors.Dark,
      color: 'white',
      marginTop: '15%'
    },
    text: 'get file list'
  };

  tableData: ImgModel[];

  //Endregion variables

  constructor(
    private _httpService: HttpService,
    public sessionService: SessionService
  ) {}

  ngOnInit(): void {
    this.getData();
  }

  //Startregion functions
  
  async getData() {
    this._httpService.getImgData()
      .then((response: ImgModel[]) => this.sessionService.data.next(response))
      .catch((err) => {
      console.log(err);
      throw err;
     });
  }

  async deleteRecord(element) {
    await this._httpService.deleteImgRecord(element.id);
    this.getData();
  }

  //Endregion functions

}
