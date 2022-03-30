import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/core/enums/Colors';
import { ImgModel } from 'src/app/core/models/ImgModel';
import { HttpService } from 'src/app/core/services/http.service';
import { SessionService } from 'src/app/core/services/session.service';
import { FilelistComponent } from '../filelist/filelist.component';

@Component({
  selector: 'app-select-upload',
  templateUrl: './select-upload.component.html',
  styleUrls: ['./select-upload.component.scss']
})
export class SelectUploadComponent implements OnInit {
  //Startregion variables

  btnConfigSelect = {
    styles: {
      position: 'relative',
      backgroundColor: Colors.Blue,
    },
    text: 'Select',
  };

  btnConfigUpload = {
    styles: {
      position: 'relative',
      backgroundColor: Colors.Blue,
    },
    text: 'Upload',
  };

  selectedFile: File;

  //Endregion variables

  constructor(
    private _httpService: HttpService,
    private _sessionService: SessionService
  ) {}

  ngOnInit(): void {}

  //Startregion functions

  onFileSelect(event) {
    this.selectedFile = event.target.files[0];
  }

  uploadImg() {
    let imgDto: ImgModel = {
      name: this.selectedFile.name
    }
    this._httpService.postImgData(imgDto);
    this.selectedFile = null;
  }

  //Endregion functions

}
 