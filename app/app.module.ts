import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './components/parent/parent.component';
import { ChildiComponent } from './components/childi/childi.component';
import { ChildlComponent } from './components/childl/childl.component';
import { LocalService } from './services/local.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildiComponent,
    ChildlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
