import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './views/main/main.component';
import { FilelistComponent } from './views/filelist/filelist.component';
import { ButtonComponent } from './core/components/button/button.component';
import { SelectUploadComponent } from './views/select-upload/select-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FilelistComponent,
    ButtonComponent,
    SelectUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
