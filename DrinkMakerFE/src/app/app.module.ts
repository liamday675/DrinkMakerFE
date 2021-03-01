import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { DrinkmakerComponent } from './drinkmaker/drinkmaker.component';

@NgModule({
  declarations: [
    AppComponent,
    DrinkmakerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
