import { CharacterMakerComponent } from './CharacterMaker/charactermaker.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/charactermaker', pathMatch: 'full'},
  { path: 'charactermaker', component: CharacterMakerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CharacterMakerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
