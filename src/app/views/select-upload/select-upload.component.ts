import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/core/enums/Colors';

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
    text: 'Select'
  };

  btnConfigUpload = {
    styles: {
      position: 'relative',
      backgroundColor: Colors.Blue,
    },
    text: 'Upload'
  };

  //Endregion variables

  constructor() { }

  ngOnInit(): void {

    
  }

}
