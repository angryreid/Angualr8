import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms"

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { DlHostDirective } from './dl-host.directive';

@NgModule({
   declarations: [
      AppComponent,
      AComponent,
      DlHostDirective
   ],
   imports: [
      BrowserModule,
      FormsModule,
   ],
   entryComponents:[AComponent],
   providers: [
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
