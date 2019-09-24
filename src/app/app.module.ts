import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SubMenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
