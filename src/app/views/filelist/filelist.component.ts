import { Component, OnInit } from '@angular/core';
import { Colors } from 'src/app/core/enums/Colors';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.scss']
})

export class FilelistComponent implements OnInit {
  //Startregion variables
  
  textBtnConfig = {
    styles: {
      position: 'relative',
      backgroundColor: Colors.Dark,
      color: 'white'
    },
    text: 'file list view'
  };

  //Endregion variables


  constructor() { }

  ngOnInit(): void {
  }

}
